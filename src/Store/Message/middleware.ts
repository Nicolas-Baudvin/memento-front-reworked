import { Middleware } from "redux";
import { RootState } from "../reducer";
import { ErrorActions } from "./types";

const middleware: Middleware<{}, RootState> = (store) => (next) => (
  action: ErrorActions
) => {
  switch (action.type) {
    default: {
      next(action);
      break;
    }
  }
};

export default middleware;
