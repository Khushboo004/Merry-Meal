import React from 'react'
import {  AiOutlineMenu } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
const PartnerDrawerComp = () => {
  return (
    <div>
         <div className=" fixed left-0 top-0 h-screen lg:w-[4%] sm:w-[7%] md:w-[8%] w-[10%] bg-opacity-100 ease-in-out duration-500 py-1 bg-green-400  ">
              <div className=" ">
           
            
  
            <ul className="py-2 uppercase text-left text-xl cursor-pointer font-bold ">
              <li className="p-2 border-b text-center border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                
                  <AiOutlineMenu className="inline-block mr-2 mb-2 text-gray-900 " />
  
               
              </li> <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/dashboard">
                  <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
               <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/dashboard">
                  <SummarizeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                  
                </a>
                </li>
                 <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/dashboard/profile">
                  <PersonIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
              <li className="py-3 border-b border-gray-600 text-center dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/dashboard/add-meal">
                  <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
             
              
            </ul>
            </div>
            </div>
    </div>
  )
}

export default PartnerDrawerComp