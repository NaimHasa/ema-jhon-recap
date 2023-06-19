import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const AddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        AddToCart={AddToCart}

                    ></Product>)
                }
            </div>
            <div className='cart-container'>

                <h2>Cart container</h2>
                <p>Total Item: {cart.length}</p>

            </div>

        </div>
    );
};

export default Shop;