import React from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";
import { Container,TableContainer,Table, TableHead, TableRow, TableCell } from "@mui/material";
import Pic from "../assets/public/home.jpeg";
import Footer from "../components/Layout/Footer/Footer";

const MealDetails = () => {
  return (
   
     
      <div >
        <div className="mb-0 l md:pb-48 pb-14">
        <h1 className="text-center font-bold text-xl py-2 underline uppercase font-serif underline-offset-4  bg-gray-50">Meal Details</h1>
       
       <Container maxWidth="xl">

         <Grid container mt={2} spacing={2} className="  justify-between items-center">
           <Grid item md={5} xs={12} >
             <Box className="shadow-sm" textAlign="center">
               <img
                 className=" sm:w-[70%] w-[50%] md:h-80 lg:h-96 text-center inline-block"
                 src={Pic}
                 alt="/"
               />
             </Box>
           </Grid>
           <Grid item md={7} xs={12} className="bg-gray-100  bg-opacity-5">
             <Box  textAlign="center">
               
<TableContainer >
<Table   >
         <TableHead>
           <TableRow>
             <TableCell className="font-bold text-[16px]">Name</TableCell>
             <TableCell component="th" scope="row" >Pomegranate</TableCell>
           </TableRow>
           <TableRow>
             <TableCell className="font-bold  text-[16px]">Category</TableCell>
             <TableCell component="th" scope="row">Fruit</TableCell>
           </TableRow>
           <TableRow>
             <TableCell className="font-bold  text-[16px]">Status</TableCell>
             <TableCell component="th" scope="row" className="text-green-600 font-bold">SAFE</TableCell>
           </TableRow>
           <TableRow>
             <TableCell className="font-bold  text-[16px]">Description</TableCell>
             <TableCell component="th" scope="row">Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions</TableCell>
           </TableRow>
           <TableRow>
             <TableCell colSpan={2} align="center" style={{borderBottom:'0px'}}>
               <div className="flex text-center" style={{ display:'flex', justifyContent:'center' }}>
               <button className="bg-orange-700 mr-2 p-3 rounded-lg font-bold text-white w-[150px] text-[16px] hover:bg-orange-800 ">Order Now</button> 
               <button className="bg-sky-700 mr-2 p-3 rounded-lg font-bold text-white w-[150px] text-[16px] hover:bg-sky-800">Add To Cart</button> 
               </div>
               
             </TableCell>
           </TableRow>
         </TableHead>
       </Table>
     </TableContainer>
             </Box>
           </Grid>
         </Grid>
       </Container>
        </div>
      </div>
     
   
  );
};

export default MealDetails;
