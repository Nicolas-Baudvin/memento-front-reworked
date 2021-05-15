import { List } from "../List/types";
import {
  NEW_TASK,
  CHANGE_TASK_NAME,
  DELETE_TASK,
  CHANGE_TASK_AUTHOR,
  CHANGE_TASK_IMPORTANCE,
  CHANGE_TASK_ORDER,
} from "./actions";

export interface TaskPayload {
    taskName?: string;
    newDesc?: string;
    author?: string;
    importance?: boolean;
    task?: Task;
    list: List;
    tasks?: Array<Task>;
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

export interface ChangeTaskOrderAction {
  type: typeof CHANGE_TASK_ORDER;
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
  | ChangeTaskImportanceAction
  | ChangeTaskOrderAction;