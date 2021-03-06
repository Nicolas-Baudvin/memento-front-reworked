import axios from "axios";
import { Middleware } from "redux";
import { throwNewError } from "../Message/actions";
import { RootState } from "../reducer";
import { logout } from "../UserData/actions";
import { GET_BOARDS, NEW_BOARD, updateBoards } from "./actions";
import { BoardActions } from "./types";

const middleware: Middleware<{}, RootState> = (store) => (next) => async (
  action: BoardActions
) => {
  switch (action.type) {
    case NEW_BOARD: {
      const { token, _id, email, username } = store.getState().user;
      const { image, title } = action.payload;

      try {
        const res = await axios({
          url: process.env.REACT_APP_CREATE_BOARDS,
          method: "post",
          data: {
            _id,
            username,
            email,
            image,
            title
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        store.dispatch(updateBoards(res.data.boards));
        next(action);
      } catch (e) {
        if (e?.response?.status === 403) store.dispatch(logout());
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
        next(action);
      }
      break;
    }
    case GET_BOARDS: {
      const { token, _id, email } = store.getState().user;

      try {
        const res = await axios({
          url: process.env.REACT_APP_GET_BOARDS,
          method: "post",
          data: {
            _id,
            email,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(updateBoards(res.data.boards));
        next(action);
      } catch (e) {
        if (e?.response?.status === 403) store.dispatch(logout());
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
        next(action);
      }
      break;
    }
    default: {
      next(action);
      break;
    }
  }
};

export default middleware;
