import React from 'react';
import Product from '../product/Product';
import s from './Home.module.scss'
import {AppRootStateType} from "../../bll/store/store";
import {useDispatch, useSelector} from "react-redux";
import {addBasketItem, ProductsType} from "../../bll/reducers/basketReducer";


const Home = () => {
    const products = useSelector<AppRootStateType,ProductsType[]>(state => state.basket.products)


    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                {products.map(({title,price,image,id})=>{
                    return <Product  key={id}
                                     image={image}
                                     title={title}
                                     price={price}
                                     id={id}
                    />
                })}
            </div>
        </div>

    );
};

export default Home;
