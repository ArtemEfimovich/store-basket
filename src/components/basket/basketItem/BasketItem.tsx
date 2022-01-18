import React from 'react';
import s from './BasketItem.module.scss'
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addBasketItem, deleteBasketItem} from "../../../bll/reducers/basketReducer";
import {AppRootStateType} from "../../../bll/store/store";


type BasketItemType = {
    image: string
    title: string
    amount: number
    id:string
    price: number

}


const BasketItem = ({image, title,amount,id,price}: BasketItemType) => {
   const dispatch = useDispatch()
    const basketPrice= useSelector<AppRootStateType,number>(state => state.basket.basketPrice)
    const product = {image, title,amount,id,price,basketPrice}

    const onDeleteItem = () =>{
       dispatch(deleteBasketItem({product}))
    }

    const setBasketItem = ()=>{
       dispatch(addBasketItem({product}))
    }


    return (
        <div className={s.container}>
            <img className={s.image} src={image} alt="image"/>
            <div className={s.title}>{title}</div>
            <div className={s.buttonWrapper}>
                <Button onClick={setBasketItem} size="small">+</Button>
                <div>{amount}</div>
                <Button onClick={onDeleteItem} size="small">-</Button>
            </div>
        </div>
    );
};

export default BasketItem;