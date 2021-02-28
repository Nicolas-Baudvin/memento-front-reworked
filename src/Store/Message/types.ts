import { THROW_NEW_ERROR, HIDE_MESSAGE, NEW_MESSAGE } from "./actions";

export interface ErrorState {
    message: string;
    isShow: boolean;
    isError: boolean;
}

export interface ThrowNewErrorAction {
  type: typeof THROW_NEW_ERROR;
  payload: string;
}

export interface HideErrorAction {
    type: typeof HIDE_MESSAGE;
}

export interface NewMessageAction {
  type: typeof NEW_MESSAGE;
  payload: string;
}

export type ErrorActions = ThrowNewErrorAction | HideErrorAction | NewMessageAction;