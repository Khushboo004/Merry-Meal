import React from 'react'
import {  AiOutlineMenu } from "react-icons/ai";
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import {NavLink} from "react-router-dom"

const RiderDrawerComp = () => {
  return (
    <div>
         <div className=" fixed left-0 top-0 h-screen lg:w-[4%] sm:w-[7%] md:w-[8%] w-[10%] bg-opacity-100 ease-in-out duration-500 py-1 bg-green-400  ">
              <div className=" ">
           
            
  
            <ul className="py-20 uppercase text-left text-2xl cursor-pointer font-bold ">
              <li className="p-2 border-b text-center border-t-2 border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                
                  <AiOutlineMenu className="inline-block mr-2 mb-2 text-gray-900 " />
  
               
              </li>
                 <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <NavLink to="/rider/profile">
                  <PersonIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                  
                </NavLink>
              </li>
              <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <NavLink to="/rider/deliveries">
                  <RecentActorsIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                  
                </NavLink>
              </li>
             
             
             
              
            </ul>
            </div>
            </div>
    </div>
  )
}

export default RiderDrawerComp