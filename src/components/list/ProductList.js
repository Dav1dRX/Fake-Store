import React from 'react';
import ProductCard from '../cards/ProductCard';
import './ProductList.css';

const ProductList = ({ products, addToCart, removeFromCart, cartItems }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cartItems.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
