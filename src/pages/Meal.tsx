import React, { useState } from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, NativeSelect, Typography } from '@mui/material'
import Pic from "../assets/public/home.jpeg"
import filteringMeal from '../Utils/filteringMeal';

const Meal = () => {
  const allMeals = [
    {
      image: 949943949349,
      status: "Safe",
      name: "Pomegranate",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Fruit",
      header:"Fruit"
    },
    {
      image: 949943949349,
      status: "Safe",
      name: "Orange",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Fruit",
      header:"Fruit"
    },
    {
      image: 949943949349,
      status: "Safe",
      name: "Carrot",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Vegetable",
      header:"Vegetable"
    },

    {
      image: 949943949349,
      status: "Safe",
      name: "Coca cola",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Drinks",
      header:"Drinks"
    },
    {
      image: 949943949349,
      status: "Safe",
      name: "Pomegranate",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Fruit",
      header:"Fruit"
    },
    {
      image: 949943949349,
      status: "Safe",
      name: "Orange",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Fruit",
      header:"Fruit"
    },
    {
      image: 949943949349,
      status: "Safe",
      name: "Carrot",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Vegetable",
      header:"Vegetable"
    },
    
    {
      image: 949943949349,
      status: "Safe",
      name: "Coca cola",
      desc: "Oranges are a type of low calorie highly nutritious citrus fruit. As part of a  healthful and varied diet oranges ontribute to   strong clear skin and  \rcan help lower  a person’s risk of many conditions",
      category: "Drinks",
      header:"Drinks"
    },
  ];

  const [meals, setMeals] = useState(allMeals);
  const filterMeal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setMeals, allMeals);
  };

  return (
    <div className='sm:m-4 '>
      

{/* <ul className="w-48 text-sm font-medium   border border-gray-200 rounded-lg0  shadow-sm " >
    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
</ul> */}
 
{/* <Container > */}
<div className=''>
<h3 className='pt-2 text-2xl font-bold text-center underline '>Meals</h3>
<Container  maxWidth='xl'>
  <Grid container   spacing={1}  >
       <Grid item xs={12}>
         <Box   pt={6} >
        
  <FormControl className='w-[200px] '>
          <InputLabel className='text-xl' variant="standard" htmlFor="uncontrolled-native">
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
       <Grid item  xs={12}>
        
         <Box  p={1} >
         <Grid container spacing={1}>
         {meals.map((meal, index) => ( 
       <Grid item lg={2} md={4} sm={6} xs={6}>
       
       
   
         <Card elevation={10} >
           <CardMedia
            sx={{ width: '90%' }}
             component="img"
             alt="green iguana"
             height="90"
             image={Pic}
           />
            <CardContent>
         
               <Typography gutterBottom >
               <div className='md:text-xl'><span className='font-bold'>Category</span>: {meal.category}</div>
             </Typography>
             <Typography className='text-xl'  color="text.secondary">
               <h2>{meal.name}</h2>
              <h3> {meal.status}</h3>
             </Typography> 
           
            
             
           </CardContent>
           <CardActions>
             <button className=' bg-green-700 md:py-2 py-1 hover:bg-green-600 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto '>Details</button>
             <button className=' bg-gray-700 md:py-2 py-1 hover:bg-gray-800 md:w-[80px] w-[60px] border hover:border-black  text-white rounded-md mx-auto '>Update</button>
           </CardActions>
         </Card>
     
     </Grid>
 
     ))}
   
     </Grid>
         </Box>
       </Grid>
       
     </Grid>
     </Container>
 </div>
{/* </Container> */}



    </div>
  )
}

export default Meal