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
    basketPrice: number
}



type initialStateType = {
    products: ProductsType[]
    productInBasket: ProductsBasketType[]
}

const initialState: initialStateType = {
    products: [
        {
            id: uid(),
            title: 'Apple Iphone 10 Purple',
            price: 5,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 11 Purple',
            price: 4,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 3,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 13 Purple',
            price: 2,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 14 Purple',
            price:6,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 15 Purple',
            price: 7,
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
            const isProductInCart = state.productInBasket.findIndex(product => product.id === action.payload.product.id)
            if(isProductInCart >= 0){
                const newAmount = state.productInBasket[isProductInCart].amount + 1
                state.productInBasket[isProductInCart].amount= newAmount
                state.productInBasket[isProductInCart].basketPrice =  state.productInBasket[isProductInCart].price * newAmount
            }else{
                state.productInBasket.push(action.payload.product)
            }

        },
        deleteBasketItem(state, action: PayloadAction<{ product: ProductsBasketType }>) {
            const isProductInCart = state.productInBasket.findIndex(product => product.id === action.payload.product.id)
            if(state.productInBasket[isProductInCart].amount > 1 ){
                const newAmount = state.productInBasket[isProductInCart].amount - 1
                state.productInBasket[isProductInCart].amount = newAmount
                state.productInBasket[isProductInCart].basketPrice = state.productInBasket[isProductInCart].price * newAmount
            }else{
                state.productInBasket = state.productInBasket.filter(item => item.id !== action.payload.product.id)
            }
        },
    }
})

export const basketReducer = slice.reducer
export const {addBasketItem, deleteBasketItem} = slice.actions



