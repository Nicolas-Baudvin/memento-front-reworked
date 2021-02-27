import { HideErrorAction, ThrowNewErrorAction } from "./types";

export const THROW_NEW_ERROR = "err/THROW_NEW_ERROR";
export const HIDE_ERROR = "err/HIDE_ERROR";

export const throwNewError = (message: string): ThrowNewErrorAction => ({
    type: THROW_NEW_ERROR,
    payload: message,
});

export const hideError = (): HideErrorAction => ({
    type: HIDE_ERROR,
});