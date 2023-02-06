import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { NavLink } from "react-router-dom";

const AdminDrawerComp = () => {
  return (
    <div>
      <div className=" fixed border  h-screen lg:w-[4%] sm:w-[7%] md:w-[8%] w-[10%] ease-in-out duration-500 py-1 bg-white left-0 top-0 z-20 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-60  ">
        <div className=" ">
          <ul className="py-20 uppercase text-left text-2xl cursor-pointer font-bold ">
            <li className="p-2 border-b text-center border-t-2 dark:hover:border-t-1 border--600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <AiOutlineMenu className="inline-block mr-2 mb-2 text-green-400 " />
            </li>{" "}
            <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/dataSummary">
                <SummarizeIcon className="inline-block mr-2 mb-2 text-green-900 " />
              </NavLink>
            </li>
            <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/profile">
                <PersonIcon className="inline-block mr-2 mb-2 text-green-900 " />
              </NavLink>
            </li>
            <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/userinfo">
                <RecentActorsIcon className="inline-block mr-2 mb-2 text-green-900 " />
              </NavLink>
            </li>
            <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/mealinfo">
                <DinnerDiningIcon className="inline-block mr-2 mb-2 text-green-900 " />
              </NavLink>
            </li>
            <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/deliinfo">
                <DeliveryDiningIcon className="inline-block mr-2 mb-2 text-green-900 " />
              </NavLink>
            </li>
            <li className="py-2 text-center border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <NavLink to="/admin/donateinfo">
                <VolunteerActivismIcon className="inline-block mr-2 mb-2 text-green-900 " />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDrawerComp;
