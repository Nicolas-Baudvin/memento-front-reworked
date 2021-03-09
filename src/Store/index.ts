import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";

import UserMw from "./UserData/middleware";
import ErrorMw from "./Message/middleware";
import BoardMw from "./Tabs/middleware";

const middlewares = applyMiddleware(UserMw, ErrorMw, BoardMw);

const withReduxDevTools = compose;

const reactModelStore = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? withReduxDevTools(middlewares)
    : middlewares
);

export default reactModelStore;
