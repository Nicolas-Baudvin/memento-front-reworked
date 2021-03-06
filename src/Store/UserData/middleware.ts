import axios from "axios";
import { Middleware } from "redux";
import { newMessage, throwNewError } from "../Message/actions";
import { RootState } from "../reducer";
import { CREATE_ACCOUNT, LOGOUT, USER_AUTH } from "./actions";

const middleware: Middleware<{}, RootState> = (store) => (next) => async (
  action
) => {
  switch (action.type) {
    case CREATE_ACCOUNT: {
      try {
        const res = await axios({
          url: process.env.REACT_APP_SIGNUP_URL,
          method: "POST",
          data: {
            ...action.payload,
          },
        });
        console.log(newMessage(res.data.message));
        store.dispatch(newMessage(res.data.message));
        next(action);
      } catch (e) {
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
      }
      break;
    }
    case USER_AUTH: {
      try {
        const res = await axios({
          url: process.env.REACT_APP_LOGIN_URL,
          method: "post",
          data: {
            ...action.payload,
          },
        });
        action.payload = { ...res.data, message: "Vous êtes connectés" };
        store.dispatch(newMessage("Vous êtes connectés avec succès !"));
        localStorage.setItem("tkn", res.data.token);
        localStorage.setItem("_id", res.data._id);
        next(action);
      } catch (e) {
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
      }
      break;
    }
    case LOGOUT: {
      console.log("logout")
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

export default middleware;
