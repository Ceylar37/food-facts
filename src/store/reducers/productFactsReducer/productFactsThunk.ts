import {createAsyncThunk} from "@reduxjs/toolkit";
import {productFactsApi} from "../../../api/productFactsApi";

export const fetchCategories = createAsyncThunk(
    'productFacts/fetchCategories',
    async (_, thunkAPI) => {
        try {
            return await productFactsApi.getCategories()
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить категории')
        }
    })

export const showNewCategory = createAsyncThunk(
    'productFacts/showNewCategory',
    async (url: string, thunkAPI) => {
        try {
            return await productFactsApi.getProductsFacts(url)
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить список продуктов')
        }
    }
)

export const showNewProduct = createAsyncThunk(
    'productFacts/showNewProduct',
    async (productId: string, thunkAPI) => {
        try {
            return await productFactsApi.getNewProduct(productId)
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить продукт')
        }
    }
)