import { GET_BOARDS, NEW_BOARD, UPDATE_BOARDS } from "./actions";

export interface BoardState {
  all?: Array<Board>;
  current?: Board;
  favs?: Array<Board>;
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
  type: typeof UPDATE_BOARDS;
  payload: Array<Board>;
}

export interface GetBoardAction {
  type: typeof GET_BOARDS;
}

export interface NewBoardAction {
  type: typeof NEW_BOARD;
  payload: NewBoardPayload;
}

export interface NewBoardPayload {
  name: string;
  image: string;
}

export type BoardActions =
  | GetBoardAction
  | NewBoardAction
  | UpdateCurrentBoardsAction;
