import React, { useState } from "react";
import { useEffect } from "react";
import AppBar from '../UI/appBar';
import SideBar from '../UI/sideBar';
import ProductCard from '../UI/productCard';
import './home.css';

export default function Home(props) {
    const [selectedCategory, setSelectedCategory] = useState();
    const [cartItems, setCartItems] = useState();

    const {productsPerPage} = props;
    return (
    <div class = 'main-container'>
        <AppBar /> 
        <SideBar />
        <div class = 'content-container'>  
            <div class = 'products-header'>Products under <b>'Clothes'</b></div>
            <div className='products-container'>
                {[...Array(productsPerPage)].map((e, i) => <ProductCard />)}
            </div>
        </div>
    </div>
    );
}