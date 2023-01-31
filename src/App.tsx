import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Meal from './pages/Meal';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MealDetails from './pages/MealDetails';
import AddCart from './pages/AddCart';
import Dashboard from './pages/Partner/Dashboard';
import UserHome from './pages/Partner/UserHome';
import Profile from './pages/Partner/Profile';
import AddMeal from './pages/Partner/AddMeal';
import Login from './pages/Login';
import Home from './pages/Home';
import PublicUser from './pages/publicUser/PublicUser';


function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Home />}>
        <Route index element={<PublicUser />}></Route>
        <Route path={'meals'} element={<Meal />}/>
        <Route path={'meal-details'} element={<MealDetails />}/>
        <Route path={"add-cart"} element={<AddCart />} />
        <Route path={'login'} element={<Login />}/>
        <Route path={'about-us'} element={<AboutUs />}/>
        <Route path={'contact-us'} element={<ContactUs />}/>
        </Route>
        {/* <Route path='/contact-us' element={<ContactUs />}/> */}
     
     
        {/* <Route path="/user" element={<Privateroute />}> */}
            
          {/* </Route> */}

          <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<UserHome />}></Route>
          <Route path={"dataSummary"} element={<UserHome />}></Route>
          <Route path={"profile"} element={<Profile />}></Route>
          <Route path={"add-meal"} element={<AddMeal />}></Route>

          </Route>
        </Routes>
    
  );
}

export default App;
