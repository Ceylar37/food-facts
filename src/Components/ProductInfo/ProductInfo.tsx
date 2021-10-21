import React, {useEffect} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Button, Col, Layout, Row} from "antd";
import {MySpin} from "../Common/MySpin/MySpin";
import {useHistory} from 'react-router-dom';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {showNewProduct} from "../../store/reducers/productFactsReducer/productFactsThunk";

const {Content} = Layout

export const ProductInfo = () => {

    const dispatch = useAppDispatch()
    const history = useHistory()
    const path = history.location.pathname
    const ind = path.indexOf('/', 1)
    const id = path.slice(ind + 1)
    useEffect(() => {
        dispatch(showNewProduct(id))
    }, [])
    const product = useTypedSelector(state => state.productFactsReducer.currentProduct)
    const isCurrentProductLoading = useTypedSelector(state => state.productFactsReducer.isCurrentProductLoading)
    const currentProductError = useTypedSelector(state => state.productFactsReducer.currentProductError)
    if (isCurrentProductLoading) return <MySpin/>

    const onClickHandler = () => {
        history.goBack()
    }

    return (
        <Content className={'content'} style={{marginTop: 10}}>
            {currentProductError &&
            <h1>
                {currentProductError}
            </h1>}
            {!isCurrentProductLoading
                ? product
                    ?
                    <Col>
                        <img alt={'product'} src={product.image_front_url || "http://dummyimage.com/400"}/>
                        <h4>
                            Название: {product.product_name}
                        </h4>
                        <h4>
                            {product.data_sources}
                        </h4>
                        <h4>
                            Состав: {product.ingredients_hierarchy.length !== 0
                            ? product.ingredients_hierarchy.join(', ')
                            : 'Нет информации про состав!'}
                        </h4>
                        <Row>
                            <Button onClick={onClickHandler}>Назад</Button>
                        </Row>
                    </Col>
                    :
                    <span>
                        Ошибка закгрузки продукта
                    </span>
                :
                <MySpin/>
            }
        </Content>
    )
}