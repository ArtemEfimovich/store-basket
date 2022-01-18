import {ProductsType} from "../bll/reducers/basketReducer";


export const  calsTotalCount =(items:ProductsType[])=>items.reduce((acc, item) => Math.round(acc += item.price), 0)
