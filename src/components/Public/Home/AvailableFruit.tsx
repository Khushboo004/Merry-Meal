import React from "react";
import Pic from "../../../assets/public/home.jpeg";
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
const AvaliableMeal = () => {
  return (
    <div>
      <div className="py-3 bg-slate-100">
        <Container maxWidth="xl" className="pb-5">
          <div className="lg:px-5">
            <Box margin={2} py={1}>
              <Grid container spacing={4}>
                <Grid item lg={6} xs={6}>
                  <div className="text-left">
                    <h1 className="text-xl font-bold">Fruit</h1>
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
                      <Typography gutterBottom variant="h6" component="div">
                        Category: Vegetable
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2>Carrot</h2>
                        <h3> 120 calories</h3>
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
                  <Card elevation={10}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Category: Drinks
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2>Coca cola</h2>
                        <h3> 120 calories</h3>
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
                  <Card elevation={10}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Category: Fruit
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2>Pomegranate</h2>
                        <h3> 120 calories</h3>
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
                  <Card elevation={10}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Category: Fruit
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2>Pomegranate</h2>
                        <h3> 120 calories</h3>
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
                  <Card elevation={10}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Category: Fruit
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2>Pomegranate</h2>
                        <h3> 120 calories</h3>
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
                  <Card elevation={10}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      image={Pic}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Category: Fruit
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <h2>Pomegranate</h2>
                        <h3> 120 calories</h3>
                      </Typography>
                    </CardContent>

                    <CardActions
                      className="text-center"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box>
                        <a href="/meal-details">
                          <button className=" bg-green-700 py-2 hover:bg-green-600 w-[80px] border hover:border-black  text-white rounded-md mx-auto ">
                            Details
                          </button>
                        </a>
                      </Box>
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

export default AvaliableMeal;
