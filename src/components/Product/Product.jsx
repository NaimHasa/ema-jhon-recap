import React from 'react';
import './Product.css';

const Product = ({ AddToCart, product }) => {
    // const { AddToCart, product } = props;
    const { name, img, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detels'>
                <h3>Name: {name.slice(0, 15)}...</h3>
                <h4>price: ${price}</h4>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>

            <div>
                <button onClick={() => AddToCart(product)} className='adToCart'><p>Add To Cart</p></button>
            </div>
        </div>
    );
};

export default Product;