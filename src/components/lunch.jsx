import React, { useState } from "react";
import { Link } from "react-router-dom";
import briyani from "./Biryani.png"; 
import gobinoodeles from "./Gobi-Noodles.png"
// import paratta from "../images/paratta.jpg"; 
// import chickenRice from "../images/chickenRice.jpg"; 
// import chickenNoodles from "../images/chickenNoodles.jpg"; 
// import gobiRice from "../images/gobiRice.jpg"; 
// import chickenChilliParatta from "../images/chickenChilliParatta.jpg"; 
// import mushroomRice from "../images/mushroomRice.jpg"; 
// import chilli from "../images/chilli.jpg"; 
// import mushroomNoodles from "../images/mushroomNoodles.jpg"; 
// import gobiNoodles from "../images/gobiNoodles.jpg"; 
// import romalliRotti from "../images/romalliRotti.jpg"; 
// import chickenPepperDry from "../images/chickenPepperDry.jpg"; 
// import honeyChicken from "../images/honeyChicken.jpg"; 
// import chickenPallipalayam from "../images/chickenPallipalayam.jpg";

const FoodMenu = () => {
  const [cart, setCart] = useState([]);
  const [menuItems] = useState([
    { name: 'Paratta', cost: 30, image: briyani },
    { name: 'Chicken Rice', cost: 40, image: briyani },
    { name: 'Chicken Noodles', cost: 25, image: briyani },
    { name: 'Gobi Rice', cost: 35, image: briyani },
    { name: 'Chicken Chilli Paratta', cost: 40, image: briyani },
    { name: 'Mushroom Rice', cost: 25, image: briyani },
    { name: 'Chilli', cost: 20, image: briyani },
    { name: 'Mushroom Noodles', cost: 30, image: briyani },
    { name: 'Gobi Noodles', cost: 40, image: gobinoodeles},
    { name: 'Romalli Rotti', cost: 25, image: briyani },
    { name: 'Chicken Pepper Dry', cost: 35, image: briyani },
    { name: 'Honey Chicken', cost: 40, image: briyani },
    { name: 'Chicken Pallipalayam', cost: 25, image: briyani },
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
          <Link to="/lunch" style={linkStyle}>Lunch</Link>
          <Link to="/dinner" style={linkStyle}>Dinner</Link>
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
