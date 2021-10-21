import React from 'react';
import {Layout, Menu} from "antd";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import {MySpin} from "../Common/MySpin/MySpin";


const {Sider} = Layout;

export const CategoriesMenu = () => {

    const categories = useTypedSelector(state => state.productFactsReducer.categories)
    const isCategoriesLoading = useTypedSelector(state => state.productFactsReducer.isCategoriesLoading)
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
                ?
                <MySpin/>
                : <Menu style={{height: '100%'}} theme="dark" mode="inline">
                    {categories.map(category =>
                        <Menu.Item key={category.id}>
                            <NavLink to={'/' + category.id}>
                                {category.name}
                            </NavLink>
                        </Menu.Item>)
                    }
                </Menu>}
        </Sider>
    );
};

