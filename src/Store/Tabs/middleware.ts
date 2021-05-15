import { Middleware } from "redux";
import fetchData, { errorHandler } from "../../Utils/fetchData";
import { RootState } from "../reducer";
import { DELETE_BOARD, GET_BOARDS, NEW_BOARD, updateBoards } from "./actions";
import { BoardActions } from "./types";

const optsByRoute = (action: any, opts: any) => ({
  delete: {
    url: process.env.REACT_APP_DELETE_BOARD,
    method: "delete",
    data: {
      board: action.payload,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  create: {
    url: process.env.REACT_APP_CREATE_BOARDS,
    method: "post",
    data: {
      _id: opts._id,
      username: opts.username,
      email: opts._email,
      image: action.payload?.image,
      title: action.payload?.title,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
  get: {
    url: process.env.REACT_APP_GET_BOARDS,
    method: "post",
    data: {
      _id: opts._id,
      email: opts.email,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
});

const middleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: BoardActions) => {
    switch (action.type) {
      case DELETE_BOARD: {
        const { token, _id } = store.getState().user;
        const opts = optsByRoute(action, { token, _id })["delete"];
        try {
          const data: any = await fetchData(opts);
          store.dispatch(updateBoards(data.boards));
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch, true);
        }
        break;
      }

      case NEW_BOARD: {
        const { token, _id, email, username } = store.getState().user;
        const opts = optsByRoute(action, { token, _id, username, email })[
          "create"
        ];
        try {
          const data: any = await fetchData(opts);
          store.dispatch(updateBoards(data.boards));
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch, true);
        }
        break;
      }

      case GET_BOARDS: {
        const { token, _id, email } = store.getState().user;
        const opts = optsByRoute(action, { token, _id, email })["get"];

        try {
          const data: any = await fetchData(opts);
          if (data.boards.length) store.dispatch(updateBoards(data.boards));
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch, true);
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
