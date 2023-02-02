import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Meal from "./pages/Meal";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MealDetails from "./pages/MealDetails";
import AddCart from "./pages/AddCart";
import Dashboard from "./pages/Dashboard";
import UserHome from "./pages/Partner/UserHome";
import Profile from "./pages/Profile";
import AddMeal from "./pages/Partner/AddMeal";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PublicUser from "./pages/publicUser/PublicUser";
import Registration from "./pages/Registration";
import CaregiverReq from "./pages/CaregiverReq";
import EditProfile from "./pages/EditProfile";
import CareGiverHome from "./pages/CareGiver/CareGiverHome";
import TimeTable from "./pages/CareGiver/TimeTable";
import DataSummary from "./pages/Admin/DataSummary";
import UserInfo from "./pages/Admin/UserInfo";
import MealManagement from "./pages/Admin/MealManagement";
import DeliManagement from "./pages/Admin/DeliManagement";
import DonationManagement from "./pages/Admin/DonationManagement";
import Donation from "./pages/Donation";
import { useState } from "react";
import ProtectedRoute from "./components/Security/ProtectedRoute";
import MemberHome from "./pages/Member/MemberHome";
import Deliveries from "./pages/Rider/Deliveries";
import DeliverList from "./pages/Rider/DeliverList";
import DeliverDetail from "./pages/Rider/DeliverDetail";
import MealAssess from "./pages/Volunteer/MealAssess";

function App() {
  const [auth, setAuth] = useState({
    name: "Aung Thiha Tun",
    role: ["ADMIN", "VOLUNTEER", "RIDER", "CAREGIVER", "PARTNER", "MEMBER"],
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          element={<ProtectedRoute isAllowed={auth.role.includes("ADMIN")} />}
        >
          <Route path={"/admin"} element={<Dashboard role={"ADMIN"} />}>
            <Route index element={<DataSummary />}></Route>
            <Route path={"dataSummary"} element={<DataSummary />}></Route>
            <Route path={"userinfo"} element={<UserInfo />}></Route>
            <Route path={"mealinfo"} element={<MealManagement />}></Route>
            <Route path={"deliinfo"} element={<DeliManagement />}></Route>
            <Route path={"edit-pro"} element={<EditProfile />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"donateinfo"} element={<DonationManagement />}></Route>
          </Route>
        </Route>

        <Route
          element={<ProtectedRoute isAllowed={auth.role.includes("PARTNER")} />}
        >
          <Route path={"/partner"} element={<Dashboard role={"PARTNER"} />}>
            <Route index element={<UserHome />}></Route>
            <Route path={"dashbord"} element={<UserHome />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"add-meal"} element={<AddMeal />}></Route>
            <Route path={"edit-pro"} element={<EditProfile />}></Route>
            <Route path={"meals"} element={<Meal />} />
          </Route>
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={auth.role.includes("CAREGIVER")} />
          }
        >
          <Route path={"/caregiver"} element={<Dashboard role={"CAREGIVER"} />}>
            <Route index element={<CareGiverHome />}></Route>
            <Route path={"dashborad"} element={<CareGiverHome />} />
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"time-table"} element={<TimeTable />} />
            <Route path={"edit-pro"} element={<EditProfile />}></Route>
          </Route>
        </Route>

        <Route
          element={<ProtectedRoute isAllowed={auth.role.includes("MEMBER")} />}
        >
          <Route path={"/member"} element={<Home role={"MEMBER"} />}>
            <Route index element={<MemberHome />}></Route>
            <Route path={"home"} element={<MemberHome />} />
            <Route path={"meal-details"} element={<MealDetails />} />
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"add-cart"} element={<AddCart />} />
            <Route path={"about-us"} element={<AboutUs />} />
            <Route path={"meals"} element={<Meal />} />
            <Route path={"contact-us"} element={<ContactUs />} />
            <Route path={"caregiverReq"} element={<CaregiverReq />} />
            <Route path={"edit-pro"} element={<EditProfile />}></Route>
          </Route>
        </Route>

        <Route path="/" element={<Home role={""} />}>
          <Route index element={<PublicUser />}></Route>
          <Route path={"meals"} element={<Meal />} />
          <Route path={"meal-details"} element={<MealDetails />} />
          <Route path={"add-cart"} element={<AddCart />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"about-us"} element={<AboutUs />} />
          <Route path={"contact-us"} element={<ContactUs />} />
          <Route path={"register"} element={<Registration />} />
          <Route path={"donation"} element={<Donation />} />
        </Route>

        <Route
          element={<ProtectedRoute isAllowed={auth.role.includes("RIDER")} />}
        >
          <Route path={"/rider"} element={<Dashboard role={"RIDER"} />}>
            <Route index element={<Profile />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"deliveries"} element={<Deliveries />}>
              <Route index element={<DeliverList />}></Route>
              <Route path={"detail"} element={<DeliverDetail />}></Route>
            </Route>
          </Route>
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={auth.role.includes("VOLUNTEER")} />
          }
        >
          <Route path={"/volunteer"} element={<Dashboard role={"VOLUNTEER"} />}>
            <Route index element={<Profile />}></Route>
            <Route path={"profile"} element={<Profile />}></Route>
            <Route path={"assessfood"} element={<MealAssess />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
