import { CREATE_ACCOUNT, LOGOUT, STORE_FETCHED_DATA, USER_AUTH } from "./actions";

export interface UserDataState {
  email: string;
  token: string;
  isLoading: boolean;
  message?: string;
  error?: string;
}

export interface UserData {
  email: string;
  password: string;
}

export interface NewUserData {
  email: string;
  password: string;
  confPass: string;
  error?: string;
  message?: string
}

export interface StoreFetchedData {
  email: string;
  token: string;
}

export interface CreateAccountAction {
  type: typeof CREATE_ACCOUNT;
  payload: NewUserData;
}

export interface UserAuthAction {
  type: typeof USER_AUTH;
  payload: UserData;
}

export interface LogoutAction {
    type: typeof LOGOUT;
}

export interface StoreFetchedDataAction {
  type: typeof STORE_FETCHED_DATA;
  payload: StoreFetchedData;
}

export type UserDataActions =
  | LogoutAction
  | UserAuthAction
  | CreateAccountAction
  | StoreFetchedDataAction;
