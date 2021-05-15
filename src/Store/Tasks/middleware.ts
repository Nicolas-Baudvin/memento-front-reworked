import { Middleware } from "redux";
import fetchData, { errorHandler } from "../../Utils/fetchData";
import { RootState } from "../reducer";
import { newCurrentBoard, updateBoards } from "../Tabs/actions";
import { CHANGE_TASK_AUTHOR, CHANGE_TASK_IMPORTANCE, CHANGE_TASK_NAME, CHANGE_TASK_ORDER, DELETE_TASK, NEW_TASK } from "./actions";
import optsByRoute from "./optsByRoute";
import { TaskActions } from "./types";

const middleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: TaskActions) => {
    switch (action.type) {
      case NEW_TASK: {
        const { current } = store.getState().boards;
        const { token, _id } = store.getState().user;
        const opts = optsByRoute(action, { token, _id, current })["create"];
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
      case DELETE_TASK: {
        const { current } = store.getState().boards;
        const { token, _id } = store.getState().user;
        const opts = optsByRoute(action, { token, _id, current })["delete"];
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
      case CHANGE_TASK_NAME: {
        const { current } = store.getState().boards;
        const { token, _id } = store.getState().user;
        const opts = optsByRoute(action, { token, _id, current })["desc"];
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
      case CHANGE_TASK_AUTHOR: {
         const { current } = store.getState().boards;
         const { token, _id } = store.getState().user;
         const opts = optsByRoute(action, { token, _id, current })["author"];
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
      case CHANGE_TASK_IMPORTANCE: {
        const { current } = store.getState().boards;
        const { token, _id } = store.getState().user;
        const opts = optsByRoute(action, { token, _id, current })["importance"];
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
      case CHANGE_TASK_ORDER: {
        const { current } = store.getState().boards;
        const { token, _id } = store.getState().user;
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
      default: {
        next(action);
        break;
      }
    }
  };

export default middleware;
