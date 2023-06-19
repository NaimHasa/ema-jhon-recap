import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='header-img'>
                    <img src={Logo} alt="" />
                </div>
                <div className='header-link'>
                    <a href="shop">Shop</a>
                    <a href="orders">Orders</a>
                    <a href="inventory">Inventory</a>
                    <a href="about">About</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;