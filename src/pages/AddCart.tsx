import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import { Box, Container, Grid, Checkbox, CardActions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import Pic from "../assets/public/home.jpeg";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import FormGroup from "@mui/material/FormGroup";

import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";

const AddCart = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  return (
    <div className="bg-gray-50">
     
      <div className=" pt-2 h-screen">
        <Container maxWidth="xl">
          <Grid container mt={2}>
            <Grid item xs={12}>
              <Box textAlign="center">
                <div className="w-72 font-medium mb-2 ">
                  <div
                    onClick={() => setOpen(!open)}
                    className={`bg-white w-full p-2 flex items-center justify-between rounded border ${
                      !selected && "text-gray-700"
                    }`}
                  >
                    {selected
                      ? selected?.length > 25
                        ? selected?.substring(0, 25) + "..."
                        : selected
                      : "Select Meal"}
                    <BiChevronDown
                      size={20}
                      className={`${open && "rotate-180"}`}
                    />
                  </div>
                  <ul
                    className={`bg-white mt-2 m- overflow-y-auto border   ${
                      open ? "max-h-60" : "max-h-0"
                    } `}
                  >
                    <div className="flex items-center px-2 sticky top-0 border-b-2 bg-white">
                      <AiOutlineSearch size={18} className="text-gray-700" />
                      <input
                        type="text"
                        value={inputValue}
                        placeholder="Enter Meal"
                        className="placeholder:text-gray-700 p-2 outline-none"
                      />
                    </div>

                    <li className="p-1 border-b mx-4 border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                      Fruit
                    </li>
                    <li className="p-1 border-b mx-4 border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                      Vegetable
                    </li>
                    <li className="p-1  mx-4 border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                      Drinks
                    </li>
                  </ul>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} className="my-2 bg-white p-2">
              <Box>
                <Grid container spacing={4}>
                  <Grid item lg={6} xs={6}>
                    <Box textAlign="left">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Select"
                        />
                      </FormGroup>
                    </Box>
                  </Grid>
                  <Grid item lg={6} xs={6} className="inline-block text-right ">
                    <Box bgcolor="white" className="inline-block  ">
                      <button className="hover:text-red-700 text-red-600 outline-none">
                        <DeleteIcon />
                        Delete All
                      </button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* All Cart */}

            <Grid container>
              <Grid xs={12}>
                <Box className="shadow-md" textAlign="center">
                  <Grid container mt={0} spacing={2}>
                    <Grid item lg={6} md={12} xs={12}>
                      <Box textAlign="center">
                        <Grid item xs={12}>
                          <Box bgcolor="white" className=" text-right ">
                            <button className="hover:text-red-700 outline-none">
                              {" "}
                              <DeleteIcon className="border mr-3 text-red-600" />
                            </button>
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box textAlign="center">
                            <Grid container>
                              <Grid
                                item
                                lg={0.6}
                                md={0.8}
                                sm={0.8}
                                xs={0.8}
                                className="border-r-2"
                              >
                                <Box
                                  bgcolor="white"
                                  textAlign="center"
                                  sx={{ height: 210 }}
                                >
                                  <FormGroup className="sm:pl-2 pt-20   ">
                                    <FormControlLabel
                                      control={<Checkbox />}
                                      label=""
                                    />
                                  </FormGroup>
                                </Box>
                              </Grid>

                              <Grid item lg={9.4} md={9.2} sm={9.3} xs={8.7}>
                                <Box textAlign="center">
                                  <Card
                                    elevation={0}
                                    className="rounded-none"
                                    sx={{ display: "flex" }}
                                  >
                                    <CardMedia
                                      component="img"
                                      sx={{ width: 200, height: 200 }}
                                      className="md:mr-3  md:my-1 md:mx-3"
                                      image={Pic}
                                      alt=" "
                                    />
                                    <Box className="text-left md:mx-4 sm:mx-2 md:px-7">
                                      <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography>
                                          <h1 className="md:text-xl font-bold sm:text-1xl text-[15px]">
                                            Category: Fruit
                                          </h1>
                                        </Typography>
                                        <Typography>
                                          <h2 className="md:text-[16px] sm:text-[14px] text-[12px]">
                                            Pomegranate
                                          </h2>
                                          <h3 className="md:text-[16px] sm:text-[14px] text-[12px]">
                                            {" "}
                                            120 calories
                                          </h3>
                                        </Typography>
                                      </CardContent>
                                      <CardActions>
                                        <Box className="text-center">
                                          <a href="/meal-details">
                                            <button className=" bg-green-600 py-2  my-1 font-bold  sm:text-[15px] text-[12px] mr-2 hover:bg-green-700  w-[56px]  text-white rounded-md mx-auto ">
                                              Details
                                            </button>
                                          </a>
                                          <a href="/meal-details">
                                            <button className=" bg-orange-600 py-2 font-bold sm:text-[14px]  text-[12px] hover:bg-orange-700  sm:w-[85px] w-[80px]   text-white rounded-md mx-auto ">
                                              Order Now
                                            </button>
                                          </a>
                                        </Box>
                                      </CardActions>
                                    </Box>
                                  </Card>
                                </Box>
                              </Grid>
                              <Grid item lg={2} md={2} sm={1.9} xs={2.5}>
                                <Box bgcolor="white" sx={{ height: 210 }}>
                                  <Grid container>
                                    <Grid item xs={12}>
                                      <Box bgcolor="white">
                                        <Box
                                          className="pt-12 ml-1"
                                          sx={{ display: "flex" }}
                                        >
                                          <IconButton>
                                            <AddBoxIcon />
                                          </IconButton>
                                          <div className="text-[14px]  pt-2">
                                            1
                                          </div>
                                          <IconButton>
                                            <IndeterminateCheckBoxIcon />
                                          </IconButton>
                                        </Box>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Box>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12}>
                      <Box className="shadow-md" textAlign="center">
                        <Grid item xs={12}>
                          <Box bgcolor="white" className=" text-right ">
                            <button className="hover:text-red-700 outline-none">
                              <DeleteIcon className="border text-red-600 mr-3" />
                            </button>
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box textAlign="center">
                            <Grid container>
                              <Grid
                                item
                                lg={0.6}
                                md={0.8}
                                sm={0.8}
                                xs={0.8}
                                className="border-r-2"
                              >
                                <Box
                                  bgcolor="white"
                                  textAlign="center"
                                  sx={{ height: 210 }}
                                >
                                  <FormGroup className="sm:pl-2 pt-20   ">
                                    <FormControlLabel
                                      control={<Checkbox />}
                                      label=""
                                    />
                                  </FormGroup>
                                </Box>
                              </Grid>

                              <Grid item lg={9.4} md={9.2} sm={9} xs={8.7}>
                                <Box textAlign="center">
                                  <Card
                                    elevation={0}
                                    className="rounded-none"
                                    sx={{ display: "flex" }}
                                  >
                                    <CardMedia
                                      component="img"
                                      sx={{ width: 200, height: 200 }}
                                      className="md:mr-3  md:my-1 md:mx-3"
                                      image={Pic}
                                      alt=" "
                                    />
                                    <Box className="text-left md:mx-4 sm:mx-2 md:px-7">
                                      <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography>
                                          <h1 className="md:text-xl font-bold sm:text-1xl text-[15px]">
                                            Category: Fruit
                                          </h1>
                                        </Typography>
                                        <Typography>
                                          <h2 className="md:text-[16px] sm:text-[14px] text-[12px]">
                                            Pomegranate
                                          </h2>
                                          <h3 className="md:text-[16px] sm:text-[14px] text-[12px]">
                                            {" "}
                                            120 calories
                                          </h3>
                                        </Typography>
                                      </CardContent>
                                      <CardActions>
                                        <Box className="text-center">
                                          <a href="/meal-details">
                                            <button className=" bg-green-600 py-2  my-1 font-bold  sm:text-[15px] text-[12px] mr-2 hover:bg-green-700  w-[56px]  text-white rounded-md mx-auto ">
                                              Details
                                            </button>
                                          </a>
                                          <a href="/meal-details">
                                            <button className=" bg-orange-600 py-2 font-bold sm:text-[14px]  text-[12px] hover:bg-orange-700  sm:w-[85px] w-[80px]   text-white rounded-md mx-auto ">
                                              Order Now
                                            </button>
                                          </a>
                                        </Box>
                                      </CardActions>
                                    </Box>
                                  </Card>
                                </Box>
                              </Grid>
                              <Grid item lg={2} md={2} sm={2} xs={2.5}>
                                <Box bgcolor="white" sx={{ height: 210 }}>
                                  <Grid container>
                                    <Grid item xs={12}>
                                      <Box bgcolor="white">
                                        <Box
                                          className="pt-12 ml-1"
                                          sx={{ display: "flex" }}
                                        >
                                          <IconButton>
                                            <AddBoxIcon />
                                          </IconButton>
                                          <div className="text-[14px]  pt-2">
                                            1
                                          </div>
                                          <IconButton>
                                            <IndeterminateCheckBoxIcon />
                                          </IconButton>
                                        </Box>
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AddCart;
