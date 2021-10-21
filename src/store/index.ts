import {configureStore} from "@reduxjs/toolkit";
import {productFactsReducer} from "./reducers/productFactsReducer/productFactsSlice";

export const store = configureStore({
    reducer: {
        productFactsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch