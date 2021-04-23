import {
  DELETE_BOARD,
  GET_BOARDS,
  NEW_BOARD,
  NEW_CURRENT_BOARD,
  NEW_LIST,
  UPDATE_BOARDS,
} from "./actions";

export interface BoardState {
  all?: Array<Board>;
  current?: Board;
  favs?: Array<Board>;
}

export interface Board {
  title: string;
  ownerID: string;
  owner: { username: string };
  image: ImageData;
  _id: string;
  lists?: Array<List>
}

export interface Owner {
  email: string;
  _id: string;
}

export interface List {
  boardID?: string;
  title: string;
  color: string;
  tasks?: Array<Tasks>
}

export interface Tasks {
  desc: string;
  date: Date;
  author: string;
  importance: boolean;
}

/**
 * Actions
 */


export interface UpdateCurrentBoardsAction {
  type: typeof UPDATE_BOARDS;
  payload: Array<Board>;
}

export interface NewListAction {
  type: typeof NEW_LIST;
  payload: List;
}

export interface GetBoardAction {
  type: typeof GET_BOARDS;
}

export interface NewBoardAction {
  type: typeof NEW_BOARD;
  payload: NewBoardPayload;
}

export interface DeleteBoardAction {
  type: typeof DELETE_BOARD;
  payload: Board;
}

export interface NewCurrentBoardAction {
  type: typeof NEW_CURRENT_BOARD;
  payload: Board;
}

export interface ImageData {
  url: string;
  alt: string;
}

export interface NewBoardPayload {
  title: string;
  image: ImageData;
}

export type BoardActions =
  | GetBoardAction
  | NewBoardAction
  | UpdateCurrentBoardsAction
  | DeleteBoardAction
  | NewCurrentBoardAction
  | NewListAction;
