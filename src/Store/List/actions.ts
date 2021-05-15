import { BoardActions } from "../Tabs/types";
import { List, ListPayload } from "./types";

export const NEW_LIST = "board/NEW_LIST";
export const DELETE_LIST = "board/DELETE_LIST";
export const CHANGE_LIST_NAME = "board/CHANGE_LIST_NAME";
export const UPDATE_BOARDS_LISTS = "board/UPDATE_BOARDS_LISTS";

export const updateCurrentBoardLists = (
  payload: Array<List>
): BoardActions => ({
  type: UPDATE_BOARDS_LISTS,
  payload,
});

export const changeListName = (list: List, newName: string): BoardActions => ({
  type: CHANGE_LIST_NAME,
  payload: { list, newName },
});

export const deleteList = (list: List): BoardActions => ({
  type: DELETE_LIST,
  payload: list,
});

export const newList = (list: ListPayload): BoardActions => ({
  type: NEW_LIST,
  payload: list,
});