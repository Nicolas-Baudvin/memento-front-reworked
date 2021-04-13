import { NEW_CURRENT_BOARD, UPDATE_BOARDS } from "./actions";
import { BoardActions, BoardState } from "./types";

const initialState: BoardState = {};

const reducer = (state = initialState, action: BoardActions) => {
  switch (action.type) {
    case UPDATE_BOARDS: {
      return {
        ...state,
        all: action.payload,
      };
    }
    case NEW_CURRENT_BOARD: {
      return {
        ...state,
        current: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
