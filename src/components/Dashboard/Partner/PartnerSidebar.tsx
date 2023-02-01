import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from "@mui/icons-material/Summarize";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from '@mui/icons-material/Add';
const PartnerSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-1xl cursor-pointer font-bold ">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/partner/dashbord">
                <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Home
              </a>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/partner/meals">
                <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Availible Meal
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/partner/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                My Profile
              </a>
            </li>
           
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/partner/add-meal">
                <AddIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Add Meal
              </a>
            </li>
           
            
            
          </ul>
    </div>
  )
}

export default PartnerSidebar