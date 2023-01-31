import React from 'react'

import {  AiOutlineMenu } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";


const DrawerComp = () => {
  return (
    <>
    <div className=" fixed left-0 top-0 h-full lg:w-[4%] sm:w-[7%] md:w-[7%] w-[10%] bg-opacity-100 ease-in-out duration-500 py-1 bg-green-400  ">
              <div className=" ">
           
            
  
            <ul className="py-2 uppercase text-left text-xl cursor-pointer font-bold ">
              <li className="p-2 border-b text-center border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/">
                  <AiOutlineMenu className="inline-block mr-2 mb-2 text-gray-900 " />
  
                </a>
              </li> <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/">
                  <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
              <li className="py-3 border-b border-gray-600 text-center dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/meals">
                  <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
              <li className="py-2 border-b border-gray-600 text-center dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/about-us">
                  <InfoIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
              <li className="py-2 border-b border-gray-600 text-center dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/contact-us">
                  <ContactsIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                 
                </a>
              </li>
              <li className="py-2 border-b text-center border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/about-us">
                  <LoginIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
              <li className="py-2 border-gray-600 hover:border-b text-center dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/contact-us">
                  <AppRegistrationIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  
                </a>
              </li>
            </ul>
            </div>
            </div>
    </>
  )
}

export default DrawerComp