import axios from "axios";
import { getDataFromLocalStorage } from "../../Utils";
import { newMessage } from "../Message/actions";
import { LOGOUT, storeFetchedData, STORE_FETCHED_DATA } from "./actions";
import { UserDataActions, UserDataState } from "./types";

const initialState: UserDataState = {
  email: "",
  token: getDataFromLocalStorage("tkn"),
  message: "",
  isLoading: false,
  error: "",
  _id: getDataFromLocalStorage("_id"),
  username: getDataFromLocalStorage("username"),
};

const reducer = (
  action: UserDataActions,
  state = initialState
): UserDataState => {
  console.log(action);
  switch (action?.type) {
    case STORE_FETCHED_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case LOGOUT: {
      localStorage.clear();
      return { ...initialState, token: "" };
    }
    default:
      return state;
  }
};

export interface Credentials {
  email: string;
  password: string;
  username?: string;
  confPass?: string;
}

export const authenticateUser =
  (userCredentials: Credentials) => async (dispatch: any, getState: any) => {
    const url: string = process.env.REACT_APP_LOGIN_URL || "";
    const res = await axios.post(
      url,
      { ...userCredentials },
      {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    );
    console.log(res.data);
    dispatch(newMessage(res.data.message));
    dispatch(storeFetchedData(res.data));
  };

export const createUser = (userDatas: Credentials) => async (dispatch: any, getState: any) => {
  const url = process.env.REACT_APP_SIGNUP_URL || "";
  const res = await axios.post(
    url,
    { ...userDatas },
    {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
  dispatch(newMessage(res.data.message));
}

export default reducer;
