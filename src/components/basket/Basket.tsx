import {Button, FormControl, Input} from '@mui/material';
import React from 'react';
import s from './Basket.module.scss'
import {AppRootStateType} from "../../bll/store/store";
import {ProductsType} from "../../bll/reducers/basketReducer";
import {useSelector} from "react-redux";
import BasketItem from "./basketItem/BasketItem";

const Basket = () => {
    const products = useSelector<AppRootStateType, ProductsType[]>(state => state.basket.products)
    const coast = useSelector<AppRootStateType,number|null>(state =>state.basket.coastItem )

    return (
        <div className={s.container}>
            <div>
                {products && products.map(({image, title, id}) => {
                    return <BasketItem key={id} image={image} title={title} coast={coast}/>
                })}
            </div>
            <FormControl sx={{border: '1px solid grey', borderRadius: '8px'}} className={s.formWrapper}>
                <Input placeholder='Name'/>
                <Input placeholder='Surname'/>
                <Input placeholder='Address'/>
                <Input placeholder='Telephone'/>
                <Button color={'primary'} variant={'contained'}> Order </Button>
            </FormControl>
        </div>
    );
};

export default Basket;