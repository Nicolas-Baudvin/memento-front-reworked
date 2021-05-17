import { Task } from "../Tasks/types";
import { LIST_ACTION } from "./actions";

export interface List {
  boardID?: string;
  title: string;
  color: string;
  tasks: Array<Task>;
  order: number;
  _id: string;
}

export interface ListPayload {
  title?: string;
  color?: string;
  list?: List;
  newName?: string;
  lists?: Array<List>;
}
export type RequestListType = "order" | "title" | "delete" | "create";

export interface ListAction {
  payload: ListPayload;
  type: typeof LIST_ACTION;
  requestType: RequestListType;
}
