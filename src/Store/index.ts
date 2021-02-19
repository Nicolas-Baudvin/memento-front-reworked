import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";

/**
 * Middlewares
 */

const middlewares = applyMiddleware();

const withReduxDevTools = compose;

const reactModelStore = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? withReduxDevTools(middlewares)
    : middlewares
);

export default reactModelStore;
