import { NewUserData, StoreFetchedData, UserData, UserDataActions } from "./types";

export const CREATE_ACCOUNT = "UserData/CREATE_ACCOUNT";
export const USER_AUTH = "UserData/USER_AUTH";
export const LOGOUT = "UserData/LOGOUT";
export const STORE_FETCHED_DATA = "UserData/STORE_FETCHED_DATA";

export const createAccount = (newUserData: NewUserData): UserDataActions => ({
  type: CREATE_ACCOUNT,
  payload: newUserData,
});

export const userAuth = (userData: UserData): UserDataActions => ({
  type: USER_AUTH,
  payload: userData,
});

export const logout = (): UserDataActions => ({
    type: LOGOUT,
});

export const storeFetchedData = (fetchedData: StoreFetchedData): UserDataActions => ({
  type: STORE_FETCHED_DATA,
  payload: fetchedData
});
