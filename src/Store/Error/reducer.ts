import { THROW_NEW_ERROR, HIDE_ERROR } from "./actions";
import { ErrorActions, ErrorState } from "./types";

const initialState: ErrorState = {
  message: "",
  isShow: false,
};

const reducer = (state = initialState, action: ErrorActions): ErrorState => {
  switch (action.type) {
    case THROW_NEW_ERROR: {
      return {
        message: action.payload,
        isShow: true,
      };
    }
    case HIDE_ERROR: {
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
