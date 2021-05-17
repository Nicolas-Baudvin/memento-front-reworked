import { Middleware } from "redux";
import fetchData, { errorHandler } from "../../Utils/fetchData";
import { RootState } from "../reducer";
import { newCurrentBoard, updateBoards } from "../Tabs/actions";
import { LIST_ACTION } from "./actions";
import optsByRoute from "./optsByRoute";
import { ListAction } from "./types";

const middleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: ListAction) => {
    switch (action.type) {
      case LIST_ACTION: {
        const { token, _id } = store.getState().user;
        const { current } = store.getState().boards;
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
