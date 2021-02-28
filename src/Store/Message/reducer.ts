import { THROW_NEW_ERROR, HIDE_MESSAGE, NEW_MESSAGE } from "./actions";
import { ErrorActions, ErrorState } from "./types";

const initialState: ErrorState = {
  message: "",
  isShow: false,
  isError: false,
};

const reducer = (state = initialState, action: ErrorActions): ErrorState => {
  switch (action.type) {
    case THROW_NEW_ERROR: {
      return {
        message: action.payload,
        isShow: true,
        isError: true,
      };
    }
    case NEW_MESSAGE: {
      return {
        message: action.payload,
        isShow: true,
        isError: false
      }
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        isShow: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
