import { Middleware } from "redux";
import { RootState } from "../reducer";
import { CREATE_ACCOUNT, LOGOUT, USER_AUTH } from "./actions";

const middleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ACCOUNT: {
      next(action);
      break;
    }
    case USER_AUTH: {
      next(action);
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
