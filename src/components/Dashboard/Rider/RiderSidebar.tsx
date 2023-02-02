import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import {NavLink} from "react-router-dom"
const RiderSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-xl cursor-pointer font-bold ">
         
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/rider/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                My Profile
              </NavLink>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/rider/deliveries">
                <RecentActorsIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Delivery Info
              </NavLink>
            </li>
          
            
            
            
            
          </ul>
    </div>
  )
}

export default RiderSidebar