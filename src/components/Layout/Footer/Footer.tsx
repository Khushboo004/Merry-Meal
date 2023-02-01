import { Card, Container, Grid } from "@mui/material";
import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import Gmail from "../../../assets/Logo/gmail.png";
import Phone from "../../../assets/Logo/phone.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-900 pb-5 lg:p-14 m-0 text-white">
        <Container maxWidth="lg" className="pb-5">
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <div className="text-center ">
                <h1 className="text-4xl font-bold font-serif text-green-600">
                  Merry Meal
                </h1>
                <p className="font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  distinctio?
                </p>{" "}
              </div>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={12}>
              <div className="sm:text-left text-center">
                <h1 className=" underline-offset-4 text-xl underline uppercase font-bold mb-2">
                  Navigation
                </h1>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="font-thin border-gray-600 hover:border-b dark:hover:font-bold dark:hover:border-gray-400 dark:hover:text-red-800"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-thin border-gray-600 hover:border-b dark:hover:font-bold dark:hover:border-gray-400 dark:hover:text-red-800"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-thin border-gray-600 hover:border-b dark:hover:font-bold dark:hover:border-gray-400 dark:hover:text-red-800"
                    >
                      Join
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item lg={2} md={2} sm={4} xs={12}>
              <div className="sm:text-left text-center">
                <h1 className="underline-offset-4 text-xl underline uppercase mb-2 font-bold">
                  Company
                </h1>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="font-thin border-gray-600 hover:border-b dark:hover:font-bold dark:hover:border-gray-400 dark:hover:text-red-800"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-thin border-gray-600 hover:border-b dark:hover:font-bold dark:hover:border-gray-400 dark:hover:text-red-800"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-thin border-gray-600 hover:border-b dark:hover:font-bold dark:hover:border-gray-400 dark:hover:text-red-800"
                    >
                      Partnership
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-thin border-gray-600 hover:border-b dark:hover:font-bold dark:hover:border-gray-400 dark:hover:text-red-800"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={12}>
              <div className="sm:text-left text-center">
                <h1 className="underline-offset-4 text-xl underline uppercase mb-2 font-bold">
                  Social
                </h1>
                <div className="sm:text-left sm:ml-0 ml-36">
                  <ul className="flex  mb-3">
                    <li className="mr-4 inline-block bg-white rounded-md text-blue-700 text-4xl">
                      <a href="https://www.facebook.com/">
                        <FaFacebookSquare />{" "}
                      </a>
                    </li>
                    <li className="mr-4 inline-block bg-white rounded-xl text-blue-700 text-4xl">
                      <a href="https://www.linkedin.com/ px-1">
                        <BsLinkedin />{" "}
                      </a>
                    </li>
                    <li className="mr-4 inline-block rounded-xl text-blue-500 text-4xl">
                      <a href="https://www.twitter.com/ px-1">
                        <BsTwitter />{" "}
                      </a>
                    </li>
                  </ul>
                  <ul className="">
                    <li className=" flex ">
                      {" "}
                      <img
                        className="w-[30px] h-8 mr-2"
                        src={Gmail}
                        alt="/"
                      />{" "}
                      merrymeal@gmail.com
                    </li>
                    <li className=" flex ">
                      {" "}
                      <img
                        className="w-[30px] h-8 mr-2"
                        src={Phone}
                        alt="/"
                      />{" "}
                      +8801***********
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Grid container>
        <Grid item  xs={12} className="bg-slate-800 ">
          <div className="p-3 text-center ">
            <span className="text-gray-300 text-1xl " >© 2023 MERRY MEAL, Inc</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
