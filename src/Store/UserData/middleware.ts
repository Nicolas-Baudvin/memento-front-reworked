import axios from "axios";
import { Middleware } from "redux";
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
        console.log(e, e?.response?.data?.errors);
        if (e?.response?.data?.error)
          action.payload.error = e.response.data.error;
        else if (e?.response?.data?.errors)
          action.payload.error = e.response.data.errors.msg;
        else action.payload.error = "Une erreur avec le serveur est survenue";
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
          }
        });
        action.payload = { ...res.data, message: "Vous êtes connectés" }
        next(action);
      } catch (e) {
        
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
