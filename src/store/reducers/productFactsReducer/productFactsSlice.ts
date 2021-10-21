import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct, IProductCategory} from "../../../api/productFactsApi";
import {fetchCategories, showNewCategory, showNewProduct} from "./productFactsThunk";

interface IInitialState {
    categories: IProductCategory[],
    selectedCategoryId: string,
    productList: IProduct[],
    isCategoriesLoading: boolean,
    categoriesError: string,
    isFoodFactsLoading: boolean,
    productFactsError: string,
    currentProduct: IProduct & {product_name: string} | null,
    isCurrentProductLoading: boolean,
    currentProductError: string
}

const initialState: IInitialState = {
    categories: [],
    selectedCategoryId: '',
    productList: [],
    isCategoriesLoading: true,
    categoriesError: '',
    isFoodFactsLoading: true,
    productFactsError: '',
    currentProduct: null,
    isCurrentProductLoading: true,
    currentProductError: ''
}

const productFactsSlice = createSlice({
    name: 'productFacts',
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCategories.fulfilled.type]: (state, action: PayloadAction<IProductCategory[]>) => {
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
        [showNewCategory.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.isFoodFactsLoading = false
            state.productList = action.payload
        },
        [showNewCategory.pending.type]: (state) => {
            state.isFoodFactsLoading = true
        },
        [showNewCategory.rejected.type]: (state, action: PayloadAction<string>) => {
            state.productFactsError = action.payload
            state.isFoodFactsLoading = false
        },
        [showNewProduct.fulfilled.type]: (state, action: PayloadAction<IProduct & {product_name: string}>) => {
            state.currentProduct = action.payload
            state.isCurrentProductLoading = false
        },
        [showNewProduct.pending.type]: (state) => {
            state.isCurrentProductLoading = true
        },
        [showNewProduct.rejected.type]: (state, action: PayloadAction<string>) => {
            state.currentProductError = action.payload
            state.isCurrentProductLoading = false
        }
    }
})

export const productFactsReducer = productFactsSlice.reducer
export const productFactsActions = productFactsSlice.actions

