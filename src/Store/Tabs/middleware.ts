import axios from "axios";
import { Middleware } from "redux";
import { throwNewError } from "../Message/actions";
import { RootState } from "../reducer";
import { logout } from "../UserData/actions";
import {
  CHANGE_LIST_NAME,
  DELETE_BOARD,
  DELETE_LIST,
  GET_BOARDS,
  newCurrentBoard,
  NEW_BOARD,
  NEW_LIST,
  updateBoards,
  UPDATE_BOARDS_LISTS,
} from "./actions";
import { BoardActions, ListPayload } from "./types";

const middleware: Middleware<{}, RootState> = (store) => (next) => async (
  action: BoardActions
) => {
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
            boardID: current?._id
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        store.dispatch(updateBoards(res.data.boards));
        store.dispatch(newCurrentBoard(res.data.board));
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
      next(action);
      break;
    }
    case CHANGE_LIST_NAME: {
      const { token, _id } = store.getState().user;
      const { current } = store.getState().boards;
      const { list, newName } = action.payload;

      try {
        const res = await axios({
          url: process.env.REACT_APP_CHANGE_LIST_NAME,
          method: "patch",
          data: {
            boardID: current?._id,
            _id,
            list,
            newName,
          },
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        store.dispatch(updateBoards(res.data.boards));
        store.dispatch(newCurrentBoard(res.data.board));
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

      next(action);
      break;
    }
    case DELETE_LIST: {
      const { token, _id } = store.getState().user;
      const { current } = store.getState().boards;
      const list: ListPayload = action.payload;
      try {
        const res = await axios({
          method: "delete",
          url: process.env.REACT_APP_DELETE_LIST,
          data: {
            boardID: current?._id,
            title: list.title,
            _id,
          },
          headers: {
            authorization: `Bearer ${token}`,
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

    case DELETE_BOARD: {
      const { token, _id } = store.getState().user;
      try {
        const res = await axios({
          url: process.env.REACT_APP_DELETE_BOARD,
          method: "delete",
          data: {
            board: action.payload,
            _id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        store.dispatch(updateBoards(res.data.boards));

        next(action);
      } catch (e) {
        // if (e?.response?.status === 403) store.dispatch(logout());
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
            title,
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
