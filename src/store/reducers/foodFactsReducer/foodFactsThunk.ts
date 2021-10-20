import {createAsyncThunk} from "@reduxjs/toolkit";
import {foodFactsApi} from "../../../api/foodFactsApi";

export const fetchCategories = createAsyncThunk(
    'foodFacts/fetchCategories',
    async (_, thunkAPI) => {
        try {
            const response = await foodFactsApi.getCategories()
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить категории')
        }
    })

export const showNewCategory = createAsyncThunk(
    'foodFacts/showNewCategory',
    async (url: string, thunkAPI) => {
        try {
            const response = await foodFactsApi.getFoodFacts(url)
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить данные')
        }
    }
)