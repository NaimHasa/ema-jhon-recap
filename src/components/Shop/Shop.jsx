import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h1>product container</h1>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Cart container</h2>

            </div>

        </div>
    );
};

export default Shop;