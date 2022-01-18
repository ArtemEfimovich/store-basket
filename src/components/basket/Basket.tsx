import {Button, FormControl, Input} from '@mui/material';
import React from 'react';
import s from './Basket.module.scss'
import {AppRootStateType} from "../../bll/store/store";
import {ProductsBasketType} from "../../bll/reducers/basketReducer";
import {useSelector} from "react-redux";
import BasketItem from "./basketItem/BasketItem";
import {calsTotalCount} from "../../utils/utils";

const Basket = () => {
    const products = useSelector<AppRootStateType, ProductsBasketType[]>(state => state.basket.productInBasket)
    const totalCount = calsTotalCount(products)

    return (
    <>
        {
            products.length > 0 ?
                <div className={s.container}>
                    <div>
                        {products && products.map(({image, price,title, id,basketPrice,amount}) => {
                            return <BasketItem
                                key={id}
                                image={image}
                                title={title}
                                amount={amount}
                                price={price}
                                basketPrice={basketPrice}
                                id={id}/>
                        })}
                        <div>Total: {totalCount} $</div>
                    </div>
                    <FormControl sx={{border: '1px solid grey', borderRadius: '8px'}} className={s.formWrapper}>
                        <Input placeholder='Name'/>
                        <Input placeholder='Surname'/>
                        <Input placeholder='Address'/>
                        <Input placeholder='Telephone'/>
                        <Button color={'primary'} variant={'contained'}> Order </Button>
                    </FormControl>

                </div>
                : <div>
                    Basket empty
                </div>
        }
    </>
    );
};

export default Basket;