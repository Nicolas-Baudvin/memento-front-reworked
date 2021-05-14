import { UserDataActions } from "./types";

export const LOGOUT = "UserData/LOGOUT";
export const STORE_FETCHED_DATA = "UserData/STORE_FETCHED_DATA";

export const logout = (): UserDataActions => ({
  type: LOGOUT,
});

export const storeFetchedData = (fetchedData: any): UserDataActions => ({
  type: STORE_FETCHED_DATA,
  payload: fetchedData,
});
