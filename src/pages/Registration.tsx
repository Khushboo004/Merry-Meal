import React from 'react'
import "../styles/Register.css"

import { Grid } from '@mui/material';
import RegistrationForm from '../components/Auth/Register/RegistrationForm';

type Props = {
  auth: any;
};

const Registration = (props: Props) => {
  const { auth } = props;
  return (
    <div>
         <div  className='pb-10 backgroundImg'>  
        <Grid container spacing={2}>
   <Grid item xs={2} md={3} lg={4} className=''></Grid>
      <Grid item lg={4} md={6} xs={8}  className='m-3'>
        
      
        <div className='pt-20'><RegistrationForm auth={auth}/></div>
       
      </Grid>
      <Grid item xs={2} md={3} lg={4} className=''></Grid>
    </Grid>

         </div>
    </div>
  )
}

export default Registration