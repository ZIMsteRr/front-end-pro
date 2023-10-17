import {configureStore} from "@reduxjs/toolkit";
import waiterReducer from "../features/waiters/store/reducer";

export const store = configureStore({
    reducer: {
        waiters: waiterReducer,
    }
});