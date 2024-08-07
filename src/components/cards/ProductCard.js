import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  const handleClick = () => {
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button 
        onClick={handleClick}
        className={isInCart ? 'remove-btn' : 'add-btn'}
      >
        {isInCart ? 'Cancel' : 'Add'}
      </button>
    </div>
  );
};

export default ProductCard;