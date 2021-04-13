import { Board, BoardActions, NewBoardPayload } from "./types";

export const NEW_BOARD = "board/NEW_BOARD";
export const GET_BOARDS = "board/GET_BOARD";
export const UPDATE_BOARDS = "board/UPDATE_BOARDS";
export const DELETE_BOARD = "board/DELETE_BOARD";
export const NEW_CURRENT_BOARD = "board/NEW_CURRENT_BOARD";

export const deleteBoard = (board: Board): BoardActions => ({
  type: DELETE_BOARD,
  payload: board,
});

export const updateBoards = (Boards: Array<Board>): BoardActions => ({
  type: UPDATE_BOARDS,
  payload: Boards
});

export const newBoard = (data: NewBoardPayload): BoardActions => ({
  type: NEW_BOARD,
  payload: data,
});

export const getBoards = (): BoardActions => ({
  type: GET_BOARDS,
});

export const newCurrentBoard = (data: Board): BoardActions => ({
  type: NEW_CURRENT_BOARD,
  payload: data
});
