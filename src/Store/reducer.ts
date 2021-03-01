import { combineReducers } from "redux";

import UserDataReducer from "./UserData/reducer";
import ErrorReducer from "./Message/reducer";
import BoardReducer from "./Tabs/reducer";


export const rootReducer = combineReducers({
    user: UserDataReducer,
    error: ErrorReducer,
    boards: BoardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
