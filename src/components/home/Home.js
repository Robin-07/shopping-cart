import React from "react";
import AppBar from '../UI/appBar';
import ProductCard from '../UI/productCard';
import './home.css';

export default function Home(props) {
    document.body.style = 'background: 	#D3D3D3';
    const {productsPerPage} = props;
    return (
    <div>
        <AppBar />
        <div className='products-container'>
            {[...Array(productsPerPage)].map((e, i) => <ProductCard />)}
        </div>
    </div>
    );
}