import React from 'react'
import {  AiOutlineMenu } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {NavLink} from "react-router-dom"

const CargiverDrawerComp = () => {
  return (
    <div>
         <div className=" fixed border  h-screen lg:w-[4%] sm:w-[7%] md:w-[8%] w-[10%] ease-in-out duration-500 py-1 bg-white left-0 top-0 z-20 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-60  ">
              <div className=" ">
           
            
              <ul className="py-20 uppercase text-left text-2xl cursor-pointer font-bold ">
              <li className="p-2 border-b text-center border-t-2 dark:hover:border-t-1 border--600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <AiOutlineMenu className="inline-block mr-2 mb-2 text-green-400 " />
  
               
              </li> <li className="py-2 text-center border-b  dark:hover:border-gray-400 dark:hover:text-green-700">
                <NavLink to="/caregiver/dashborad">
                  <HomeIcon className="inline-block mr-2 mb-2  text-green-700" />
                  
                </NavLink>
              </li>
               <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <NavLink to="/caregiver/time-table">
                  <AccessTimeFilledIcon className="inline-block mr-2 mb-2 text-green-700 " />
                  
                </NavLink>
                </li>
                 <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <NavLink to="/caregiver/profile">
                  <PersonIcon className="inline-block mr-2 mb-2 text-green-700 " />
                  
                </NavLink>
              </li>
             
             
              
            </ul>
            </div>
            </div>
    </div>
  )
}

export default CargiverDrawerComp