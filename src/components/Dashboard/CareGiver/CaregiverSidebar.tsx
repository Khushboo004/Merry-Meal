import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {NavLink} from "react-router-dom"

const CaregiverSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-1xl cursor-pointer font-bold text-green-400">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/caregiver/dashborad">
                <HomeIcon className="inline-block mr-2 mb-2 " />
                Home
              </NavLink>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/caregiver/time-table">
                <AccessTimeFilledIcon className="inline-block ml-0 mr-2 mb-2  " />
               Time table
              </NavLink>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/caregiver/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 " />
                My Profile
              </NavLink>
            </li>
           
            
            
            
            
          </ul>
    </div>
  )
}

export default CaregiverSidebar