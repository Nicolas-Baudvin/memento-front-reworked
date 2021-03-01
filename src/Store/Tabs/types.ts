import { GET_BOARD, NEW_BOARD, UPDATE_CURRENT_BOARDS } from "./actions";

export interface BoardState {
  boards?: Array<Board>;
  currentBoard?: Board;
}

export interface Board {
  name: string;
  owner: Owner;
  image: string;
  _id: string;
}

export interface Owner {
  email: string;
  _id: string;
}

/**
 * Actions
 */

export interface UpdateCurrentBoardsAction {
    type: typeof UPDATE_CURRENT_BOARDS,
    payload: Array<Board> 
}

export interface GetBoardAction {
  type: typeof GET_BOARD;
}

export interface NewBoardAction {
  type: typeof NEW_BOARD;
  payload: NewBoardPayload;
}

export interface NewBoardPayload {
  name: string;
  image: string;
}

export type BoardActions = GetBoardAction | NewBoardAction | UpdateCurrentBoardsAction;