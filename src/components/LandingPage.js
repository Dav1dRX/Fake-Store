import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  useEffect(() => {
    const createCube = () => {
      const cube = document.createElement('div');
      cube.classList.add('cube');
      cube.style.left = `${Math.random() * 100}vw`;
      cube.style.top = `${Math.random() * 100}vh`;
      cube.style.animationDuration = `${Math.random() * 10 + 5}s`;
      document.querySelector('.background').appendChild(cube);

      setTimeout(() => {
        cube.remove();
      }, 15000);
    };

    const interval = setInterval(createCube, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <div className="background"></div>
      <motion.div
        className="content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/1009/1009977.png"
          alt="Logo"
          className="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.h1
          className="store-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Hibrido Gang Store
        </motion.h1>
        <motion.p
          className="slogan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Todo lo que necesitas para ser feliz!
        </motion.p>
        <motion.button
          className="enter-button"
          onClick={onEnter}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Ir a tienda
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;