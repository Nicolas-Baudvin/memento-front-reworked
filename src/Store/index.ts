import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";

import UserMw from "./UserData/middleware";
import ErrorMw from "./Message/middleware";

/**
 * Middlewares
 */

const middlewares = applyMiddleware(UserMw, ErrorMw);

const withReduxDevTools = compose;

const reactModelStore = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? withReduxDevTools(middlewares)
    : middlewares
);

export default reactModelStore;
