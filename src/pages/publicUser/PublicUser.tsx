import React from "react";
import Pic from "../../assets/public/home.jpeg";
import Food from "../../assets/public/food.jpeg";
import Navbar from "../../components/Layout/Navbar/Navbar";
import AvaliableMeal from "../../components/Public/Home/AvaliableMeal";
import Funds from "../../components/Public/Home/Funds";
import Footer from "../../components/Layout/Footer/Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";
const PublicUser = () => {
  return (
    <div>


      {/* Hero Banner */}
      <div className="w-full m-0 py-6  ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 justify-between items-center">
          <img className="w-[400px] mx-auto my-4" src={Pic} alt="/" />
          <div className="m-2 p-2 text-center">
            <p className="text-[#00df9a] font-bold uppercase text-xl">
              merry meal
            </p>
            <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold">
              Merry Meal is friend of humunity, humunity is friend of
              civilizations{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              inventore recusandae excepturi itaque cumque similique blanditiis,
              qui at voluptatem vel voluptas, voluptate aliquam quidem, commodi
              eveniet dicta aspernatur nulla nam!
            </p>
            <div className="">
              <button className=" bg-[#00df9a] hover:bg-[#359476] hover:text-white w-[200px]  text-xl text-black rounded-md my-6 mx-auto py-3">
                {" "}
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <AvaliableMeal />
      <div className="bg-[#5e5e15] py-10 mb-0 text-white  ">
        <div className="max-w-[1240px] mx-auto grid p-3">
          
    <Grid container mt={2}  >
      <Grid item sm={12} xs={12}>
        <Box  textAlign="center">
        <div className="text-white">
            <h1 className="text-2xl uppercase font-serif underline underline-offset-4 text-center font-bold">
            Order food with Merry Meal 
            </h1>
            <p className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, facere! At explicabo quasi quae eligendi!</p>
           <button className="bg-blue-800 p-2 rounded-lg">Get Started</button>
          </div>
        </Box>
      </Grid>
     
     
    </Grid>
     
         
        </div>
      </div>
      <Funds />
      <div className="bg-green-800  text-white  ">
        <div className="max-w-[1240px] mx-auto grid p-3">
          
    <Grid container mt={2} spacing={2} >
      <Grid item md={7} sm={12} xs={12}>
        <Box  >
        <div className="text-gray-200">
            <h1 className="text-2xl uppercase font-serif underline underline-offset-4 text-center font-bold">
            Order food with Merry Meal 
            </h1>
            <div className="p-1 x-2">
              
              <ArrowForwardIcon className="bg-black m-1 rounded-2xl text-[30px]" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit?</span>
            </div>
            <div className="p-1 x-2">
              <ArrowForwardIcon className="bg-black m-1 rounded-2xl text-[30px]" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit?</span>
            </div>
            <div className="p-1 x-2">
              <ArrowForwardIcon className="bg-black m-1 rounded-2xl text-[30px]" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit?</span>
            </div>
            <div className="p-1 x-2">
              <ArrowForwardIcon className="bg-black m-1 rounded-2xl text-[30px]" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit?</span>
            </div>
            <div className="p-1 x-2">
              <ArrowForwardIcon className="bg-black m-1 rounded-2xl text-[30px]" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit?</span>
            </div>
            <div className="p-1 x-2">
              <ArrowForwardIcon className="bg-black m-1 rounded-2xl text-[30px]" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, impedit?</span>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid item  md={5} sm={12} xs={12}>
        <Box  textAlign="center">
           <div className="m-2 p-2 text-center">
            <img className="w-600px] mx-auto my-4" src={Food} alt="/" />
          </div></Box>
      </Grid>
     
    </Grid>
     
         
        </div>
      </div>

      
      
    </div>
  );
};

export default PublicUser;
