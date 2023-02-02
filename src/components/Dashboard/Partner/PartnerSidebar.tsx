import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from "@mui/icons-material/Summarize";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from '@mui/icons-material/Add';
import {NavLink} from "react-router-dom"

const PartnerSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-1xl cursor-pointer font-bold ">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/partner/dashbord">
                <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Home
              </NavLink>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/partner/meals">
                <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Availible Meal
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/partner/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                My Profile
              </NavLink>
            </li>
           
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/partner/add-meal">
                <AddIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Add Meal
              </NavLink>
            </li>
           
            
            
          </ul>
    </div>
  )
}

export default PartnerSidebar