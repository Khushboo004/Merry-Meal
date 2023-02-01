import React from "react";
import Pic from "../../../assets/caregiver.png";
import {
  Box,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
const AvailableCareGiver = () => {
  return (
    <div>
      <div className="py-3 bg-slate-100">
        <Container maxWidth="xl" className="pb-5">
          <div className="lg:px-5">
            <Box margin={2} py={1}>
              <Grid container spacing={4}>
                <Grid item lg={6} xs={6}>
                  <div className="text-left">
                    <h1 className="text-xl font-bold">Available Caregiver</h1>
                  </div>
                </Grid>
                <Grid item lg={6} xs={6}>
                  <div className="text-right">
                    <a href="#" className="font-serif">
                      View All
                    </a>
                  </div>
                </Grid>
              </Grid>
              <div style={{ borderTop: "2px solid gray " }}></div>
            </Box>
          </div>
          <div className="lg:px-5">
            <Box margin={2}>
              <Grid container spacing={4}>
                <Grid item lg={2} md={4} sm={4} xs={6}>
                  <Card elevation={10} className="shadow-xl">
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom className="text-[16px] font-bold" component="div">
                        Name: Abc
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>29843738764673</h1>
           <h1><span className='font-bold'>session: </span>11:00am-1:00pm</h1>
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <a href="/meal-details">
                        <button className=" bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto ">
                          Details
                        </button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item lg={2} md={4} sm={4} xs={6}>
                  <Card elevation={10} className="shadow-xl">
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom className="text-[16px] font-bold" component="div">
                        Name: Abc
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>29843738764673</h1>
           <h1><span className='font-bold'>session: </span>11:00am-1:00pm</h1>
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <a href="/meal-details">
                        <button className=" bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto ">
                          Details
                        </button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item lg={2} md={4} sm={4} xs={6}>
                  <Card elevation={10} className="shadow-xl">
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                    <Typography gutterBottom className="text-[16px] font-bold" component="div">
                        Name: Abc
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>29843738764673</h1>
           <h1><span className='font-bold'>session: </span>11:00am-1:00pm</h1>
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <a href="/meal-details">
                        <button className=" bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto ">
                          Details
                        </button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item lg={2} md={4} sm={4} xs={6}>
                  <Card elevation={10} className="shadow-xl">
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                    <Typography gutterBottom className="text-[16px] font-bold" component="div">
                        Name: Abc
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>29843738764673</h1>
           <h1><span className='font-bold'>session: </span>11:00am-1:00pm</h1>
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <a href="/meal-details">
                        <button className=" bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto ">
                          Details
                        </button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item lg={2} md={4} sm={4} xs={6}>
                  <Card elevation={10} className="shadow-xl">
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                    <Typography gutterBottom className="text-[16px] font-bold" component="div">
                        Name: Abc
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>29843738764673</h1>
           <h1><span className='font-bold'>session: </span>11:00am-1:00pm</h1>
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <a href="/meal-details">
                        <button className=" bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto ">
                          Details
                        </button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item lg={2} md={4} sm={4} xs={6}>
                  <Card elevation={10} className="shadow-xl">
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom className="text-[16px] font-bold" component="div">
                        Name: Abc
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
             <h1><span className='font-bold'>Gender: </span>Female</h1>
           <h1><span className='font-bold'>Phone No: </span>29843738764673</h1>
           <h1><span className='font-bold'>session: </span>11:00am-1:00pm</h1>
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <a href="/meal-details">
                        <button className=" bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto ">
                          Details
                        </button>
                      </a>
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
  );
};

export default AvailableCareGiver;
