import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartItemCount, toggleCart }) => {
  return (
    <header className="header">
      <h1 className="logo">Hibrido Gang Store</h1>
      <div className="cart-icon" onClick={toggleCart}>
        <FaShoppingCart />
        <span className="cart-count">{cartItemCount}</span>
      </div>
    </header>
  );
};

export default Header;