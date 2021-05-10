import { TaskActions, TaskPayload } from "./types";

export const NEW_TASK = "task/NEW_TASK";
export const DELETE_TASK = "task/DELETE_TASK";
export const CHANGE_TASK_NAME = "task/CHANGE_TASK_NAME";
export const CHANGE_TASK_IMPORTANCE = "task/CHANGE_TASK_NAME";
export const CHANGE_TASK_AUTHOR = "task/CHANGE_TASK_AUTHOR";

export const newTask = (payload: TaskPayload): TaskActions => ({
  type: NEW_TASK,
  payload,
});

export const deleteTask = (payload: TaskPayload): TaskActions => ({
  type: DELETE_TASK,
  payload,
});

export const changeTaskName = (payload: TaskPayload): TaskActions => ({
  type: CHANGE_TASK_NAME,
  payload,
});

export const changeTaskImportance = (payload: TaskPayload): TaskActions => ({
  type: CHANGE_TASK_IMPORTANCE,
  payload,
});

export const changeTaskAuthor = (payload: TaskPayload): TaskActions => ({
  type: CHANGE_TASK_AUTHOR,
  payload,
});
