import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";

import UserMw from "./UserData/middleware";

/**
 * Middlewares
 */

const middlewares = applyMiddleware(UserMw);

const withReduxDevTools = compose;

const reactModelStore = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? withReduxDevTools(middlewares)
    : middlewares
);

export default reactModelStore;
