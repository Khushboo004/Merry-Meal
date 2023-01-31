import React from 'react';
import Home from './pages/publicUser/Home';
import {  Routes, Route } from "react-router-dom";
import Meal from './pages/Meal';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MealDetails from './pages/MealDetails';
import AddCart from './pages/AddCart';
import Dashboard from './pages/Partner/Dashboard';


function App() {
  return (
   
      <Routes>
        <Route path='/public' element={<Home />}/>
        <Route path='/meals' element={<Meal />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/meal-details' element={<MealDetails />}/>
        <Route path='/' element={<Dashboard />}/>
        {/* <Route path="/user" element={<Privateroute />}> */}
            <Route path="/add-cart" element={<AddCart />} />
          {/* </Route> */}
        </Routes>
    
  );
}

export default App;
