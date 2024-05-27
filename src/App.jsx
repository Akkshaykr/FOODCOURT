import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import FoodMenu from './components/Foodmenu';
import Lunch from './components/lunch';
import Dinner from './components/dinner';

function App() {
  return (
    <Router>
     
      <Routes>
      <Route path="/" element={<Header />} ></Route>
        <Route path="/food-menu" element={<FoodMenu />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
      </Routes>
    </Router>
  );
}

export default App;
