import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AppBar from '../UI/appBar';
import SideBar from '../UI/sideBar';
import ProductCard from '../UI/productCard';
import './home.css';

export default function Home(props) {
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error))
    });

    const categories = [
        {
            id: 1,
            name: 'Clothes'
        },
        {
            id: 2,
            name: 'Electronics'
        },
        {
            id: 3,
            name: 'Beauty'
        }
    ]
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [cartItems, setCartItems] = useState([]);
    const {productsPerPage} = props;

    return (
    <div class = 'main-container'>
        <AppBar cartItems = {cartItems}/> 
        <SideBar categories = {categories} selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div class = 'content-container'>  
            <div class = 'products-header'>Products under <b>{selectedCategory.name}</b></div>
            <div className='products-container'>
                {[...Array(productsPerPage)].map((e, i) => <ProductCard key ={i}/>)}
            </div>
        </div>
    </div>
    );
}