import axios from "axios";
import { Middleware } from "redux";
import { throwNewError } from "../Message/actions";
import { RootState } from "../reducer";
import { newCurrentBoard, updateBoards } from "../Tabs/actions";
import { NEW_TASK } from "./actions";
import { TaskActions } from "./types";

const middleware: Middleware<{}, RootState> = (store) => (next) => async (
  action: TaskActions
) => {
  switch (action.type) {
    case NEW_TASK: {
      const { current } = store.getState().boards;
      const { token, _id } = store.getState().user;
      const { taskName, list } = action.payload;
      try {
        const res: any = await axios({
          url: process.env.REACT_APP_CREATE_TASK,
          method: "post",
          data: {
            list,
            desc: taskName,
            boardID: current?._id,
            _id
          },
          headers: {
              "Authorization": `Bearer ${token}`
          }
        });
        store.dispatch(updateBoards(res.data.boards));
        store.dispatch(newCurrentBoard(res.data.board));
        next(action);
      } catch (e) {
          console.log(e);
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
