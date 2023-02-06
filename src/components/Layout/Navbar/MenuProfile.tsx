import React, { useEffect } from "react";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";

import Pic from "../../../assets/caregiver.png";
import { getPersonalProfile } from "../../../services/ProfileService";
type Props = {
  role: String;
};
const MenuProfile = (props: Props) => {
  const [nav, setNav] = useState(false);
  const { role } = props;

  const handleNav = () => {
    setNav(!nav);
  };
  const [showOption, setShowOption] = useState(false);
  const handleClick = () => {
    setShowOption(!showOption);
  };
  // const [user, setUser] = useState<any>();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   getPersonalProfile(token)
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleLogout = (e: any) => {
    localStorage.setItem("token", "");
    localStorage.setItem("authorization", "");
  };
  return (
    <div>
      {role === "MEMBER" ? (
        <li
          onClick={handleClick}
          className="lg:ml-2 relative"
          x-data="{dropdownIpen:false}"
        >
          <div className="flex-col flex justify-center">
            <img className="w-[50px] h-12 " src={Pic} alt="/" />{" "}
          </div>
          {showOption && (
            <div className="md:absolute bg-white border p-2 rounded-lg  right-0">
              <ul className="space-y-2 md:w-48">
                <li className="lg:p-3 md:p-2  border-b border-gray-600 dark:hover:border-gray-400 dark:hover:bg-green-700">
                  <Link to={`/${role.toLowerCase()}/profile`}>
                    <PersonIcon className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                    <span className=" md:inline-block">Profile</span>
                  </Link>
                </li>

                <li className="lg:p-3 md:p-2  border-b border-gray-600 dark:hover:border-gray-400 dark:hover:bg-green-700">
                  <a
                    href={`${window.location.protocol}//${window.location.host}/login`}
                    onClick={(e) => handleLogout(e)}
                  >
                    <Logout className="inline-block ml-0 mr-1 mb-2 text-gray-900 " />{" "}
                    <span className=" md:inline-block">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuProfile;
