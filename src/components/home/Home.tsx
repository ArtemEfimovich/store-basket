import React from 'react';
import Product from '../product/Product';
import s from './Home.module.scss'
import {AppRootStateType} from "../../bll/store/store";
import {useSelector} from "react-redux";
import {ProductsType} from "../../bll/reducers/basketReducer";


const Home = () => {
    const products = useSelector<AppRootStateType,ProductsType[]>(state => state.basket.products)

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                {products.map(({title,price,image,id,amount})=>{
                    return <Product  key={id}
                                     image={image}
                                     title={title}
                                     price={price}
                                     id={id}
                                     amount={amount}
                    />
                })}
            </div>
        </div>

    );
};

export default Home;
