import React from 'react';
import {Layout, Spin} from "antd";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FoodItem} from "../FoodItem/FoodItem";
import './foodFactsList.css'

const {Content} = Layout

export const FoodFactsList = () => {

    const foodList = useTypedSelector(state => state.foodFactsReducer.foodList)
    const isFoodFactsLoading = useTypedSelector(state => state.foodFactsReducer.isFoodFactsLoading)

    return (
        <div style={{margin: 'auto'}} className='content'>
            {isFoodFactsLoading
            ?
            <Spin size='large'/>
            :
            foodList.map(food =>
            <FoodItem food={food}/>)}
        </div>
    );
};
