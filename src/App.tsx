import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Meal from './pages/Meal';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MealDetails from './pages/MealDetails';
import AddCart from './pages/AddCart';
import Dashboard from './pages/Partner/Dashboard';
import UserHome from './pages/Partner/UserHome';
import Profile from './pages/Profile';
import AddMeal from './pages/Partner/AddMeal';
import Login from './pages/Login';
import Home from './pages/Home';
import PublicUser from './pages/publicUser/PublicUser';
import Registration from './pages/Registration';
import CaregiverReq from './pages/CaregiverReq';
import EditProfile from './pages/EditProfile';
import CareGiverHome from './pages/CareGiver/CareGiverHome';
import TimeTable from './pages/CareGiver/TimeTable';
import DataSummary from './pages/Admin/DataSummary';
import UserInfo from './pages/Admin/UserInfo';
import MealManagement from './pages/Admin/MealManagement';
import DeliManagement from './pages/Admin/DeliManagement';
import DonationManagement from './pages/Admin/DonationManagement';
import Donation from './pages/Donation';


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
        <Route path={'register'} element={<Registration />}/>
        <Route path={'caregiverReq'} element={<CaregiverReq />}/>
        <Route path={"profile"} element={<Profile />}></Route>
        <Route path={"edit-pro"} element={<EditProfile />}></Route>
        <Route path={"donation"} element={<Donation />}/>

        </Route>
    

          <Route path='/dashboard' element={<Dashboard />}>

          {/* After partner login, partner dashboard will be displayed */}
          {/* <Route index element={<UserHome />}></Route> */}



          {/* After caregiver login, caregiver dashboard will be displayed */}
          <Route index element={<CareGiverHome />}></Route>
          <Route path={'caregiver'} element={<CareGiverHome />}/>

          <Route path={"partner"} element={<UserHome />}></Route>
          <Route path={"profile"} element={<Profile />}></Route>
          <Route path={"add-meal"} element={<AddMeal />}></Route>
          <Route path={'meals'} element={<Meal />}/>
          <Route path={'time-table'} element={<TimeTable />}/>
          <Route path={"edit-pro"} element={<EditProfile />}/>



          <Route path={"dataSummary"} element={<DataSummary />}></Route>
          <Route path={"userinfo"} element={<UserInfo />}></Route>
          <Route path={"mealinfo"} element={<MealManagement />}></Route>
          <Route path={"deliinfo"} element={<DeliManagement />}></Route>
          <Route path={"donateinfo"} element={<DonationManagement />}></Route>

          </Route>
        </Routes>
    
  );
}

export default App;
