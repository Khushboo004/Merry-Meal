import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from "@mui/icons-material/Summarize";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from "@mui/icons-material/Person";
const PartnerSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-1xl cursor-pointer font-bold ">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dashboard/dataSummary">
                <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Home
              </a>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dashboard/about-us">
                <SummarizeIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Info Summary
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dashboard/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                My Profile
              </a>
            </li>
           
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dashboard/add-meal">
                <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Add Meal
              </a>
            </li>
           
            
            
          </ul>
    </div>
  )
}

export default PartnerSidebar