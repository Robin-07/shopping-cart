import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AppBar from '../UI/appBar';
import SideBar from '../UI/sideBar';
import ProductCard from '../UI/productCard';
import './home.css';
import ProductPopup from '../UI/productPopup';

export default function Home(props) {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [showProductPopup, setShowProductPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    
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
        <AppBar cartTotal = {cartTotal} setCartTotal = {setCartTotal} cartItems = {cartItems} setCartItems = {setCartItems}/> 
        <SideBar categories = {categories} selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className = 'content-container'>  
            <div className = 'products-header'>Products under <b>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</b></div>
            <div className='products-container'>
                {products.map((product) => selectedCategory == product.category && <ProductCard product = {product} 
                setCartTotal = {setCartTotal} cartItems = {cartItems} setCartItems = {setCartItems}
                setShowProductPopup = {setShowProductPopup} setSelectedProduct = {setSelectedProduct} key ={product.id}/>)}
            </div>
        </div>
        <ProductPopup showProductPopup = {showProductPopup} setShowProductPopup = {setShowProductPopup}
        selectedProduct = {selectedProduct}/>
    </div>
    );
}