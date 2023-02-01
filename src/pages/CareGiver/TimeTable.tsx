import React from "react";
import {
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import Time from "../../assets/time.png";
export default function TimeTable() {
  return (
    <div className="pt-4  ml-3">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={3} md={4} >
          <div className="shadow-lg border m-3 mt-0  md:mt-16">
            <div className="flex min-h-full items-center justify-center py-12 px-0 sm:px-6 lg:px-4">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Add Your Caregive Time
                  </h2>
                </div>

                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" value="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <label htmlFor="date" className="sr-only">
                        Give Date
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="text"
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Date"
                      />
                    </div>
                    <div className="pt-4">
                      <label htmlFor="session" className="sr-only">
                        Session Time
                      </label>
                      <input
                        id="session"
                        name="session"
                        type="text"
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Session"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="sm:pl-20 pl-10">
                      <button className=" bg-sky-600 mt-2 py-2 font-bold  hover:bg-sky-700  700   w-10/12   text-white rounded-md  ">
                        Set Time
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Grid>

















        
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <h1 className="text-center text-xl font-bold my-2 p-2 uppercase font-serif underline underline-offset-4">My Time Table</h1>
            <Grid container spacing={3}>
              <Grid item lg={2.5} md={4} sm={6} xs={6}>
                <Card elevation={10}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      className="text-center"
                      image={Time}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      className="sm:text-[15px] text-[14px]"
                      color="text.dark"
                    >
                      <h1>
                        <span className="font-bold">Time: </span>11am - 12pm
                      </h1>
                      <h1>
                        <span className="font-bold">Session: </span>
                      </h1>
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      textAlign={"center"}
                      display={"block"}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        className="mr-5 text-[15px] font-bold"
                        color="info"
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item lg={2.5} md={4} sm={6} xs={6}>
                <Card elevation={10}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      className="text-center"
                      image={Time}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      className="sm:text-[15px] text-[14px]"
                      color="text.dark"
                    >
                     <h1>
                        <span className="font-bold">Time: </span>11am - 12pm
                      </h1>
                      <h1>
                        <span className="font-bold">Session: </span>
                      </h1>
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      textAlign={"center"}
                      display={"block"}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        className="mr-5 text-[15px] font-bold"
                        color="info"
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item lg={2.5} md={4} sm={6} xs={6}>
                <Card elevation={10}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      className="text-center"
                      image={Time}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      className="sm:text-[15px] text-[14px]"
                      color="text.dark"
                    >
                     <h1>
                        <span className="font-bold">Time: </span>11am - 12pm
                      </h1>
                      <h1>
                        <span className="font-bold">Session: </span>
                      </h1>
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      textAlign={"center"}
                      display={"block"}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        className="mr-5 text-[15px] font-bold"
                        color="info"
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={2.5} md={4} sm={6} xs={6}>
                <Card elevation={10}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      className="text-center"
                      image={Time}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      className="sm:text-[15px] text-[14px]"
                      color="text.dark"
                    >
                      <h1>
                        <span className="font-bold">Time: </span>11am - 12pm
                      </h1>
                      <h1>
                        <span className="font-bold">Session: </span>
                      </h1>
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      textAlign={"center"}
                      display={"block"}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        className="mr-5 text-[15px] font-bold"
                        color="info"
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={2.5} md={4} sm={6} xs={6}>
                <Card elevation={10}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      className="text-center"
                      image={Time}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      className="sm:text-[15px] text-[14px]"
                      color="text.dark"
                    >
                      <h1>
                        <span className="font-bold">Time: </span>11am - 12pm
                      </h1>
                      <h1>
                        <span className="font-bold">Session: </span>
                      </h1>
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      textAlign={"center"}
                      display={"block"}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        className="mr-5 text-[15px] font-bold"
                        color="info"
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
                  <Grid item lg={2.5} md={4} sm={6} xs={6}>
                <Card elevation={10}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <CardMedia
                      sx={{ width: "90%" }}
                      component="img"
                      alt="green iguana"
                      height="90"
                      className="text-center"
                      image={Time}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      className="sm:text-[15px] text-[14px]"
                      color="text.dark"
                    >
                     <h1>
                        <span className="font-bold">Time: </span>11am - 12pm
                      </h1>
                      <h1>
                        <span className="font-bold">Session: </span>
                      </h1>
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      textAlign={"center"}
                      display={"block"}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        className="mr-5 text-[15px] font-bold"
                        color="info"
                        variant="contained"
                      >
                        Edit
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>




            </Grid>
         
        </Grid>
      </Grid>
    </div>
  );
}
