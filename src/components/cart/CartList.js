import React, { useState } from 'react';
import Invoice from '../Invoice'; // Cambiamos la ruta de importación
import './CartList.css';

const CartList = ({ items, updateQuantity, removeItem, total, closeCart }) => {
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <div className="cart-list">
      <h2>Tu Carrito</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <button className="view-invoice-btn" onClick={() => setShowInvoice(true)}>Ver Factura</button>
      <button onClick={closeCart}>Cerrar Carrito</button>
      {showInvoice && (
        <Invoice items={items} total={total} onClose={() => setShowInvoice(false)} />
      )}
    </div>
  );
};

export default CartList;