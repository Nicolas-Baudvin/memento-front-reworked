import { Task } from "../Tasks/types";
import { CHANGE_LIST_NAME, DELETE_LIST, NEW_LIST, UPDATE_BOARDS_LISTS } from "./actions";

export interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: List;
}

export interface ChangeListNameAction {
  type: typeof CHANGE_LIST_NAME;
  payload: { list: List; newName: string };
}

export interface UpdateCurrentBoardsListsAction {
  type: typeof UPDATE_BOARDS_LISTS;
  payload: Array<List>;
}

export interface List {
  boardID?: string;
  title: string;
  color: string;
  tasks: Array<Task>;
  order: number;
  _id: string;
}

export interface NewListAction {
  type: typeof NEW_LIST;
  payload: ListPayload;
}

export interface ListPayload {
  title: string;
  color: string;
}