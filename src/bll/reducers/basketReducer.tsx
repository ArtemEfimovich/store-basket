import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {uid} from "uid";


export type ProductsType = {
    id: string;
    title: string
    price: number
    image: string
}


type initialStateType = {
    products: ProductsType[]
    coastItem: null | number
}

const initialState: initialStateType = {
    products: [
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 5365.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 5365.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 5365.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 5365.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 5365.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },
        {
            id: uid(),
            title: 'Apple Iphone 12 Purple',
            price: 5365.95,
            image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
        },

    ],
    coastItem: 0
}


export const slice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasketCount(state, action: PayloadAction<{coastItem:number}>){
            state.coastItem = action.payload.coastItem + 1
        }

    }
})

export const basketReducer = slice.reducer
export const {addBasketCount} = slice.actions


export const buyItemTC = (coastItem:number,) =>(dispatch:Dispatch<any>)=>{
    dispatch(addBasketCount({coastItem}))
}
