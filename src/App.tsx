import React from 'react';
import Home from './pages/publicUser/Home';
import {  Routes, Route } from "react-router-dom";
import Meal from './pages/publicUser/Meal';


function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/meals' element={<Meal />}/>
        </Routes>
    
  );
}

export default App;
