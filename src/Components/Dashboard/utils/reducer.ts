import { NEW_BOARD_SELECTED, NEW_IMAGE_SELECTED, NEW_ISSHOW_STATE, NEW_TITLE, NEW_VISIBLE_STATE } from "./actions";
import { DashBoardUseReducerActions, LocalState } from "./types";

export const initialState: LocalState = {
  isVisible: false,
  selectedBoard: {
    title: "",
    ownerID: "",
    owner: { username: "" },
    image: { url: "", alt: "" },
    _id: "",
  },
  title: "",
  image: {
    url: "",
    alt: ""
  },
  isShow: false
};

const reducer = (state = initialState, action: DashBoardUseReducerActions) => {
  switch (action.type) {
    case NEW_VISIBLE_STATE: {
      return {
        ...state,
        isVisible: action.payload,
      };
    }
    case NEW_BOARD_SELECTED: {
      return {
        ...state,
        selectedBoard: action.payload,
      };
    }
    case NEW_ISSHOW_STATE: {
      return {
        ...state,
        isShow: action.payload
      }
    }
    case NEW_TITLE: {
      return {
        ...state,
        title: action.payload
      }
    }
    case NEW_IMAGE_SELECTED: {
      return {
        ...state,
        image: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
