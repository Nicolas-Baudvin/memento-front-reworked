import axios from "axios";
import { Middleware } from "redux";
import { throwNewError } from "../Message/actions";
import { RootState } from "../reducer";
import { newCurrentBoard, updateBoards } from "../Tabs/actions";
import { BoardActions } from "../Tabs/types";
import { CHANGE_LIST_NAME, DELETE_LIST, NEW_LIST, UPDATE_BOARDS_LISTS } from "./actions";
import { List } from "./types";

const middleware: Middleware<{}, RootState> = (store) => (next) => async (action: BoardActions) => {
  switch (action.type) {
    case UPDATE_BOARDS_LISTS: {
      const { token, _id } = store.getState().user;
      const { current } = store.getState().boards;
      const listsUpdated = action.payload;
      try {
        const res = await axios({
          url: process.env.REACT_APP_CHANGE_LIST_ORDER,
          method: "patch",
          data: {
            _id,
            listsUpdated,
            boardID: current?._id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(updateBoards(res.data.boards));
        store.dispatch(newCurrentBoard(res.data.board));
        next(action);
      } catch (e) {
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
      }
      break;
    }
    case CHANGE_LIST_NAME: {
      const { token, _id } = store.getState().user;
      const { current } = store.getState().boards;
      const { list, newName: newTitle } = action.payload;

      try {
        const res = await axios({
          url: process.env.REACT_APP_CHANGE_LIST_NAME,
          method: "patch",
          data: {
            boardID: current?._id,
            _id,
            list,
            newTitle,
          },
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(newCurrentBoard(res.data.board));
        store.dispatch(updateBoards(res.data.boards));
        next(action);
      } catch (e) {
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
      }

      break;
    }
    case DELETE_LIST: {
      const { token, _id } = store.getState().user;
      const { current } = store.getState().boards;
      const list: List = action.payload;
      try {
        const res = await axios({
          method: "delete",
          url: process.env.REACT_APP_DELETE_LIST,
          data: {
            boardID: current?._id,
            listID: list._id,
            _id,
          },
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        store.dispatch(updateBoards(res.data.boards));
        store.dispatch(newCurrentBoard(res.data.board));
        next(action);
      } catch (e) {
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
      }
      break;
    }
    case NEW_LIST: {
      const { token, _id } = store.getState().user;
      const { current } = store.getState().boards;
      try {
        const res = await axios({
          url: process.env.REACT_APP_CREATE_LIST,
          method: "post",
          data: {
            _id,
            ...action.payload,
            boardID: current?._id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(updateBoards(res.data.boards));
        store.dispatch(newCurrentBoard(res.data.board));
        next(action);
      } catch (e) {
        if (e?.response?.data?.error)
          store.dispatch(throwNewError(e.response.data.error));
        else if (e?.response?.data?.errors)
          store.dispatch(throwNewError(e.response.data.errors[0].msg));
        else
          store.dispatch(
            throwNewError("Une erreur est survenue avec le serveur.")
          );
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
