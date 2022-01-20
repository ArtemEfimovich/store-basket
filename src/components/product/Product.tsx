import React from 'react';
import {useDispatch} from 'react-redux';
import s from './Product.module.scss'
import {addBasketItem} from "../../bll/reducers/basketReducer";


type ProductPropsType = {
    title: string
    image: string
    price: number
    id: string
    amount: number
}


const Product = ({title, image, price, id,amount,}: ProductPropsType) => {
    const dispatch = useDispatch();

    const product = {title, image, price, id,amount}


    const onAddProductClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(addBasketItem({product}))
    }


    return (
        <div className={s.wrapper}>
            <img className={s.image} src={image} alt=""/>
            <div className={s.title}>{title}</div>
            <div className={s.price}>
                {price}
            </div>
            <div className={s.buttonWrapper}>
                <div onClick={onAddProductClick} className={s.button}>
                    Buy
                </div>
            </div>
        </div>
    );
};

export default Product;
