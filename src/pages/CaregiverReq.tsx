import { Box, Container, Card, CardActions, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material'
import Pic from "../assets/caregiver.png"
const CaregiverReq = () => {


  return (
    <div>
       <Container maxWidth="xl">
       <div className='mb-10'>
  
  <Grid container px={1} mt={2}  spacing={1}  >
       <Grid item md={2} sm={3} xs={3} className='h-screen'>
         <Box   pt={6} >
         <ul className="border md:text-xl text-1xl mt-2 border-gray-200 rounded-lg0  shadow-sm " >
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">Session</li>
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">10.00am-11.00p</li>
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">11.30am-2.00pm</li>
     <li className="w-full hover:bg-gray-100 hover:font-bold hover:border-b-2 hover:border-green-700 px-4 py-2 border-b border-gray-200  dark:border-gray-600">5.00pm-7.00pm</li>
 </ul> 
         </Box>
       </Grid>
       <Grid item  md={10} sm={9} xs={9}>
         <Box  p={1} >
           <h3 className='py-2 text-2xl font-bold text-center underline mb-2'>Caregiver List</h3>
         <Grid container spacing={1}>
         <Grid item lg={3} md={4} sm={6} xs={6}>
       
         
   
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
          <CardContent>
           
           <Typography className='sm:text-[15px] text-[14px]'  color="text.dark">
             <h1><span className='font-bold'>Name: </span>ABC</h1>
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>0123456789</h1>
           </Typography>
         </CardContent>
         <CardActions>
         <Box textAlign={'center'} display={'block'} >
<Button className='md:mr-3 mr-0 my-1 text-[15px] font-bold' color='info' variant='contained'>Send Request</Button>

<a href="/profile"><Button className='lg:px-7 px-10 text-[15px] font-bold bg-gray-700'  variant='contained'>Details</Button>
</a>      </Box>
     </CardActions>
       </Card>
   
   </Grid>
   <Grid item lg={3} md={4} sm={6} xs={6}>
       
         
   
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
          <CardContent>
           
           <Typography className='sm:text-[15px] text-[14px]'  color="text.dark">
             <h1><span className='font-bold'>Name: </span>ABC</h1>
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>0123456789</h1>
           </Typography>
         </CardContent>
         <CardActions>
         <Box textAlign={'center'} display={'block'} >
<Button className='md:mr-3 mr-0 my-1 text-[15px] font-bold' color='info' variant='contained'>Send Request</Button>

<a href="/profile"><Button className='lg:px-7 px-10 text-[15px] font-bold bg-gray-700'  variant='contained'>Details</Button>
</a>      </Box>
     </CardActions>
       </Card>
   
   </Grid>
   <Grid item lg={3} md={4} sm={6} xs={6}>
       
         
   
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
          <CardContent>
           
           <Typography className='sm:text-[15px] text-[14px]'  color="text.dark">
             <h1><span className='font-bold'>Name: </span>ABC</h1>
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>0123456789</h1>
           </Typography>
         </CardContent>
         <CardActions>
         <Box textAlign={'center'} display={'block'} >
<Button className='md:mr-3 mr-0 my-1 text-[15px] font-bold' color='info' variant='contained'>Send Request</Button>

<a href="/profile"><Button className='lg:px-7 px-10 text-[15px] font-bold bg-gray-700'  variant='contained'>Details</Button>
</a>      </Box>
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

export default CaregiverReq