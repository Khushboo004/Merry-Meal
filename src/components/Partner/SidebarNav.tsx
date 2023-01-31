import React from "react";
import { useState } from "react";
import { AiOutlineClose  } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import DrawerComp from "./DrawerComp";
type Props = {};

const SidebarNav = (props: Props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };


  
  return (
    <div>
   
       
        <div
          className={
            !nav
              ? "fixed left-0 top-0 h-full lg:w-[15%] md:w-[26%] sm:w-[32%] w-[43%]  backdrop-filter backdrop-blur-lg  ease-in-out duration-500 bg-green-400 lg:visible"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl text-green-400 font-bold m-6 text-center  cursor-pointer font-serif">
            Merry Meal
          </h1>
          <hr className="border-b"></hr>
          <ul className="px-4 border-t pt-2 text-left text-1xl cursor-pointer  "> 
          <li className="text-right ">
          <div onClick={handleNav} className="inline-block rounded-md font-bold text-white bg-black mb-2 ">
            {!nav ? (
              <AiOutlineClose className="font-bold" size={25} />
              
            ) : (
              <DrawerComp />
            )}
          </div>
          </li>
              <li>
              <div className=" items-center">
          <div className="flex  rounded">
              <input
                  type="text"
                  className="block w-full px-2 py-1  bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
              />
              <button className="px-4 text-white bg-gray-600 border-l rounded ">
                  Search
              </button>
              
          </div>
      </div>
              </li>
          </ul>

          <ul className="p-4 uppercase text-left text-1xl cursor-pointer font-bold ">
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/">
                <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Home
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/meals">
                <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Meals
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/about-us">
                <InfoIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                About Us
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/contact-us">
                <ContactsIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Contact Us
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/about-us">
                <LoginIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Login
              </a>
            </li>
            <li className="p-4 border-gray-600 hover:border-b dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/contact-us">
                <AppRegistrationIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Registration
              </a>
            </li>
          </ul>
        </div>
      
    
    <div className=" md:h-14 sm:h-14 h-12"></div>
  </div>
  );
};

export default SidebarNav;
