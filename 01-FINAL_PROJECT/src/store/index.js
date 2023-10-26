import {configureStore} from "@reduxjs/toolkit";
import waiterReducer from "../features/Waiters/store/reducer";
import dishesReducer from "../features/Dishes/store/reducer"
import tablesReducer from "../features/Tables/store/reducer"
import ordersReducer from "../features/Orders/store/reducer"

export const store = configureStore({
    reducer: {
        waiters: waiterReducer,
        dishes: dishesReducer,
        tables: tablesReducer,
        orders: ordersReducer,
    }
});