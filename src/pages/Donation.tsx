import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import Donate from "../assets/donate.jpg";
import Paypal from "../assets/paypal.png";

const Donation = () => {
  return (
    <div className='pt-4 mb-52'>
        <h1 className='text-3xl text-center font-bold'>Donate To Help</h1>
    <div>
    <Container maxWidth={'xl'}>
        <Grid container spacing={2} className='mt-3 pb-3 justify-between items-center border'>
      <Grid item lg={4} md={6} sm={12}  xs={12}>
        <Box  textAlign="center">
        <img
                    className=" w-[100%]  text-center inline-block"
                    src={Donate}
                    alt="/"
                  />
        </Box>
      </Grid>
      <Grid item lg={8} md={6} sm={12}  xs={12}>
        <Box  p={5} textAlign="center"  >
          <h1 className='lg:text-4xl lg:font-extrabold  text-2xl font-bold'>
            Donation can help our organization to grow faster to help qualified adult with disability .Please leave your donation
          </h1>
          <Box className="my-7">
            <Button className='bg-gray-100  rounded-md  hover:bg-gray-200'> <img
                        className="w-[80px] inline-block  mr-2"
                        src={Paypal}
                        alt="/"
                      />{" "} 
              <span className='text-xl font-bold text-black'>Continue With Paypal</span></Button>
          </Box>
        </Box>
      </Grid>
      
    </Grid>

        </Container>
    </div>
    </div>
  )
}

export default Donation