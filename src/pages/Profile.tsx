import React from "react";
import { Grid } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import myImage from "../assets/caregiver.png";
export default function Profile() {
  return (
    <div className="">
      <div className="my-20">
        <Grid container spacing={2}>
          <Grid item xs={0} sm={2} md={2} lg={3.5}></Grid>
          <Grid item xs={12} sm={12} md={8} lg={5}>
            <div className=" w-full lg:max-w-full lg:flex  ">
              <div className=" p-4 flex  justify-between leading-normal w-full lg:w-">
                <div className="mb-4">
                  <Grid item xs={12}>
                    <Grid container spacing={1} className="text-xl ">
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          className="mt-3    lg:h-auto lg:w-52 w-32 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-left overflow-hidden order-last border-gray-700"
                          title="Mountain"
                        >
                          <div>
                            <img
                              src={myImage}
                              className=" text-center"
                              alt="example"
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          className="lg:h-auto  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-left overflow-hidden order-last border-gray-700"
                          title="Mountain"
                        >

                          {/* Member can edit his/her profile */}
                          <div className="">
                            <a href=" /edit-pro">
                            <button className="p-3 px-5 text-white font-bold m-2 hover:bg-sky-700 text-center text-xl bg-sky-800">
                              Edit
                            </button>
                            </a>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Grid
                          container
                          spacing={1}
                          className="text-xl shadow-md"
                        >
                          <Grid item xs={4} sm={5} md={5}>
                            <div className="p-1 font-bold">Name</div>
                          </Grid>
                          <Grid item xs={8} md={7} sm={7}>
                            <div className="p-1">: Rehnumaye Khushboo</div>
                          </Grid>

                          <Grid item xs={4} sm={5} md={5}>
                            <div className="p-1 font-bold">Email</div>
                          </Grid>
                          <Grid item xs={8} md={7} sm={7}>
                            <div className="p-1">: rakhushboo75@gmail.com</div>
                          </Grid>

                          <Grid item xs={4} sm={5} md={5}>
                            <div className="p-1 font-bold">Phone Number</div>
                          </Grid>
                          <Grid item xs={8} md={7} sm={7}>
                            <div className="p-1">: +8801858707175</div>
                          </Grid>

                          <Grid item xs={4} sm={5} md={5}>
                            <div className="p-1 font-bold">Birth-Date</div>
                          </Grid>
                          <Grid item xs={8} md={7} sm={7}>
                            <div className="p-1">: 25 Feb 0000</div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div className="p-4 text-xl">
                          <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-green-900-300 mb-4 text-center border-gray-700 font-bold">
                              About Me
                            </h3>
                            <p className="text-gray-700">
                              This is my cool new card Lorem ipsum dolor sit
                              amet consectetur adipisicing elit. Provident eum
                              illum dolores quibusdam commodi. Eum repudiandae,
                              natus expedita ex vero fugiat aut. Illum culpa
                              excepturi nobis. Aliquid officiis ab aperiam.
                            </p>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p> */}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={0} sm={3} md={2} lg={3.5}></Grid>
        </Grid>
      </div>
    </div>
  );
}
