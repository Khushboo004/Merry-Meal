import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const CaregiverSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-xl cursor-pointer font-bold ">
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dashboard/caregiver">
                <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                Home
              </a>
            </li>
          <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dashboard/time-table">
                <AccessTimeFilledIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
               Time table
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/dashboard/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                My Profile
              </a>
            </li>
           
            
            
            
            
          </ul>
    </div>
  )
}

export default CaregiverSidebar