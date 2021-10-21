import React, {useEffect} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css'
import {useAppDispatch} from "./hooks/useAppDispatch";
import {fetchCategories} from "./store/reducers/productFactsReducer/productFactsThunk";
import {CategoriesMenu} from "./Components/CategoriesMenu/CategoriesMenu";
import {Navigation} from "./Components/Navigation/Navigation";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {MySpin} from "./Components/Common/MySpin/MySpin";

export const App = () => {

    const dispatch = useAppDispatch()
    const isCategoriesLoading = useTypedSelector(state => state.productFactsReducer.isCategoriesLoading)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <Layout style={{width: '100%', height: '100vh', backgroundColor: '#F0F2F5'}}>
            <CategoriesMenu/>
            <Layout style={{marginLeft: 200}}>
                {!isCategoriesLoading
                    ?
                    <Navigation/>
                    :
                    <MySpin/>}
            </Layout>
        </Layout>
    )
};
