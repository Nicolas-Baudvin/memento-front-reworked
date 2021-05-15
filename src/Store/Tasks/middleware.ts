import axios from "axios";
import { Middleware } from "redux";
import fetchData, { errorHandler } from "../../Utils/fetchData";
import { throwNewError } from "../Message/actions";
import { RootState } from "../reducer";
import { newCurrentBoard, updateBoards } from "../Tabs/actions";
import { NEW_TASK } from "./actions";
import { TaskActions } from "./types";

const optsByRoute = (action: TaskActions, opts: any) => ({
  create: {
    url: process.env.REACT_APP_CREATE_TASK,
    method: "post",
    data: {
      list: action.payload.list,
      desc: action.payload.taskName,
      boardID: opts.current?._id,
      _id: opts._id,
    },
    headers: {
      Authorization: `Bearer ${opts.token}`,
    },
  },
});

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
      default: {
        next(action);
        break;
      }
    }
  };

export default middleware;
