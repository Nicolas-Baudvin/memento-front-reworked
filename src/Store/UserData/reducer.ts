import {
  CREATE_ACCOUNT,
  LOGOUT,
  STORE_FETCHED_DATA,
  USER_AUTH,
} from "./actions";
import { UserDataActions, UserDataState } from "./types";

const initialState: UserDataState = {
  email: "",
  token: "",
  message: "",
  isLoading: false,
  error: "",
  _id: ""
};

const reducer = (
  state = initialState,
  action: UserDataActions
): UserDataState => {
  switch (action.type) {
    case CREATE_ACCOUNT: {
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error
      };
    }
    case USER_AUTH: {
      return {
        ...state,
        ...action.payload
      };
    }
    case STORE_FETCHED_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
