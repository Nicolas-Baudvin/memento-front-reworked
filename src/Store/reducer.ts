import { combineReducers } from "redux";

import UserDataReducer from "./UserData/reducer";


export const rootReducer = combineReducers({
    user: UserDataReducer
});

export type RootState = ReturnType<typeof rootReducer>;
