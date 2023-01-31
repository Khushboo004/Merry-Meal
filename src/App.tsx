import React from 'react';
import Home from './pages/publicUser/Home';
import {  Routes, Route } from "react-router-dom";
import Meal from './pages/Meal';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MealDetails from './pages/MealDetails';
import AddCart from './pages/AddCart';
import Dashboard from './pages/Partner/Dashboard';
import UserHome from './pages/Partner/UserHome';
import Profile from './pages/Partner/Profile';


function App() {
  return (
   
      <Routes>
        <Route path='/public' element={<Home />}/>
        <Route path='/meals' element={<Meal />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/meal-details' element={<MealDetails />}/>
      
        {/* <Route path="/user" element={<Privateroute />}> */}
            <Route path="/add-cart" element={<AddCart />} />
          {/* </Route> */}

          <Route path='/' element={<Dashboard />}>
          <Route index element={<UserHome />}></Route>
          <Route path={"dataSummary"} element={<UserHome />}></Route>
          <Route path={"profile"} element={<Profile />}></Route>

          </Route>
        </Routes>
    
  );
}

export default App;
