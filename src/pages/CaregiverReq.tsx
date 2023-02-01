import { Box, Container, Card, CardActions, CardContent, CardMedia, Grid, Typography, Button, FormControl, InputLabel, NativeSelect } from '@mui/material'
import Pic from "../assets/caregiver.png"
import filteringMeal from '../Utils/filteringMeal';
import { useState } from 'react';
const CaregiverReq = () => {
  const allSessions = [
    {
      session: "11:00am-01:00pm",
      name:"abc",
      gender: 'Female',
      phoneNo: '0123456789'
    },
    {
      session: "01:00pm-03:00pm",
      name:"abc",
      gender: 'Female',
      phoneNo: '0123456789'
    },
    {
      session: "03:00pm-05:00pm",
      name:"abc",
      gender: 'Female',
      phoneNo: '0123456789'
    },
    {
      session: "05:00pm-07:00pm",
      name:"abc",
      gender: 'Female',
      phoneNo: '0123456789'
    },
    {
      session: "07:00am-09:00pm",
      name:"abc",
      gender: 'Female',
      phoneNo: '0123456789'
    },

   
  ];
  const [sessions, SetSessions] = useState(allSessions);
  const filterSession = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, SetSessions, allSessions);
  };
  

  return (
    <div className='mb-10'>
       <Container maxWidth="xl">
       <div className=''>
       <h3 className='py-2 text-2xl font-bold text-center underline '>Caregiver List</h3>

  <Grid container px={1}   spacing={1}  >
       <Grid item xs={12}>
         <Box   pt={6} >
         <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Delivery Status
          </InputLabel>
          <NativeSelect
            defaultValue={"all"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            onChange={(e) => filterSession(e)}
          >
            <option value={"all"}>All</option>
            <option value={"11:00am-01:00pm"}>11:00am-01:00pm</option>
            <option value={"01:00pm-03:00pm"}>01:00pm-03:00pm</option>
            <option value={"03:00pm-05:00pm"}>03:00pm-05:00pm</option>
            <option value={"05:00pm-07:00pm"}>05:00pm-07:00pm</option>
            <option value={"07:00am-09:00pm"}>07:00am-09:00pm</option>
          </NativeSelect>
        </FormControl>
         </Box>
       </Grid>
       <Grid item  xs={12}>
         <Box  p={1} >
         <Grid container spacing={1}>
         {sessions.map((time) => (
         <Grid item lg={2} md={3} sm={4} xs={6}>
       
         
   
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
             <h1><span className='font-bold'>Name: </span>{time.name}</h1>
             <h1><span className='font-bold'>Gender: </span>{time.gender}</h1>
           <h1><span className='font-bold'>Phone No: </span>{time.phoneNo}</h1>
           <h1><span className='font-bold'>session: </span>{time.session}</h1>
           </Typography>
         </CardContent>
         <CardActions>
         <Box className="justify-between items-center lg:text-no md:text-center sm:text-center xs:text-center">
<Button  className=' text-[12px] mr-2 my-2 font-bold ' color='info' variant='contained' >Send Request</Button>

<a href="/profile"><Button className='lg:px-7  px-10 text-[12px]  font-bold bg-gray-700'   variant='contained'>Details</Button>
</a>      </Box>
     </CardActions>
       </Card>
   
   </Grid>
  ))}








  
    
     
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