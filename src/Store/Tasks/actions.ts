import { RequestType, TaskPayload } from "./types";

export const TASK_ACTION = "task/TASK_ACTION";

export const taskAction = (payload: TaskPayload, requestType: RequestType) => ({
  type: TASK_ACTION,
  payload,
  requestType
});
