import axios from "axios";
import { Middleware } from "redux";
import { throwNewError } from "../Error/actions";
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
        action.payload.message = res.data.message;
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
      next(action);
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
