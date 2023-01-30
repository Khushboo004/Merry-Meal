import React from 'react';
import Home from './pages/publicUser/Home';
import {  Routes, Route } from "react-router-dom";
import Meal from './pages/publicUser/Meal';
import AboutUs from './pages/For All User/AboutUs';
import ContactUs from './pages/For All User/ContactUs';
import MealDetails from './pages/MealDetails';


function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/meals' element={<Meal />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/meal-details' element={<MealDetails />}/>
        </Routes>
    
  );
}

export default App;
