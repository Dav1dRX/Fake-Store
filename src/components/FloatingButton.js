import React from 'react';
import { motion } from 'framer-motion';
import './FloatingButton.css';

const FloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/593990046473"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src="https://cdn-icons-png.flaticon.com/512/5988/5988291.png" alt="WhatsApp" />
    </motion.a>
  );
};

export default FloatingButton;