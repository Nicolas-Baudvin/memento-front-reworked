import {
  CHANGE_LIST_NAME,
  DELETE_BOARD,
  DELETE_LIST,
  GET_BOARDS,
  NEW_BOARD,
  NEW_CURRENT_BOARD,
  NEW_LIST,
  UPDATE_BOARDS,
  UPDATE_BOARDS_LISTS,
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
  lists?: Array<List>;
}

export interface Owner {
  email: string;
  _id: string;
}

export interface List {
  boardID?: string;
  title: string;
  color: string;
  tasks: Array<Tasks>;
  order: number;
  _id: string;
}

export interface Tasks {
  desc: string;
  date: string;
  author: string;
  importance: boolean;
}

export interface ListPayload {
  title: string;
  color: string
}

/**
 * Actions
 */
export interface UpdateCurrentBoardsListsAction {
  type: typeof UPDATE_BOARDS_LISTS;
  payload: Array<List>
}

export interface UpdateCurrentBoardsAction {
  type: typeof UPDATE_BOARDS;
  payload: Array<Board>;
}

export interface NewListAction {
  type: typeof NEW_LIST;
  payload: ListPayload;
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

export interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: List;
}

export interface ChangeListNameAction {
  type: typeof CHANGE_LIST_NAME;
  payload: { list: List; newName: string };
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
  | NewListAction
  | DeleteListAction
  | ChangeListNameAction
  | UpdateCurrentBoardsListsAction;
