import { Board, BoardActions, NewBoardPayload } from "./types";

export const NEW_BOARD = "board/NEW_BOARD";
export const GET_BOARD = "board/GET_BOARD";
export const UPDATE_CURRENT_BOARDS = "board/UPDATE_CURRENT_BOARDS";

export const updateCurrentBoards = (Boards: Array<Board>): BoardActions => ({
  type: UPDATE_CURRENT_BOARDS,
  payload: Boards
});

export const newBoard = (data: NewBoardPayload): BoardActions => ({
  type: NEW_BOARD,
  payload: data,
});

export const getBoard = (): BoardActions => ({
  type: GET_BOARD,
});
