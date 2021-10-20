import React from 'react'
import {IFood} from "../../api/foodFactsApi";
import {Col, Row} from "antd";


export const FoodItem: React.FC<{ food: IFood }> = ({food}) => {
    return (
        <Col style={{border: '1px solid gray', width: '240px', height: '240px', float: 'left', padding: '5px', margin: '5px'}}>
            <Row justify={'center'}>
                <img src={food.image_front_small_url}/>
            </Row>
            <Row justify={'center'}>
                creator: {food.creator}
            </Row>
        </Col>
    )
}
