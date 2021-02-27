import { THROW_NEW_ERROR, HIDE_ERROR } from "./actions";

export interface ErrorState {
    message: string;
    isShow: boolean;
}

export interface ThrowNewErrorAction {
  type: typeof THROW_NEW_ERROR;
  payload: string;
}

export interface HideErrorAction {
    type: typeof HIDE_ERROR;
}

export type ErrorActions = ThrowNewErrorAction | HideErrorAction;