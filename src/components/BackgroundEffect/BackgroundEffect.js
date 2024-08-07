import React, { useEffect, useRef } from 'react';

const BackgroundEffect = ({ showLanding }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const numberOfCubes = 15;

    const createCube = () => {
      const cube = document.createElement('div');
      cube.classList.add('cube');
      cube.style.left = `${Math.random() * 100}vw`;
      cube.style.top = `${Math.random() * 100}vh`;
      cube.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(cube);

      setTimeout(() => {
        cube.remove();
        createCube();
      }, 15000);
    };

    if (!showLanding) {
      for (let i = 0; i < numberOfCubes; i++) {
        createCube();
      }
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [showLanding]);

  return <div ref={containerRef} className="background-effect" />;
};

export default BackgroundEffect;