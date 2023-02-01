import { Box, Container, Grid } from '@mui/material'
import React from 'react'

const Donation = () => {
  return (
    <div>
        <h1 className='text-2xl'>Donate To Help</h1>
    <div>
        <Container>
        <Grid container mt={2} spacing={2}>
      <Grid item md={3} sm={6} xs={12}>
        <Box bgcolor="yellow"  p={5} textAlign="center">
          
        </Box>
      </Grid>
      <Grid item  md={3} sm={6} xs={12}>
        <Box bgcolor="purple" p={5} textAlign="center">2</Box>
      </Grid>
      
    </Grid>

        </Container>
    </div>
    </div>
  )
}

export default Donation