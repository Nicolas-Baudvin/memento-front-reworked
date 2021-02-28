import { HideErrorAction, NewMessageAction, ThrowNewErrorAction } from "./types";

export const THROW_NEW_ERROR = "err/THROW_NEW_ERROR";
export const HIDE_MESSAGE = "err/HIDE_MESSAGE";
export const NEW_MESSAGE = "err/NEW_MESSAGE";

export const newMessage = (message: string): NewMessageAction => ({
    type: NEW_MESSAGE,
    payload: message
});

export const throwNewError = (message: string): ThrowNewErrorAction => ({
    type: THROW_NEW_ERROR,
    payload: message,
});

export const hideError = (): HideErrorAction => ({
    type: HIDE_MESSAGE,
});