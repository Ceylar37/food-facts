import React from 'react';
import {Layout, Menu, Spin} from "antd";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {SelectInfo} from "rc-menu/lib/interface";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {showNewCategory} from "../../store/reducers/foodFactsReducer/foodFactsThunk";


const {Sider} = Layout;

export const CategoriesMenu = () => {

    const categories = useTypedSelector(state => state.foodFactsReducer.categories)
    const isCategoriesLoading = useTypedSelector(state => state.foodFactsReducer.isCategoriesLoading)
    const dispatch = useAppDispatch()

    const onSelectHandler = (e: SelectInfo) => {
        dispatch(showNewCategory(e.key))
    }

    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,

            }}
            width='190px'
        >
            <div className="logo"/>
            {isCategoriesLoading
                ? <div style={{display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%'}}>
                    <Spin size='large'/>
                </div>
                : <Menu style={{height: '100%'}} theme="dark" mode="inline" onSelect={onSelectHandler}>
                    {categories.map(category =>
                        <Menu.Item key={category.url}>
                            {category.name}
                        </Menu.Item>)
                    }
                </Menu>}
        </Sider>
    );
};

