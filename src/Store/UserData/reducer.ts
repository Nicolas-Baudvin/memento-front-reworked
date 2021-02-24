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
};

const reducer = (
  state = initialState,
  action: UserDataActions
): UserDataState => {
  switch (action.type) {
    case CREATE_ACCOUNT: {
      return {
        ...state,
        message:
          "Le compte a bien été créer, vous pouvez désormais vous connecter via la page de connexion",
      };
    }
    case USER_AUTH: {
      return {
        ...state,
        message: "Vous êtes connectés",
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
