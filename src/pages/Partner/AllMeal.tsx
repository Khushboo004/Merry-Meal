import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteMeals, getAllMeals } from "../../services/MealService";
import { getUsers } from "../../services/ProfileService";
import filteringMeal from "../../Utils/filteringMeal";
type Props = {
  role: String;
};
const AllMeal = (props: Props) => {
  const { role } = props;
  const [allMeals, setAllMeals] = useState<any>();
  const [users, setUsers] = useState<null>();
  const [meals, setMeals] = useState<any>();
  useEffect(() => {
    getAllMeals()
      .then((res) => {
        setAllMeals(res.data);
        setMeals(res.data);
      })
      .catch((error) => {});
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUsers(token)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filterMeal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setMeals, allMeals);
  };

  const token = localStorage.getItem("token");
  // function to delete meal
  function deleteMeal(meal: any) {
    if(window.confirm('Are you sure')){
      deleteMeals(meal.mealId, token)
      .then((data) => {
        console.log(data);
        toast.success("Meal Details is delete");
        let newCarContent = meals.filter((m: any) => m.mealId != meal.mealId);
        setMeals([...newCarContent]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in deleting post");
      });
    }
  }

  return (
    <div className="sm:m-4 ">
      <div className="">
        <h3 className="pt-2 text-2xl font-bold text-center underline ">
          Meals
        </h3>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box pt={6}>
                <FormControl className="w-[200px] ">
                  <InputLabel
                    className="text-xl"
                    variant="standard"
                    htmlFor="uncontrolled-native"
                  >
                    Meals Type
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"all"}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                    onChange={(e) => filterMeal(e)}
                  >
                    <option value={"all"}>All</option>
                    <option value={"Fruit"}>Fruit</option>
                    <option value={"Vegetable"}>Vegetable</option>
                    <option value={"Drinks"}>Drinks</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box p={1}>
                <Grid container spacing={1}>
                  {meals != undefined
                    ? meals.map((meal: any, index: any) => (
                        <Grid item lg={2} md={4} sm={6} xs={6}>
                          <Card elevation={10}>
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                              pt={1}
                            >
                              <CardMedia
                                sx={{ width: "90%" }}
                                component="img"
                                alt="green iguana"
                                height="90"
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
                            <CardActions>
                              {role === "" ? (
                                <Link to={"/meal-details/" + meal.mealId}>
                                  <button className=" bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto ">
                                    Details
                                  </button>
                                </Link>
                              ) : (
                                <></>
                              )}


                              {role === "PARTNER" ? (
                                <>
                                  <Link to={"/partner/meal-details/" + meal.mealId}>
                                    <button className=" bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto ">
                                      Details
                                    </button>
                                  </Link>
                                  <Link to={"/partner/update-meal/" + meal.mealId}>
                                  <button className=" bg-gray-700 md:py-2 py-1 mr-2 hover:bg-gray-800 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto ">
                                    Update
                                  </button>
                                  </Link>

                                  <button
                                    onClick={() => deleteMeal(meal)}
                                    className=" bg-red-700 md:py-2 py-1 hover:bg-red-800 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto "
                                  >
                                    <DeleteIcon />
                                  </button>
                                </>
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
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default AllMeal;