import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteMeals, getMealSingleDetails } from "../services/MealService";
import { toast } from "react-toastify";
type Props = {
  role: String;
};
const MealDetails = (props: Props) => {
  const { role } = props;
  const { mealId } = useParams();
  const [meal, setMeal] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    // load post of postId
    getMealSingleDetails(mealId)
      .then((data) => {
        console.log(data);
        setMeal(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading post");
      });
  }, []);

  const token: any = localStorage.getItem("token");
  // function to delete meal
  function deleteMeal(meal: any) {
    if (window.confirm("Are you sure")) {
      deleteMeals(meal.mealId, token)
        .then((data) => {
          console.log(data);
          toast.success("Meal Details is delete");
          navigate("/partner/meals");
          let newCarContent = meal.filter((m: any) => m.mealId != meal.mealId);
          setMeal([...newCarContent]);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error in deleting post");
        });
    }
  }

  return (
    <div className="">
      <div className="mb-0 l md:pb-48 pb-14">
        <h1 className="text-center font-bold text-xl py-2 underline uppercase font-serif underline-offset-4  bg-gray-50">
          Meal Details
        </h1>

        <Container maxWidth="xl" className="shadow-sm">
          {meal && (
            <Grid
              container
              mt={2}
              spacing={2}
              className="  justify-between items-center"
            >
              <Grid item xs={12} className="inline-block text-right ">
                {" "}
                {role === "PARTNER" ? (
                  <>
                    <Link to={"/partner/update-meal/" + meal.mealId}>
                      <button className=" bg-gray-700 md:py-2 py-1 mr-3 hover:bg-gray-800 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto ">
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => deleteMeal(meal)}
                      className=" bg-red-700 md:py-2 py-1 hover:bg-red-800 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto "
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </Grid>
              <Grid item md={5} xs={12}>
                <Box className="shadow-sm" textAlign="center">
                  <img
                    className=" sm:w-[70%] w-[60%] md:h-80 lg:h-96 text-center inline-block"
                    src={"/api/v1/partners/meals/image/" + meal.image}
                    alt="/"
                  />
                </Box>
              </Grid>
              <Grid item md={7} xs={12} className="bg-gray-100  bg-opacity-5">
                <Box textAlign="center">
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className="font-bold text-[16px]">
                            Name
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {meal.meal_name}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold  text-[16px]">
                            Category
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {meal.category}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold  text-[16px]">
                            Status
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className="text-green-600 font-bold"
                          >
                            {meal.status}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold  text-[16px]">
                            Description
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {meal.meal_desc}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            colSpan={2}
                            align="center"
                            style={{ borderBottom: "0px" }}
                          >
                            <div
                              className="flex text-center"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              {token?.length > 0 && role === "MEMBER" ? (
                                <NavLink
                                  to={"/member/delivery-form/" + mealId}
                                >
                                  <button className="bg-orange-700 mr-2 p-3 rounded-lg font-bold text-white w-[150px] text-[16px] hover:bg-orange-800 ">
                                    Order Now
                                  </button>
                                </NavLink>
                              ) : (
                                <NavLink to="/register">
                                  <button className="bg-orange-700 mr-2 p-3 rounded-lg font-bold text-white w-[150px] text-[16px] hover:bg-orange-800 ">
                                    Register To Order
                                  </button>
                                </NavLink>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
            </Grid>
          )}
        </Container>
      </div>
    </div>
  );
};

export default MealDetails;
