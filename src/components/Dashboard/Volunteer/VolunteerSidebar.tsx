import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

const VolunteerSidebar = () => {
  return (
    <div>
        <ul className="p-4 uppercase text-left text-1xl cursor-pointer font-bold text-green-400">
         
            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/volunteer/profile">
                <PersonIcon className="inline-block ml-0 mr-2 mb-2 text-green-900 " />
                My Profile
              </a>
            </li>

            <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
              <a href="/volunteer/assessfood">
                <RecentActorsIcon className="inline-block mr-2 mb-2 text-green-900 " />
                Assess Food
              </a>
            </li>
          
            
            
            
            
          </ul>
    </div>
  )
}

export default VolunteerSidebar