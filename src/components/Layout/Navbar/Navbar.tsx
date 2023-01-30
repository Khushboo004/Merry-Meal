import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { GiFoodChain } from "react-icons/gi";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
 

  const [showOption, setShowOption] = useState(false);
  const handleClick = () => {
    setShowOption(!showOption);
  };
  return (
    <div>
      <div className=" bg-green-400 w-full fixed">
        <div className="  flex justify-between items-center md:h-16 sm:h-16 h-14 lg:px-24 md:px-5 sm:px-5 px-5 blur-backdrop-filter   mx-auto text-white">
          <h1 className=" text-3xl font-bold cursor-pointer font-serif">
            Merry Meal
          </h1>
         
          <ul className="hidden md:flex cursor-pointer uppercase md:text-1xl text-center font-bold ">
            <li className="lg:p-3 md:px-2 dark:hover:text-green-700">
              <a href="/">
                <AiFillHome className="inline-block mr-1 mb-2 text-gray-900 " />
                Home
              </a>
            </li>
            <li className="lg:p-3 md:px-2 dark:hover:text-green-700">
              <a href="/meals">
                <GiFoodChain className="inline-block ml-0 mr-1 mb-2 text-gray-900 " />
                Meals
              </a>{" "}
            </li>
            <li
              onClick={handleClick}
              className="lg:p-3 relative md:px-2 "
              x-data="{dropdownIpen:false}"
            >
              <ArrowDropDownCircleIcon className="inline-block ml-0 mr-1 mb-2  text-gray-900 " />More
              {showOption && (
                <div className="md:absolute bg-green-500 border p-2 rounded-lg  right-0">
                  <ul className="space-y-2 md:w-40">
                    <li className="lg:p-3 md:px-2 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                      <a href="/about-us">
                        <InfoIcon className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                        <span className=" md:inline-block">About Us</span>
                      </a>
                    </li>

                    <li className="lg:p-3 md:px-2 dark:hover:text-green-700">
                      <a href="/contact-us">
                        <ContactsIcon className="inline-block ml-0 mr-1 mb-2 text-gray-900 " />{" "}
                        <span className=" md:inline-block">Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="lg:p-3 md:px-2 dark:hover:text-green-700">
              <a href="/contact-us">
                <LoginIcon className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                Login
              </a>
            </li>
            <li className="lg:p-3 md:px-2 dark:hover:text-green-700">
              <a href="/contact-us">
                <AppRegistrationIcon className="inline-block ml-0 mr-1 mb-2 text-gray-900 " />
                Registration
              </a>
            </li>
          </ul>
          <div onClick={handleNav} className="block md:hidden ">
            {!nav ? (
              <AiOutlineClose className="font-bold" size={25} />
            ) : (
              <AiOutlineMenu className="font-bold" size={25} />
            )}
          </div>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 h-full w-[55%] bg-opacity-100 ease-in-out duration-500 bg-green-400 md:hidden"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="w-full text-3xl font-bold m-4  cursor-pointer font-serif">
              Merry Meal
            </h1>
            <ul className="px-4  text-left text-1xl cursor-pointer  "> 
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

            <ul className="p-4 uppercase text-left text-xl cursor-pointer font-bold ">
              <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/">
                  <AiFillHome className="inline-block mr-2 mb-2 text-gray-900 " />
                  Home
                </a>
              </li>
              <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/meals">
                  <GiFoodChain className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
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
                <a href="/about-us">
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
        </div>
      </div>
      <div className=" md:h-16 sm:h-16 h-14"></div>
    </div>
  );
};

export default Navbar;
