import { Middleware } from "redux";
import fetchData, { errorHandler } from "../../Utils/fetchData";
import { RootState } from "../reducer";
import { newCurrentBoard, updateBoards } from "../Tabs/actions";
import { BoardActions } from "../Tabs/types";
import {
  CHANGE_LIST_NAME,
  DELETE_LIST,
  NEW_LIST,
  UPDATE_BOARDS_LISTS,
} from "./actions";
import optsByRoute from "./optsByRoute";

const middleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: BoardActions) => {
    switch (action.type) {
      case UPDATE_BOARDS_LISTS: {
        const { token, _id } = store.getState().user;
        const { current } = store.getState().boards;
        const opts = optsByRoute(action, { token, _id, current })["order"];
        try {
          const data: any = await fetchData(opts);
          store.dispatch(updateBoards(data.boards));
          store.dispatch(newCurrentBoard(data.board));
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch, true);
        }
        break;
      }
      case CHANGE_LIST_NAME: {
        const { token, _id } = store.getState().user;
        const { current } = store.getState().boards;
        const opts = optsByRoute(action, { _id, token, current })["name"];
        try {
          const data: any = await fetchData(opts);
          store.dispatch(newCurrentBoard(data.board));
          store.dispatch(updateBoards(data.boards));
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch, true);
        }
        break;
      }
      case DELETE_LIST: {
        const { token, _id } = store.getState().user;
        const { current } = store.getState().boards;
        const opts = optsByRoute(action, { _id, token, current })["delete"];
        try {
          const data: any = await fetchData(opts);
          store.dispatch(newCurrentBoard(data.board));
          store.dispatch(updateBoards(data.boards));
          next(action);
        } catch (e) {
          errorHandler(e, store.dispatch, true);
        }
        break;
      }
      case NEW_LIST: {
        const { token, _id } = store.getState().user;
        const { current } = store.getState().boards;
        const opts = optsByRoute(action, { _id, token, current })["create"];
        try {
          const data: any = await fetchData(opts);
          store.dispatch(newCurrentBoard(data.board));
          store.dispatch(updateBoards(data.boards));
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
