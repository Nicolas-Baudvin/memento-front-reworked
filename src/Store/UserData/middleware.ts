import { Middleware } from "redux";
import fetchData, { errorHandler } from "../../Utils/fetchData";
import { newMessage } from "../Message/actions";
import { RootState } from "../reducer";
import { CREATE_ACCOUNT, LOGOUT, USER_AUTH } from "./actions";

const optsByRoute = (action: any) => ({
  signup: {
    url: process.env.REACT_APP_SIGNUP_URL,
    method: "post",
    headers: {},
    data: { ...action.payload },
  },
  login: {
    url: process.env.REACT_APP_LOGIN_URL,
    method: "post",
    headers: {},
    data: { ...action.payload },
  },
});

const middleware: Middleware<{}, RootState> =
  (store) => (next) => async (action) => {
    switch (action.type) {
      case CREATE_ACCOUNT: {
        const opts = optsByRoute(action)["signup"];
        try {
          const data: any = await fetchData(opts);
          store.dispatch(newMessage(data.message));
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch);
        }
        break;
      }
      case USER_AUTH: {
        const opts = optsByRoute(action)["login"];
        try {
          const data: any = await fetchData(opts);
          action.payload = { ...data, message: "Vous êtes connectés" };
          store.dispatch(newMessage("Vous êtes connectés avec succès !"));
          storeUserDataToLocalStorage(data);
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch);
        }
        break;
      }
      case LOGOUT: {
        localStorage.clear();
        next(action);
        break;
      }
      default: {
        next(action);
        break;
      }
    }
  };

const storeUserDataToLocalStorage = (data: any) => {
  localStorage.setItem("tkn", data.token);
  localStorage.setItem("_id", data._id);
  localStorage.setItem("username", data.username);
};

export default middleware;
