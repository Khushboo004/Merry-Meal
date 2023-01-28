import React from 'react'
import Navbar from '../../components/Layout/Navbar/Navbar'
import { Box, Grid } from '@mui/material'

const Meal = () => {
  return (
    <div>
        <Navbar />
        

{/* <ul className="w-48 text-sm font-medium   border border-gray-200 rounded-lg0  shadow-sm " >
    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
</ul> */}
 

 <Grid container p={1} mt={2} spacing={1}>
      <Grid item md={2} sm={3} xs={3}>
        <Box bgcolor="yellow"  p={5} textAlign="center">
          
        </Box>
      </Grid>
      <Grid item  md={10} sm={8} xs={8}>
        <Box bgcolor="purple" p={5} textAlign="center">2</Box>
      </Grid>
      
    </Grid>


    </div>
  )
}

export default Meal