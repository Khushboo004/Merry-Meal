import React from 'react'
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const AdminSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-xl cursor-pointer font-bold ">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/admin/dataSummary">
                <SummarizeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Info Summary
              </a>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/admin/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                My Profile
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/admin/userinfo">
                <RecentActorsIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                User Info
              </a>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/admin/mealinfo">
                <DinnerDiningIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Meal Status
              </a>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/admin/deliinfo">
                <DeliveryDiningIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Delivery Status
              </a>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/admin/donateinfo">
                <VolunteerActivismIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Donation
              </a>
            </li>
           
            
            
            
            
          </ul>
    </div>
  )
}

export default AdminSidebar