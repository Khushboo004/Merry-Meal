import React from 'react'

import { Grid } from '@mui/material';
import FormLogin from '../components/Auth/FormLogin';
export default function Login() {
    return (
        <div>
           
   <div className=' background-image: url(./ass);'>
   <Grid container spacing={2}>
      <Grid item xs={12}  className='m-3'>
        <div className='pt-20'><FormLogin/></div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div></div>
      </Grid>
    </Grid>
   </div>

        </div>
    )
}