import { List } from "../List/types";
import { TASK_ACTION } from "./actions";

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

export type RequestType =
  | "create"
  | "order"
  | "delete"
  | "desc"
  | "importance"
  | "author";

export interface TaskAction {
  type: typeof TASK_ACTION;
  requestType: RequestType;
  payload: TaskPayload;
}
