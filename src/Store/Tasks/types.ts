import { List } from "../Tabs/types";
import {
  NEW_TASK,
  CHANGE_TASK_NAME,
  DELETE_TASK,
  CHANGE_TASK_AUTHOR,
  CHANGE_TASK_IMPORTANCE,
} from "./actions";

export interface TaskPayload {
    taskName?: string;
    newDesc?: string;
    author?: string;
    importance?: boolean;
    task?: Task;
    list: List;
}

export interface Task {
  desc: string;
  date: string;
  author: string;
  importance: boolean;
  _id: string;
  order: number;
}

/**
 * Actions types
 */

export interface NewTaskAction {
  type: typeof NEW_TASK;
  payload: TaskPayload;
}

export interface ChangeTaskNameAction {
  type: typeof CHANGE_TASK_NAME;
  payload: TaskPayload;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: TaskPayload;
}

export interface ChangeTaskAuthorAction {
  type: typeof CHANGE_TASK_AUTHOR;
  payload: TaskPayload;
}

export interface ChangeTaskImportanceAction {
  type: typeof CHANGE_TASK_IMPORTANCE;
  payload: TaskPayload;
}

export type TaskActions =
  | NewTaskAction
  | ChangeTaskNameAction
  | DeleteTaskAction
  | ChangeTaskAuthorAction
  | ChangeTaskImportanceAction;