import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import { Box, Container, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Pic from "../assets/public/home.jpeg"
import Footer from '../components/Layout/Footer/Footer'

const Meal = () => {
  return (
    <div>
      

{/* <ul className="w-48 text-sm font-medium   border border-gray-200 rounded-lg0  shadow-sm " >
    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
</ul> */}
 
<Container maxWidth="xl">
<div className='h-screen'>
  
  <Grid container px={1} mt={2}  spacing={1}  >
       <Grid item md={2} sm={3} xs={3}>
         <Box   pt={6}>
         <ul className="border md:text-xl text-1xl mt-2 border-gray-200 rounded-lg0  shadow-sm " >
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">All</li>
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">Fruit</li>
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">Vegetable</li>
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">Drinks</li>
 </ul> 
         </Box>
       </Grid>
       <Grid item  md={10} sm={9} xs={9}>
         <Box  p={1} >
           <h3 className='py-2 text-2xl font-bold text-center underline mb-2'>ALL</h3>
         <Grid container spacing={1}>
       <Grid item lg={2} md={4} sm={4} xs={6}>
       
         
   
         <Card elevation={10} >
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
             image={Pic}
           />
            <CardContent>
             <Typography gutterBottom >
               <div className='md:text-xl'><span className='font-bold'>Category</span>: Fruit</div>
             </Typography>
             <Typography variant="body2"  color="text.secondary">
               <h2>Pomegranate</h2>
              <h3> 120 calories</h3>
             </Typography>
           </CardContent>
           <CardActions>
             <button className=' bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
           </CardActions>
         </Card>
     
     </Grid>
 
 
   
     <Grid item lg={2} md={4} sm={4} xs={6}>
         
   
         <Card elevation={10} >
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
             image={Pic}
           />
            <CardContent>
             <Typography gutterBottom >
               <div className='md:text-xl'><span className='font-bold'>Category</span>: Fruit</div>
             </Typography>
             <Typography variant="body2"  color="text.secondary">
               <h2>Pomegranate</h2>
              <h3> 120 calories</h3>
             </Typography>
           </CardContent>
           <CardActions>
             <button className=' bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
           </CardActions>
         </Card>
     
     </Grid>
     
     <Grid item lg={2} md={4} sm={4} xs={6}>
         
   
         <Card elevation={10} >
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
             image={Pic}
           />
            <CardContent>
             <Typography gutterBottom >
               <div className='md:text-xl'><span className='font-bold'>Category</span>: Fruit</div>
             </Typography>
             <Typography variant="body2"  color="text.secondary">
               <h2>Pomegranate</h2>
              <h3> 120 calories</h3>
             </Typography>
           </CardContent>
           <CardActions>
             <button className=' bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
           </CardActions>
         </Card>
     
     </Grid>
     
     <Grid item lg={2} md={4} sm={4} xs={6}>
         
   
         <Card elevation={10} >
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
             image={Pic}
           />
            <CardContent>
             <Typography gutterBottom >
               <div className='md:text-xl'><span className='font-bold'>Category</span>: Fruit</div>
             </Typography>
             <Typography variant="body2"  color="text.secondary">
               <h2>Pomegranate</h2>
              <h3> 120 calories</h3>
             </Typography>
           </CardContent>
           <CardActions>
             <button className=' bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
           </CardActions>
         </Card>
     
     </Grid>
     
     <Grid item lg={2} md={4} sm={4} xs={6}>
         
   
         <Card elevation={10} >
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
             image={Pic}
           />
            <CardContent>
             <Typography gutterBottom >
               <div className='md:text-xl'><span className='font-bold'>Category</span>: Fruit</div>
             </Typography>
             <Typography variant="body2"  color="text.secondary">
               <h2>Pomegranate</h2>
              <h3> 120 calories</h3>
             </Typography>
           </CardContent>
           <CardActions>
             <button className=' bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
           </CardActions>
         </Card>
     
     </Grid>
     
     </Grid>
         </Box>
       </Grid>
       
     </Grid>
 </div>
</Container>



    </div>
  )
}

export default Meal