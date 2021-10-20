import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFood, IFoodCategory} from "../../../api/foodFactsApi";
import {fetchCategories, showNewCategory} from "./foodFactsThunk";

interface IInitialState {
    categories: IFoodCategory[],
    selectedCategoryId: string,
    foodList: IFood[],
    isCategoriesLoading: boolean,
    categoriesError: string,
    isFoodFactsLoading: boolean,
    foodFactsError: string
}

const initialState: IInitialState = {
    categories: [],
    selectedCategoryId: '',
    foodList: [],
    isCategoriesLoading: false,
    categoriesError: '',
    isFoodFactsLoading: false,
    foodFactsError: ''
}

const foodFactsSlice = createSlice({
    name: 'foodFacts',
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCategories.fulfilled.type]: (state, action: PayloadAction<IFoodCategory[]>) => {
            state.isCategoriesLoading = false
            state.categories = action.payload
        },
        [fetchCategories.pending.type]: (state) => {
            state.isCategoriesLoading = true
        },
        [fetchCategories.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isCategoriesLoading = false
            state.categoriesError = action.payload
        },
        [showNewCategory.fulfilled.type]: (state, action: PayloadAction<IFood[]>) => {
            state.isFoodFactsLoading = false
            state.foodList = action.payload
        },
        [showNewCategory.pending.type]: (state) => {
            state.isFoodFactsLoading = true
        },
        [showNewCategory.rejected.type]: (state, action: PayloadAction<string>) => {
            state.foodFactsError = action.payload
            state.isFoodFactsLoading = false
        }
    }
})

export const foodFactsReducer = foodFactsSlice.reducer
export const foodFactsActions = foodFactsSlice.actions

