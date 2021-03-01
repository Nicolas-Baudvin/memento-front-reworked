import { GET_BOARD, NEW_BOARD } from "./actions";
import { BoardActions, BoardState } from "./types";

const initialState: BoardState = {};

const reducer = (state = initialState, action: BoardActions) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
