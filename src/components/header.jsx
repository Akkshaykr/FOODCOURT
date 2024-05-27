import React from 'react';

import { Link } from 'react-router-dom';
import a from '../images/a.png';
import b from '../images/b.png';
import d from '../images/d.jpg';
import FoodMenu from './Foodmenu';


const Header = () => {
  return (
    <>
      <div>
      </div>
      <div style={{ backgroundImage: `url(${d})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          {/* Left side - Image and slogan */}
          <div style={{ marginRight: '20px' }}>
            <img src={a} alt="Logo" style={{ width: '650px', height: '650px' }} />
          </div>
          {/* Right side - Form */}
          <div>
            <div style={{ color: 'red' }}>
              {/* Your login authentication form */}
              <form style={{ marginBottom: '10px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" placeholder="Name" style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #666' }} /> {/* Adjusted input padding */}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" placeholder="Phone Number" style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid black' }} /> {/* Adjusted input padding */}
                </div>
                <Link to="/food-menu">
                  <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Login</button>
                </Link>
              </form>
              <div style={{ marginBottom: '10px' }}>
                {/* Display image and slogan for food delivery app */}
                <img src={b} alt="Google Icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                <a href="#" style={{ color: 'blue', textDecoration: 'none' }}>Continue with Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
