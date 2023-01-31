import React from "react";
import { useState } from "react";
import { AiOutlineClose  } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from "@mui/icons-material/Summarize";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import DrawerComp from "./DrawerComp";
import Footer from "../Layout/Footer/Footer";
import PartnerSidebar from "./Partner/PartnerSidebar";
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
              ? "fixed left-0 top-0 h-full lg:w-[20%] md:w-[28%] sm:w-[32%] w-[43%]  backdrop-filter backdrop-blur-lg  ease-in-out duration-500 bg-green-400 lg:visible"
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

<div>
  <PartnerSidebar />
</div>
          {/* <ul className="p-4 uppercase text-left text-1xl cursor-pointer font-bold ">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dataSummary">
                <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Home
              </a>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/about-us">
                <SummarizeIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Info Summary
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                My Profile
              </a>
            </li>
           
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/meals">
                <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                Add Meal
              </a>
            </li>
           
            
            
          </ul> */}
        </div>
      
    
    <div className=" md:h-14 sm:h-14 h-12"></div>
   
  </div>
  );
};

export default SidebarNav;
