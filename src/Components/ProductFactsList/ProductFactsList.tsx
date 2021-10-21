import React, {useEffect} from 'react'
import {Layout} from "antd"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {ProductItem} from "./ProductItem/ProductItem"
import './productFactsList.css'
import {useAppDispatch} from "../../hooks/useAppDispatch"
import {showNewCategory} from "../../store/reducers/productFactsReducer/productFactsThunk"
import {useHistory} from 'react-router-dom'
import {MySpin} from "../Common/MySpin/MySpin"

const {Content} = Layout

interface IProps {
    url: string
}

export const ProductFactsList: React.FC<IProps> = React.memo(({url}) => {
        const dispatch = useAppDispatch()
        const path = useHistory().location.pathname
        useEffect(() => {
            dispatch(showNewCategory(url))
        }, [])
        const productList = useTypedSelector(state => state.productFactsReducer.productList)
        const isFoodFactsLoading = useTypedSelector(state => state.productFactsReducer.isFoodFactsLoading)
        const productFactsError = useTypedSelector(state => state.productFactsReducer.productFactsError)

    return (
            <Content style={{margin: 'auto'}} className='content'>
                {productFactsError && <h1>{productFactsError}</h1>}
                {isFoodFactsLoading
                    ?
                    <MySpin/>
                    :
                    productList.map(product =>
                        <ProductItem key={product._id} product={product} path={path}/>)}
            </Content>
        )
    }
)