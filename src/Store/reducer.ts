import { combineReducers } from "redux";

import UserDataReducer from "./UserData/reducer";
import ErrorReducer from "./Message/reducer";


export const rootReducer = combineReducers({
    user: UserDataReducer,
    error: ErrorReducer
});

export type RootState = ReturnType<typeof rootReducer>;
