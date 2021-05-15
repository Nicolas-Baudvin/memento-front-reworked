import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";

import UserMw from "./UserData/middleware";
import ErrorMw from "./Message/middleware";
import BoardMw from "./Tabs/middleware";
import TaskMw from "./Tasks/middleware";
import ListMw from "./List/middleware";

const middlewares = applyMiddleware(UserMw, ErrorMw, BoardMw, ListMw, TaskMw);

const withReduxDevTools = compose;

const reactModelStore = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? withReduxDevTools(middlewares)
    : middlewares
);

export default reactModelStore;
