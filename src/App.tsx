import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Meal from "./pages/Meal";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MealDetails from "./pages/MealDetails";
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
import DeliverOrderForm from "./pages/DeliverOrderForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OAuthRedirect from "./components/Security/OAuthRedirect";
import UpdateMeal from "./pages/Partner/UpdateMeal";
import EditSession from "./pages/CareGiver/EditSession";

function App() {
  let roles: any = localStorage.getItem("authorization");
  let arrayRoles = roles ? JSON.parse(roles) : null;
  const [auth, setAuth] = useState({
    role: arrayRoles != null && arrayRoles.length > 0 ? arrayRoles : [],
  });

  useEffect(() => {
    setAuth({
      role: arrayRoles != null && arrayRoles.length > 0 ? arrayRoles : [],
    });
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContainer />
      <Routes>
        <Route
          path={"/oauth2/redirect"}
          element={<OAuthRedirect auth={setAuth} />}
        />
        <Route
          element={<ProtectedRoute isAllowed={auth.role?.includes("ADMIN")} />}
        >
          <Route path={"/admin"} element={<Dashboard role={"ADMIN"} />}>
            <Route index element={<DataSummary />}></Route>
            <Route path={"dataSummary"} element={<DataSummary />}></Route>
            <Route path={"userinfo"} element={<UserInfo />}></Route>
            <Route
              path={"userinfo/edit"}
              element={<EditProfile action="edit" />}
            ></Route>
            <Route path={"mealinfo"} element={<MealManagement />}></Route>
            <Route path={"deliinfo"} element={<DeliManagement />}></Route>
            <Route
              path={"edit-pro"}
              element={<EditProfile action="edit" />}
            ></Route>
            <Route
              path={"profile"}
              element={<Profile role={"ADMIN"} />}
            ></Route>
            <Route path={"donateinfo"} element={<DonationManagement />}></Route>
          </Route>
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={auth.role?.includes("PARTNER")} />
          }
        >
          <Route path={"/partner"} element={<Dashboard role={"PARTNER"} />}>
            <Route index element={<UserHome role={"PARTNER"} />}></Route>
            <Route
              path={"dashbord"}
              element={<UserHome role={"PARTNER"} />}
            ></Route>
            <Route
              path={"profile"}
              element={<Profile role={"PARTNER"} />}
            ></Route>
            <Route path={"add-meal"} element={<AddMeal />}></Route>
            <Route
              path={"update-meal/:mealId"}
              element={<UpdateMeal />}
            ></Route>
            <Route
              path={"edit-pro"}
              element={<EditProfile action="edit" />}
            ></Route>
            <Route path={"meals"} element={<Meal role={"PARTNER"} />} />
            <Route
              path={"meal-details/:mealId"}
              element={<MealDetails role={"PARTNER"} />}
            />
          </Route>
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={auth.role?.includes("CAREGIVER")} />
          }
        >
          <Route path={"/caregiver"} element={<Dashboard role={"CAREGIVER"} />}>
            <Route index element={<CareGiverHome />}></Route>
            <Route path={"dashborad"} element={<CareGiverHome />} />
            <Route
              path={"profile"}
              element={<Profile role={"CAREGIVER"} />}
            ></Route>
            <Route
              path={"edit-session/:sessionId"}
              element={<EditSession />}
            ></Route>
            <Route
              path={"time-table"}
              element={<TimeTable role={"CAREGIVER"} />}
            />
            <Route
              path={"edit-pro"}
              element={<EditProfile action="edit" />}
            ></Route>
          </Route>
        </Route>

        <Route
          element={<ProtectedRoute isAllowed={auth.role?.includes("MEMBER")} />}
        >
          <Route path={"/member"} element={<Home role={"MEMBER"} />}>
            <Route index element={<MemberHome role={"MEMBER"} />}></Route>
            <Route path={"home"} element={<MemberHome role={"MEMBER"} />} />
            <Route
              path={"meal-details/:mealId"}
              element={<MealDetails role={"MEMBER"} />}
            />
            <Route
              path={"profile"}
              element={<Profile role={"MEMBER"} />}
            ></Route>
            <Route path={"delivery-form"} element={<DeliverOrderForm />} />
            <Route path={"about-us"} element={<AboutUs />} />
            <Route path={"meals"} element={<Meal role={"MEMBER"} />} />
            <Route path={"contact-us"} element={<ContactUs />} />
            <Route
              path={"caregiverReq"}
              element={<CaregiverReq role={"MEMBER"} />}
            />
            <Route
              path={"delivery-form/:mealId"}
              element={<DeliverOrderForm />}
            />
            <Route
              path={"edit-pro"}
              element={<EditProfile action="edit" />}
            ></Route>
          </Route>
        </Route>

        <Route
          path="/"
          element={<Home role={auth.role.length > 0 ? auth.role[0] : ""} />}
        >
          <Route index element={<PublicUser />}></Route>
          <Route path={"meals"} element={<Meal role={""} />} />
          <Route
            path={"meal-details/:mealId"}
            element={<MealDetails role={""} />}
          />
          <Route path={"login"} element={<Login auth={setAuth} />} />
          <Route path={"about-us"} element={<AboutUs />} />
          <Route path={"contact-us"} element={<ContactUs />} />
          <Route path={"register"} element={<Registration auth={setAuth} />} />
          <Route path={"donation"} element={<Donation />} />

          <Route
            path={"creatProfile"}
            element={<EditProfile action="submit" />}
          ></Route>
        </Route>

        <Route
          element={<ProtectedRoute isAllowed={auth.role?.includes("RIDER")} />}
        >
          <Route path={"/rider"} element={<Dashboard role={"RIDER"} />}>
            <Route index element={<Profile role="RIDER" />}></Route>
            <Route
              path={"profile"}
              element={<Profile role={"RIDER"} />}
            ></Route>
            <Route
              path={"edit-pro"}
              element={<EditProfile action="edit" />}
            ></Route>
            <Route path={"deliveries"} element={<Deliveries />}>
              <Route index element={<DeliverList />}></Route>
              <Route
                path={"detail/:deliId"}
                element={<DeliverDetail />}
              ></Route>
            </Route>
          </Route>
        </Route>

        <Route
          element={
            <ProtectedRoute isAllowed={auth.role?.includes("VOLUNTEER")} />
          }
        >
          <Route path={"/volunteer"} element={<Dashboard role={"VOLUNTEER"} />}>
            <Route index element={<Profile role={"VOLUNTEER"} />}></Route>
            <Route
              path={"profile"}
              element={<Profile role={"VOLUNTEER"} />}
            ></Route>
            <Route path={"update-meal/:mealId"} element={<UpdateMeal />} />
            <Route
              path={"edit-pro"}
              element={<EditProfile action="edit" />}
            ></Route>
            <Route path={"assessfood"} element={<MealAssess />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
