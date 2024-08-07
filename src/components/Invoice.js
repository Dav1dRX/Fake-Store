import React from 'react';
import './Invoice.css';

const Invoice = ({ items, total, onClose }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="invoice-overlay">
      <div className="invoice">
        <div className="invoice-header">
          <img src="https://cdn-icons-png.flaticon.com/512/1009/1009977.png" alt="Logo" className="invoice-logo" />
          <h2>Hibrido Gang Store</h2>
        </div>
        <p className="invoice-date">fecha: {currentDate}</p>
        <table className="invoice-items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="invoice-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <div className="invoice-actions">
          <button onClick={() => window.print()}>Guardar :3</button>
          <button onClick={onClose}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;