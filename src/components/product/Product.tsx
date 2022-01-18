import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './Product.module.scss'
import {addBasketItem} from "../../bll/reducers/basketReducer";
import {AppRootStateType} from "../../bll/store/store";


type ProductPropsType = {
    title: string
    image: string
    price: number
    id: string

}


const Product = ({title, image, price, id}: ProductPropsType) => {
    const dispatch = useDispatch();
    const product = {title, image, price, id}


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
