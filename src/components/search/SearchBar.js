import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ products, onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(value.toLowerCase())
    ).slice(0, 5);
    
    setSuggestions(value ? filtered : []);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Ingresa nombre del producto"
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <span>{product.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;  