import { combineReducers } from 'redux';
import { reducer as counterReducer } from "../features/Counter/store/reducer";
import { reducer as waitersReducer } from "../features/waiters/store/reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    waiters: waitersReducer
});