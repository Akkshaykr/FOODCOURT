import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodMenuDinner = () => {
  const [cart, setCart] = useState([]);
  const [menuItems] = useState([
    { name: 'Briyani', cost: 20, image: 'idly.jpg' },
    { name: 'Paratta', cost: 30, image: 'dosa.jpg' },
    { name: 'Chicken rice', cost: 40, image: 'egg_dosa.jpg' },
    { name: 'Chicken Noodles', cost: 25, image: 'chapati.jpg' },
    { name: 'gobi Rice', cost: 35, image: 'poori.jpg' },
    { name: 'Chicken chilli paratta', cost: 40, image: 'pongal.jpg' },
    { name: 'Mushroom rice', cost: 25, image: 'vada.jpg' },
    { name: 'Chicken 65', cost: 20, image: 'idly.jpg' },
    { name: 'Mushroom Noodles', cost: 30, image: 'dosa.jpg' },
    { name: 'Gobi Noodles', cost: 40, image: 'egg_dosa.jpg' },

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
    <div>
      <div style={menuStyle}>
        <h1 style={{ margin: 0 }}>Food Menu</h1>
        <div>
          <a href="#breakfast" style={linkStyle}>Breakfast</a>
          <Link to="/lunch" style={linkStyle}>Lunch</Link>
          <a href="#dinner" style={linkStyle}>Dinner</a>
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

export default FoodMenuDinner;
