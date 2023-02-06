import React, { useEffect, useState } from "react";
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
import { getAllMeals } from "../../../services/MealService";
import { Link } from "react-router-dom";
type Props = {
  role: String;
};
const AvailableFruit = (props: Props) => {
  const { role } = props;
  const [meals, setMeals] = useState<any>();
  
  useEffect(() => {
      getAllMeals()
        .then((res) => {
          let safeFood = res.data.filter((meal: any) => meal.category === "Fruit");
          setMeals(safeFood);
          return;
        })
        .catch((error) => {});
      return;
    
  }, []);
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
              {meals != undefined
                    ? meals.map((meal: any, index: any) => (

                <Grid item lg={3} md={4} sm={4} xs={6}>
                  <Card elevation={10} className="shadow-xl">
                  <Box
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                
                              }}
                              pt={1}
                            >
                              <CardMedia
                               
                                component="img"
                                alt="Not Uploaded"
                                
                                style={{
                                 
                                  backgroundSize:"cover",height:"200px",width: "90%" 
                                }}
                                image={
                                  "/api/v1/partners/meals/image/" + meal.image
                                }
                              />
                            </Box>
                            <CardContent>
                              <Typography gutterBottom>
                                <div className="md:text-xl">
                                  <span className="font-bold">Category</span>:{" "}
                                  {meal.category}
                                </div>
                              </Typography>
                              <Typography
                                className="text-xl"
                                color="text.secondary"
                              >
                                <h2>{meal.meal_name}</h2>
                                <h3> {meal.status}</h3>
                              </Typography>
                            </CardContent>
                            <CardActions   style={{
                                display: "flex",
                                justifyContent: "center",
                                
                              }}>
                            {role === "" ? (
                                <Box >
                                  <Link to={"/meal-details/" + meal.mealId} >
                                  <button className=" bg-green-700 md:py-2 py-1  hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto ">
                                    Details
                                  </button>
                                </Link>
                                </Box>
                              ) : (
                                <></>
                              )}

                              {role === "MEMBER" ? (
                                <Link
                                  to={"/member/meal-details/" + meal.mealId}
                                >
                                  <button className=" bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto ">
                                    Details
                                  </button>
                                </Link>
                              ) : (
                                <></>
                              )}
                    </CardActions>
                  </Card>
                </Grid>
                  ))
                  : ""}


                
              </Grid>
            </Box>
          </div>
        </Container>
      </div>

      {/* </Container> */}
    </div>
  );
};

export default AvailableFruit;
