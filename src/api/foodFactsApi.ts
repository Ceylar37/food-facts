import axios from "axios";

export interface IFoodCategory {
    id: string,
    name: string,
    products: number,
    url: string
}

interface IFoodCategoriesResponse {
    count: number,
    tags: IFoodCategory[]
}

export interface IFood {
    _id: string,
    creator: string,
    data_sources: string,
    image_front_small_url: string,
    image_front_url: string
}

interface IFoodResponse {
    "count": number,
    "page": number,
    "page_count": number,
    "page_size": number,
    products: IFood[]
}

export const foodFactsApi = {
    getCategories(): Promise<IFoodCategory[]> {
        return axios.get<IFoodCategoriesResponse>('https://world.openfoodfacts.org/categories.json')
            .then(response => response.data.tags.slice(0, 10))
    },
    getFoodFacts(url: string, page: number = 1): Promise<IFood[]> {
        return axios.get<IFoodResponse>(url + '.json' + `?page=${page}`)
            .then(response => response.data.products)
    }
}