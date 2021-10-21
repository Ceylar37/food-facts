import axios from "axios";

export interface IProductCategory {
    id: string,
    name: string,
    products: number,
    url: string
}

interface IProductCategoriesResponse {
    count: number,
    tags: IProductCategory[]
}

export interface IProduct {
    _id: string,
    creator: string,
    data_sources: string,
    image_front_small_url: string,
    image_front_url: string,
    ingredients_hierarchy: string[]
}

interface IProductsResponse {
    count: number,
    page: number,
    page_count: number,
    page_size: number,
    products: IProduct[]
}

interface IProductResponse {
    code: string,
    product: IProduct & {product_name: string}
}

export const productFactsApi = {
    getCategories(): Promise<IProductCategory[]> {
        return axios.get<IProductCategoriesResponse>('https://world.openfoodfacts.org/categories.json')
            .then(response => response.data.tags.slice(0, 10))
            .then(categories => categories.map(category => ({
                name: category.name,
                id: category.id.slice(3),
                products: category.products,
                url: category.url
            })))
    },
    getProductsFacts(url: string, page: number = 1): Promise<IProduct[]> {
        return axios.get<IProductsResponse>(`${url}.json?page=${page}`)
            .then(response => response.data.products)
            .then(products =>
                products.map(product =>
                    ({
                        ingredients_hierarchy: !product.ingredients_hierarchy || product.ingredients_hierarchy === []
                            ? ['Нет информации про состав!']
                            : product.ingredients_hierarchy.map(ingredient =>
                                ingredient.slice(3)),
                        _id: product._id,
                        image_front_url: product.image_front_url,
                        image_front_small_url: product.image_front_small_url,
                        data_sources: product.data_sources,
                        creator: product.creator
                    })
                ))
    },
    getNewProduct(productId: string) {
        return axios.get<IProductResponse>('https://world.openfoodfacts.org/api/v0/product/' + productId +'.json')
            .then(response => response.data.product)
            .then(product => ({
                    ingredients_hierarchy: product.ingredients_hierarchy
                        ? product.ingredients_hierarchy.map(ingredient =>
                            ingredient.slice(3))
                        :
                        ['Нет информации про ингридиенты!'],
                    _id: product._id,
                    image_front_url: product.image_front_url,
                    image_front_small_url: product.image_front_small_url,
                    data_sources: product.data_sources,
                    creator: product.creator,
                product_name: product.product_name
                })
            )
    }
}