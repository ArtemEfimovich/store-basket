import React from 'react';
import Product from '../product/Product';
import s from './Home.module.scss'
import {AppRootStateType} from "../../bll/store/store";
import {useDispatch, useSelector} from "react-redux";
import {buyItemTC, ProductsType} from "../../bll/reducers/basketReducer";




const Home = () => {
    const products = useSelector<AppRootStateType,ProductsType[]>(state => state.basket.products)
    const dispatch = useDispatch()

    const onBuyClick = () =>{
        dispatch(buyItemTC(0))
    }



    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                {products.map(({title,price,image,id})=>{
                    return <Product  key={id}
                                     image={image}
                                     title={title}
                                     price={price}
                                     buyClick={onBuyClick}
                    />
                })}
            </div>
        </div>

    );
};

export default Home;
