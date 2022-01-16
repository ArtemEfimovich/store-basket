import React from 'react';
import s from './Product.module.scss'


type ProductPropsType ={
    title: string
    image:string
    price: number
    buyClick:()=>void
}



const Product = ({title,image,price,buyClick}:ProductPropsType) => {
    return (
        <div className={s.wrapper}>
            <img className={s.image} src={image} alt=""/>
            <div className={s.title}>{title}</div>
            <div className={s.price}>
                {price}
            </div>
            <div className={s.buttonWrapper}>
                <div onClick={buyClick} className={s.button}>
                    Buy
                </div>
            </div>
        </div>
    );
};

export default Product;