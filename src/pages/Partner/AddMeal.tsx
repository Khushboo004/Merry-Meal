import React from 'react'
import JoditEditor from "jodit-react";
import {Box, Container, Grid, Typography} from "@mui/material"
import { useRef } from 'react';

const AddMeal = () => {
    const editor = useRef(null);
  return (
    <div>
      
  <Container maxWidth={'lg'}>
  <Grid container spacing={3}>
         <Grid item xs={12} >
          
        
         <Grid item  xs={12}  >
    
         <Box textAlign="center" >
         <div className="pb-5 inline-block justify-between items-center shadow border-2 mt-10 sm:w-[50%]">
 
     <div className=' h-12  shadow-green-700 bg-green-800 text-white shadow'>
         <Typography variant='h5' className='text-center p-2 font-bold font-serif uppercase'>
             Add Meal Form
         </Typography>
     </div>
     <form className="" action="#" method="POST" >
       <input type="hidden" name="remember" value="true"/>
       <div className="-space-y-px rounded-md shadow-sm m-4">
         <div className=''>
           <label htmlFor="name"></label>
           <input id="name" name="name" type="text" className="r w-full  appearance-none hover:bg-   rounded-none bg-white outline-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10" placeholder="Meal name"/>
         </div>
         <div className='pt-2'>
           <label htmlFor="status" className="sr-only">Status</label>
 
           <select defaultValue={0} className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'>
             <option disabled value={0}>--- Give Status --</option>
             <option>Dried</option>
           </select>
         </div>
         <div className='pt-2'>
           <label htmlFor="catagory" className="sr-only">Catagory</label>
           {/* <input id="status" name="status" type="select"  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Selecr Catagory"> */}
 
           <select defaultValue={0} className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'>
             <option  disabled value={0}>-- Select Meal Catagory --</option>
             <option>Dried</option>
           </select>
 
           {/* </input> */}
         </div>
         <div className='pt-2'>
           <label htmlFor="meal_img" className="sr-only">Img</label>
           <input id="meal_img" name="meal_img" type="file"  className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Give the food name"/>
         </div>
 
         <div className='pt-2'>
           <label htmlFor="meal_img" className="sr-only">about meal</label>
           {/* <input id="status" name="status" type="file"  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Give the status for food"/> */}
           <JoditEditor ref={editor} value=""/>
         </div>
 
       </div>
 
      
 
      
       <div>
        <button className='bg-blue-700 p-2 rounded-md hover:bg-blue-600 text-white font-bold'>Add Meal</button>
       </div>
     </form>
   </div>
 
 </Box>
             
          
         </Grid>
         
         </Grid>
       </Grid>
       </Container>
 
         
    </div>
  )
}

export default AddMeal