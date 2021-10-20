import React, {useEffect} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css'
import {useAppDispatch} from "./hooks/useAppDispatch";
import {fetchCategories} from "./store/reducers/foodFactsReducer/foodFactsThunk";
import {CategoriesMenu} from "./Components/CategoriesMenu/CategoriesMenu";
import {FoodFactsList} from "./Components/FoodFactsList/FoodFactsList";

const {Footer} = Layout;

export const App = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div style={{width: '100%', height: '100vh', backgroundColor: '#F0F2F5'}}>
            <CategoriesMenu/>
            <Layout className="site-layout" style={{marginLeft: 200}}>
                <FoodFactsList/>
            </Layout>
        </div>
    )
};
