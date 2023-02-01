import React from 'react'
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "@mui/icons-material";

import Pic from "../../../assets/caregiver.png"

const MenuProfile = () => {
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
         <li
              onClick={handleClick}
              className="lg:ml-2 mt-5 relative  "
              x-data="{dropdownIpen:false}"
            >
              <div className='flex justify-between items-center'>
              <img
                        className="w-[50px] h-12 "
                        src={Pic}
                        alt="/"
                      />{" "}
                      Rehnumaye Khushboo
              </div>
              {showOption && (
                <div className="md:absolute bg-green-500 border p-2 rounded-lg  right-0">
                  <ul className="space-y-2 md:w-48">
                    <li className="lg:p-3 md:p-2  border-b border-gray-600 dark:hover:border-gray-400 dark:hover:bg-green-700">
                      <a href="/profile">
                        <PersonIcon className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                        <span className=" md:inline-block">Profile</span>
                      </a>
                    </li>

                    <li className="lg:p-3 md:p-2  border-b border-gray-600 dark:hover:border-gray-400 dark:hover:bg-green-700">
                      <a href="/contact-us">
                        <Logout className="inline-block ml-0 mr-1 mb-2 text-gray-900 " />{" "}
                        <span className=" md:inline-block">Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
    </div>
  )
}

export default MenuProfile