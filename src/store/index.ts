import {configureStore} from "@reduxjs/toolkit";
import {foodFactsReducer} from "./reducers/foodFactsReducer/foodFactsSlice";

export const store = configureStore({
    reducer: {
        foodFactsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch