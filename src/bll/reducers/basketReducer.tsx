import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {uid} from "uid";


export type ProductsType = {
    id: string;
    title: string
    price: number
    image: string
}

export type ProductsBasketType={
    id: string;
    title: string
    price: number
    image: string
    amount: number
}



type initialStateType = {
    products: ProductsType[]
    productInBasket: ProductsBasketType[]
}

const initialState: initialStateType = {
    products: [
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 2323,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 44444,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 55555,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 66665.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 7775.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 5365.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },

    ],
    productInBasket: []
}


export const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasketItem(state, action: PayloadAction<{ product: ProductsBasketType }>) {
            const isProductInCart = state.productInBasket.find(product => product.id === action.payload.product.id)
            if(isProductInCart){
                state.productInBasket.map(product=> product.id === action.payload.product.id ? action.payload.product.amount + 1 : product )
            }else{
                state.productInBasket.push(action.payload.product)
            }

        },
        deleteBasketItem(state, action: PayloadAction<{ id: string }>) {
            state.productInBasket = state.productInBasket.filter(item => item.id !== action.payload.id)
        },
    }
})

export const basketReducer = slice.reducer
export const {addBasketItem, deleteBasketItem} = slice.actions



