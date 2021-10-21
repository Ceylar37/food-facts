import React from 'react'
import {IProduct} from "../../../api/productFactsApi";
import {Col, Row} from "antd";
import {NavLink} from 'react-router-dom';

interface IProps {
    product: IProduct,
    path: string
}

export const ProductItem: React.FC<IProps> = React.memo(({product, path}) => (
        <NavLink to={path + '/' + product._id}>
            <Col style={{
                border: '1px solid gray',
                width: '240px',
                height: '240px',
                float: 'left',
                padding: '5px',
                margin: '5px'
            }}>
                <Row justify={'center'}>
                    <img alt={'product'} src={product.image_front_small_url || "http://dummyimage.com/200"}/>
                </Row>
                <Row justify={'center'}>
                    creator: {product.creator}
                </Row>
            </Col>
        </NavLink>
    )
)
