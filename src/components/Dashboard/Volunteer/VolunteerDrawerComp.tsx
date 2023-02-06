import React from 'react'
import {  AiOutlineMenu } from "react-icons/ai";
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import {NavLink} from "react-router-dom"
const VolunteerDrawerComp = () => {
  return (
    <div>
              <div className=" ">
           
            
  
            <ul className="py-22 uppercase text-left text-2xl cursor-pointer font-bold ">
              <li className="p-2 border-b text-center border-t-2 dark:hover:border-t-1 border--600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <AiOutlineMenu className="inline-block mr-2 mb-2 text-green-400 " />
  
              </li>
                 <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-900">
               <NavLink to="/volunteer/profile">
                  <PersonIcon className="inline-block mr-2 mb-2 text-green-700 " />
                  
                </NavLink>
              </li>
              <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-900">
                <NavLink to="/volunteer/assessfood">
                  <RecentActorsIcon className="inline-block mr-2 mb-2 text-green-700 " />
                  
                </NavLink>
              </li>
             
             
             
              
            </ul>
            </div>
            </div>
   
  )
}

export default VolunteerDrawerComp