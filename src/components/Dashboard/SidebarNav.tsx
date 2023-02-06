import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import DrawerComp from "./DrawerComp";
import PartnerSidebar from "./Partner/PartnerSidebar";
import CaregiverSidebar from "./CareGiver/CaregiverSidebar";
import AdminSidebar from "./Admin/AdminSidebar";
import { useSearchParams } from "react-router-dom";
import RiderSidebar from "./Rider/RiderSidebar";
import VolunteerSidebar from "./Volunteer/VolunteerSidebar";
type Props = {
  role: String;
};

const SidebarNav = (props: Props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { role } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const uri = role?.toLowerCase();

  return (
    <div>
      <div
        className={
          !nav
            ? "fixed  h-full lg:w-[20%] md:w-[28%] sm:w-[32%] w-[43%]  ease-in-out duration-500  bg-white left-0 top-0 z-20 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-60 lg:visible"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl text-white font-bold m-6 text-center  cursor-pointer font-serif">
          Merry Meal
        </h1>
        <hr className="border-b"></hr>
        <ul className="px-4 border-t pt-2 text-left text-1xl cursor-pointer  ">
          <li className="text-right ">
            <div
              onClick={handleNav}
              className="inline-block rounded-md font-bold text-white bg-black mb-2 "
            >
              {!nav ? (
                <AiOutlineClose className="font-bold" size={25} />
              ) : (
                <DrawerComp role={role} />
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
          {role === "ADMIN" && window.location.toString().includes("admin") ? (
            <AdminSidebar />
          ) : (
            <></>
          )}
          {role === "PARTNER" ? <PartnerSidebar /> : <></>}

          {role === "CAREGIVER" ? <CaregiverSidebar /> : <></>}

          {role === "RIDER" ? <RiderSidebar /> : <></>}

          {role === "VOLUNTEER" ? <VolunteerSidebar /> : <></>}
        </div>
      </div>

      <div className=" md:h-14 sm:h-14 h-12"></div>
    </div>
  );
};

export default SidebarNav;
