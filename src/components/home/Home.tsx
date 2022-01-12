import React from 'react';
import Product from '../product/Product';
import s from './Home.module.scss'
import { uid } from 'uid';

type ProductsType = {
    id: string;
    title: string
    price: number
    image: string
}


const products: ProductsType[] = [
    {
        id:uid(),
        title: 'Apple Iphone 12 Purple',
        price: 5365.95,
        image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
    },
    {
        id:uid(),
        title: 'Apple Iphone 12 Purple',
        price: 5365.95,
        image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
    },
    {
        id:uid(),
        title: 'Apple Iphone 12 Purple',
        price: 5365.95,
        image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
    },
    {
        id:uid(),
        title: 'Apple Iphone 12 Purple',
        price: 5365.95,
        image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
    },
    {
        id:uid(),
        title: 'Apple Iphone 12 Purple',
        price: 5365.95,
        image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
    },
    {
        id:uid(),
        title: 'Apple Iphone 12 Purple',
        price: 5365.95,
        image: 'https://di-smart.by/wp-content/uploads/2021/04/iphone-12-purple-select-2021.png',
    },

]


const Home = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                {products.map(({title,price,image,id})=>{
                    return <Product  key={id} image={image} title={title} price={price}/>
                })}
            </div>
        </div>

    );
};

export default Home;