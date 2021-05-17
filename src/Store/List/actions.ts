import { ListAction, ListPayload, RequestListType } from "./types";

export const LIST_ACTION = "list/LIST_ACTION";

export const listAction = (
  payload: ListPayload,
  requestType: RequestListType
): ListAction => ({
  type: LIST_ACTION,
  payload,
  requestType,
});
