import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';
import ProductList from './components/list/ProductList';
import CartList from './components/cart/CartList';
import ProductSlider from './components/slider/ProductSlider';
import LandingPage from './components/LandingPage';
import FloatingButton from './components/FloatingButton';
import BackgroundEffect from './components/BackgroundEffect/BackgroundEffect';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleEnterStore = () => {
    setShowLanding(false);
  };




  return (
    <div className="App">
      <BackgroundEffect showLanding={showLanding} />
      <AnimatePresence>
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onEnter={handleEnterStore} />
          </motion.div>
        ) : (
          <motion.div
            key="store"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} toggleCart={toggleCart} />
            <SearchBar onSearch={handleSearch} products={products} />
            <ProductSlider products={products} />
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
            />
            {isCartOpen && (
              <CartList
                items={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                total={calculateTotal()}
                closeCart={toggleCart}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <FloatingButton />
    </div>
  );
}

export default App;

