import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AppBar from '../UI/appBar';
import SideBar from '../UI/sideBar';
import ProductCard from '../UI/productCard';
import './home.css';

export default function Home(props) {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
            axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => {
                console.log(res.data);
                setCategories(res.data);
                setSelectedCategory(res.data[0]);
            })
            .catch((error) => console.log(error))

            axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(error => console.log(error))
        },[]);

    return (
    <div class = 'main-container'>
        <AppBar cartItems = {cartItems} setCartItems = {setCartItems}/> 
        <SideBar categories = {categories} selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className = 'content-container'>  
            <div className = 'products-header'>Products under <b>{selectedCategory.replace(/\b\w/g, l => l.toUpperCase())}</b></div>
            <div className='products-container'>
                {products.map((product) => selectedCategory == product.category && <ProductCard product = {product} 
                cartItems = {cartItems} setCartItems = {setCartItems} key ={product.id}/>)}
            </div>
        </div>
    </div>
    );
}