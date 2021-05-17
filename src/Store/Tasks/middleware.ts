import { Middleware } from "redux";
import fetchData, { errorHandler } from "../../Utils/fetchData";
import { RootState } from "../reducer";
import { newCurrentBoard, updateBoards } from "../Tabs/actions";
import { TASK_ACTION } from "./actions";
import optsByRoute from "./optsByRoute";
import { TaskAction } from "./types";

const middleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: TaskAction) => {
    switch (action.type) {
      case TASK_ACTION: {
        const { current } = store.getState().boards;
        const { token, _id } = store.getState().user;
        const opts = optsByRoute(action, { token, _id, current })[
          action.requestType
        ];
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
