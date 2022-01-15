import React from 'react';
import s from './BasketItem.module.scss'
import {Button} from "@mui/material";


type BasketItemType = {
    image: string
    title: string
    coast: number | null
}


const BasketItem = ({image, title, coast}: BasketItemType) => {
    return (
        <div className={s.container}>
            <img className={s.image} src={image} alt="image"/>
            <div className={s.title}>{title}</div>
            <div className={s.buttonWrapper}>
                <Button size="small">+</Button>
                <div>{coast}</div>
                <Button size="small">-</Button>
            </div>
        </div>
    );
};

export default BasketItem;