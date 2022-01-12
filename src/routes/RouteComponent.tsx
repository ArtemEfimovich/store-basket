import React from 'react';
import {Route, Routes} from "react-router-dom";
import Basket from "../components/basket/Basket";
import Home from "../components/home/Home";
import ProductPage from "../components/product/product-page/ProductPage";


export const PATH = {
    HOME:'/',
    BASKET: '/basket',
    PRODUCT: '/product',
}



const RouteComponent = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Home/>} />
            <Route path={PATH.BASKET} element={<Basket/>} />
            <Route path={PATH.PRODUCT} element={<ProductPage/>} />
        </Routes>
    );
};

export default RouteComponent;
