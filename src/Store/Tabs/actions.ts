import { Board, BoardActions, List, NewBoardPayload } from "./types";

export const NEW_BOARD = "board/NEW_BOARD";
export const GET_BOARDS = "board/GET_BOARD";
export const UPDATE_BOARDS = "board/UPDATE_BOARDS";
export const DELETE_BOARD = "board/DELETE_BOARD";
export const NEW_CURRENT_BOARD = "board/NEW_CURRENT_BOARD";
export const NEW_LIST = "board/NEW_LIST";
export const DELETE_LIST = "board/DELETE_LIST";
export const CHANGE_LIST_NAME = "board/CHANGE_LIST_NAME";

export const changeListName = (list: List, newName: string): BoardActions => ({
  type: CHANGE_LIST_NAME,
  payload: { list, newName },
});

export const deleteList = (list: List): BoardActions => ({
  type: DELETE_LIST,
  payload: list,
});

export const newList = (list: List): BoardActions => ({
  type: NEW_LIST,
  payload: list,
});

export const deleteBoard = (board: Board): BoardActions => ({
  type: DELETE_BOARD,
  payload: board,
});

export const updateBoards = (Boards: Array<Board>): BoardActions => ({
  type: UPDATE_BOARDS,
  payload: Boards,
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
  payload: data,
});
