import { getDataFromLocalStorage } from "../../Utils";
import {
  CREATE_ACCOUNT,
  LOGOUT,
  STORE_FETCHED_DATA,
  USER_AUTH,
} from "./actions";
import { UserDataActions, UserDataState } from "./types";

const initialState: UserDataState = {
  email: "",
  token: getDataFromLocalStorage("tkn"),
  message: "",
  isLoading: false,
  error: "",
  _id: getDataFromLocalStorage("_id"),
  username: ""
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
        error: action.payload.error,
      };
    }
    case USER_AUTH: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case STORE_FETCHED_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case LOGOUT: {
      return { ...initialState, token: "" };
    }
    default:
      return state;
  }
};

export default reducer;
