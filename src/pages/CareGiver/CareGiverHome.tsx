import React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material'
import Pic from "../../assets/caregiver.png"

const CareGiverHome = () => {
  return (
    <div className='w-full'>
       <div className='max-w-[1750px]  mx-auto '>
           
  
  <Grid container px={1} mt={2}  spacing={1} >       
       <Grid item   xs={12}>
         <Box  p={1} >
           <h3 className='py-2 text-2xl font-bold text-center underline mb-2'>All Requests</h3>
         <Grid container spacing={4}>
       <Grid item lg={2.5} md={4} sm={6} xs={12}>
       
         
   
         <Card elevation={10} >
          <Box  style={{ display:'flex', justifyContent:'center' }}>
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
            
             className='text-center'
             image={Pic}
           />
           </Box>
            <CardContent >
             
             <Typography className='sm:text-[15px] text-[14px]'  color="text.dark">
               <h1><span className='font-bold'>Name: </span>ABC</h1>
               <h1><span className='font-bold'>Gender: </span>Female</h1>
             <h1><span className='font-bold'>Phone No: </span>0123456789</h1>
             </Typography>
           </CardContent>
           <CardActions style={{ display:'flex', justifyContent:'center' }}

>
      <Box textAlign={'center'} display={'block'} style={{ display:'flex', justifyContent:'center' }}>
<Button className='mr-5 text-[15px] font-bold' color='info' variant='contained'
>Accept</Button>

<a href="/profile"><Button className=' text-[15px] font-bold' color='secondary' variant='contained'>Details</Button></a>


      </Box>
       </CardActions>
         </Card>
     
     </Grid>


     <Grid item lg={2.5} md={4} sm={6} xs={12}>
       
         
   
         <Card elevation={10} >
          <Box  style={{ display:'flex', justifyContent:'center' }}>
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
            
             className='text-center'
             image={Pic}
           />
           </Box>
            <CardContent >
             
             <Typography className='sm:text-[15px] text-[14px]'  color="text.dark">
               <h1><span className='font-bold'>Name: </span>ABC</h1>
               <h1><span className='font-bold'>Gender: </span>Female</h1>
             <h1><span className='font-bold'>Phone No: </span>0123456789</h1>
             </Typography>
           </CardContent>
           <CardActions style={{ display:'flex', justifyContent:'center' }}

>
      <Box textAlign={'center'} display={'block'} style={{ display:'flex', justifyContent:'center' }}>
<Button className='mr-5 text-[15px] font-bold' color='info' variant='contained'
>Accept</Button>

<Button className=' text-[15px] font-bold' color='secondary' variant='contained'>Details</Button>


      </Box>
       </CardActions>
         </Card>
     
     </Grid>






     

     
     
     
     </Grid>
         </Box>
       </Grid>
       
     </Grid>



     </div>
    

    </div>
  )
}

export default CareGiverHome