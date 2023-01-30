import React from 'react'
import { Box, Container, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const Funds = () => {
  return (
    <div>
         <div className='pb-0'>
        <div className='py-3 bg-slate-100'>
        <Container maxWidth="xl" className="pb-5">
        <div className='lg:px-5'>
        <Box margin={2} py={0}>
    <Grid container spacing={4} >
    <Grid item lg={6} xs={6}>
        <div className='text-left'>
        <h1 className='text-xl font-bold'>Funds</h1>
        </div>
        </Grid>
        <Grid item lg={6} xs={6}>
        <div className='text-right'>
        <a href="#" className='font-serif'>View All</a>
        </div>
        </Grid>
        </Grid>
        <div style={{ borderTop: "2px solid gray "}}></div>
        </Box>
      </div >
    <div className='lg:px-5'>
      <Box margin={2}>
      <Grid container spacing={4}>
      <Grid item lg={2} md={4} sm={4} xs={6}>
        
  
        <Card elevation={10} className='p-1' >
          
           <CardContent>
            <Typography gutterBottom component="div">
              <span><span className='font-bold text-gray-500'>Organization:</span> AAA Company</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span><span className='font-bold text-gray-500'>Amount:</span> $100</span>
            </Typography>
          </CardContent>
          <CardActions>
          <button className='bg-gray-700 py-2 hover:bg-gray-500 w-[100px] text-white rounded-md mx-auto '>Read More</button>
          </CardActions>
        </Card>
    
    </Grid>
  <Grid item lg={2} md={4} sm={4} xs={6}>
        
  
        <Card elevation={10}  className='p-1'>
         
           <CardContent>
           <Typography gutterBottom component="div">
              <span><span className='font-bold text-gray-500'>Organization:</span> AAA Company</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span><span className='font-bold text-gray-500'>Amount:</span> $100</span>
            </Typography>
          </CardContent>
          <CardActions>
          <button className='bg-gray-700 py-2 hover:bg-gray-500 w-[100px] text-white rounded-md mx-auto '>Read More</button>
          </CardActions>
        </Card>
    
    </Grid>
    <Grid item lg={2} md={4} sm={4} xs={6}>
        
  
        <Card elevation={10}  className='p-1'>
          
           <CardContent>
           <Typography gutterBottom component="div">
              <span><span className='font-bold text-gray-500'>Organization:</span> AAA Company</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span><span className='font-bold text-gray-500'>Amount:</span> $100</span>
            </Typography>
          </CardContent>
          <CardActions>
          <button className='bg-gray-700 py-2 hover:bg-gray-500 w-[100px] text-white rounded-md mx-auto '>Read More</button>
          </CardActions>
        </Card>
    
    </Grid>
    <Grid item lg={2} md={4} sm={4} xs={6}>
        
  
        <Card elevation={10}  className='p-1'>
          
           <CardContent>
           <Typography gutterBottom component="div">
              <span><span className='font-bold text-gray-500'>Organization:</span> AAA Company</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span><span className='font-bold text-gray-500'>Amount:</span> $100</span>
            </Typography>
          </CardContent>
          <CardActions>
          <button className='bg-gray-700 py-2 hover:bg-gray-500 w-[100px] text-white rounded-md mx-auto '>Read More</button>
          </CardActions>
        </Card>
    
    </Grid>
    <Grid item lg={2} md={4} sm={4} xs={6}>
        
  
        <Card elevation={10}  className='p-1'>
         
           <CardContent>
           <Typography gutterBottom component="div">
              <span><span className='font-bold text-gray-500'>Organization:</span> AAA Company</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span><span className='font-bold text-gray-500'>Amount:</span> $100</span>
            </Typography>
          </CardContent>
          <CardActions>
          <button className='bg-gray-700 py-2 hover:bg-gray-500 w-[100px] text-white rounded-md mx-auto '>Read More</button>
          </CardActions>
        </Card>
    
    </Grid>
    <Grid item lg={2} md={4} sm={4} xs={6}>
        
  
        <Card elevation={10}  className='p-1'>
         
           <CardContent>
           <Typography gutterBottom component="div">
              <span><span className='font-bold text-gray-500'>Organization:</span> AAA Company</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <span><span className='font-bold text-gray-500'>Amount:</span> $100</span>
            </Typography>
          </CardContent>
          <CardActions>
          <button className='bg-gray-700 py-2 hover:bg-gray-500 w-[100px] text-white rounded-md mx-auto '>Read More</button>
          </CardActions>
        </Card>
    
    </Grid>

  </Grid>
  
  
      </Box>
      </div>
      </Container>
      </div>
  
      {/* </Container> */}
    </div>
    </div>
  )
}

export default Funds