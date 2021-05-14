import { LOGOUT, STORE_FETCHED_DATA } from "./actions";

export interface UserDataState {
  email: string;
  token: string;
  isLoading: boolean;
  message?: string;
  error?: string;
  _id: string;
  username: string;
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
  message?: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface StoreFetchedDataAction {
  type: typeof STORE_FETCHED_DATA;
  payload: any;
}

export type UserDataActions = LogoutAction | StoreFetchedDataAction;
