import React from 'react'
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import {NavLink} from "react-router-dom"

const AdminSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-xl cursor-pointer font-bold text-green-400">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/dataSummary">
                <SummarizeIcon className="inline-block mr-2 mb-2 " />
                Info Summary
              </NavLink>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2  " />
                My Profile
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/userinfo">
                <RecentActorsIcon className="inline-block ml-0 mr-2 mb-2  " />
                User Info
              </NavLink>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/mealinfo">
                <DinnerDiningIcon className="inline-block ml-0 mr-2 mb-2 " />
                Meal Status
              </NavLink>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/deliinfo">
                <DeliveryDiningIcon className="inline-block ml-0 mr-2 mb-2  " />
                Delivery Status
              </NavLink>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/donateinfo">
                <VolunteerActivismIcon className="inline-block ml-0 mr-2 mb-2 " />
                Donation
              </NavLink>
            </li>
           
            
            
            
            
          </ul>
    </div>
  )
}

export default AdminSidebar