import React from 'react'
import {Switch, Route} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ProductFactsList} from "../ProductFactsList/ProductFactsList";
import {ProductInfo} from "../ProductInfo/ProductInfo";

export const Navigation = () => {

    const categories = useTypedSelector(state => state.productFactsReducer.categories)
    return (
        <Switch>
            {categories.map(category =>
                <Route exact={true} key={category.id} path={'/' + category.id}>
                    <ProductFactsList url={category.url}/>
                </Route>
            )}
            {categories.map(category =>
                <Route key={category.id + 'product'} path={'/' + category.id + '/:id?'}>
                    <ProductInfo/>
                </Route>
                )}
            <Route>
                <h1>
                    Выберите категорию
                </h1>
            </Route>
        </Switch>
    )
}
