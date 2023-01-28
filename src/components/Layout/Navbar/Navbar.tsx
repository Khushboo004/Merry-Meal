import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu,AiFillHome } from 'react-icons/ai';
import { GiFoodChain} from 'react-icons/gi';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import './Navbar.css'

const Navbar = () => {
    const[nav, setNav]= useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }
    // const [fix, setFix] = useState(false)
    // function setFixed(){
    //     if(window.scrollY >=392){
    //         setFix(true)
    //     }else{
    //         setFix(false)
    //     }
    // }
    // window.addEventListener("scroll",setFixed)
  return (
   <div >
     <div className=' bg-green-400 w-full fixed'>
        <div className='  flex justify-between items-center md:h-20 sm:h-16 h-16 lg:px-24 md:px-5 sm:px-5 px-5 blur-backdrop-filter   mx-auto text-white'>
        <h1 className=' text-3xl font-bold cursor-pointer font-serif'>Merry Meal</h1>
        <ul className='hidden md:flex cursor-pointer uppercase  font-bold '>
            <li className='p-3  dark:hover:text-green-700'><a href="/" ><AiFillHome className='inline-block mr-2 mb-2 text-gray-900 ' />Home</a></li>
            <li className='p-3  dark:hover:text-green-700'><a href="/meals"><GiFoodChain className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Meals</a> </li>
            <li className='p-3  dark:hover:text-green-700'><a href="" ><InfoIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>About Us</a></li>
            <li className='p-3  dark:hover:text-green-700'><a href="" ><ContactsIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Contact Us</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden '>
            {!nav ? <AiOutlineClose className='font-bold' size={25} /> : <AiOutlineMenu className='font-bold' size={25}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 h-full w-[40%] bg-opacity-100 ease-in-out duration-500 bg-green-400 md:hidden':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4  cursor-pointer font-serif'>Merry Meal</h1>

            <ul className='p-4 uppercase text-left text-xl cursor-pointer font-bold '>
            <li className='p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700'><a href="/" ><AiFillHome className='inline-block mr-2 mb-2 text-gray-900 ' />Home</a></li>
            <li className='p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700'><a href='/meals'><GiFoodChain className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Meals</a></li>
            <li className='p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700'><a href="" ><InfoIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>About Us</a></li>
            <li className='p-4 border-gray-600 hover:border-b dark:hover:border-gray-400 dark:hover:text-green-700'><a href="" ><ContactsIcon className='inline-block ml-0 mr-2 mb-2 text-gray-900 '/>Contact Us</a></li>
            </ul>
        </div>
    </div>
    </div>
    <div className=' md:h-20 sm:h-16 h-16'></div>
    </div>
  )
}

export default Navbar