// FoodMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EImage from '../images/idly.jpeg';
import Dosa from '../images/Dosa.jpeg';
import Eggdosa from '../images/Eggdosa.jpeg';
import Chapathi from '../images/Chapathi.jpeg';
import poori from '../images/poori.jpeg';
import pongal from '../images/pongal.jpeg';
import vada from '../images/vada.jpeg';

const FoodMenu = () => {
  const [cart, setCart] = useState([]);
  const [menuItems] = useState([
    { name: 'idly', cost: 20, image: EImage },
    { name: 'Dosa', cost: 30, image: Dosa },
    { name: 'Egg Dosa', cost: 40, image: Eggdosa },
    { name: 'Chapati', cost: 25, image: Chapathi },
    { name: 'Poori', cost: 35, image: poori },
    { name: 'Pongal', cost: 40, image: pongal },
    { name: 'Vada', cost: 25, image: vada },
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.cost, 0);
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
  };

  const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
  };

  const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
  };

  const footerStyle = {
    marginTop: '20px',
    padding: '10px 0',
    textAlign: 'center',
    borderTop: '1px solid #dee2e6',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: '2px solid #007bff',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const cartButtonStyle = {
    marginLeft: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={menuStyle}>
        <h1 style={{ margin: 0 }}>Food Menu</h1>
        <div>
          <Link to="/lunch" style={linkStyle}>Lunch</Link>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '200px' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <div>{item.name}</div>
            <div>Cost: ${item.cost}</div>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.cost}
            <button style={cartButtonStyle} onClick={() => removeFromCart(index)}> - </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <div style={footerStyle}>
        <button style={buttonStyle}>Order Placement</button>
      </div>
    </div>
  );
};

export default FoodMenu;
