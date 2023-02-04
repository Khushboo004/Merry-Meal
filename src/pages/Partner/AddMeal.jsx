import React, { useEffect, useState } from 'react'
import {Box, Container, Grid, Typography} from "@mui/material"
import { toast } from 'react-toastify';
import { addMealDetails } from "../../services/MealService";
import { uploadImage } from "../../services/ProfileService";
import { retrieveProfileInfo } from "../../services/AuthService";



const AddMeal = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(undefined);
    const [imageFile, setImageFile] = useState();
    const [meal, setMeal] = useState({
      meal_name: "",
      status: "",
      category: "",
      meal_desc: "",
    });
    const fieldChanged = (event) => {
      setMeal({ ...meal, [event.target.name]: event.target.value });
    };
    useEffect(() => {
      // setUser(retrieveProfileInfo());
    }, []);

    const addMeal = (event) => {
      event.preventDefault();
      // console.log(post);
      if (meal.meal_name.trim() === "") {
        toast.error("Meal is Required");
        return;
      }
      if (meal.status.trim() === "") {
        toast.error("Meal Model is Required");
        return;
      }
      if (meal.category.trim() === "") {
        toast.error("Meal category is Required");
        return;
      }
      if (meal.meal_desc.trim() === "") {
        toast.error("Meal meal description is Required");
        return;
      }
  
      // submit the form on surver
      addMealDetails(meal, user.user_id,token)
        .then((res) => {
          uploadImage(res.data.user_id, imageFile, token)
            .then((data) => {
              toast.success("Image uploaded");
            })
            .catch((error) => {
              toast.error("error in uploading image");
              console.log(error);
            });
  
          toast.success("Meal Details Uploaded");
          console.log(meal);
          setMeal({
            meal_name: "",
            status: "",
            category: "",
            meal_desc: "",
        })
        })
        .catch((error) => {
          toast.error("Meal Details not  Uploaded due to some error !! ");
          console.log(error);
        });
    };
     // handling file change image
  const handleFileChage = (event) => {
    console.log(event.target.files[0]);
    setImageFile(event.target.files[0]);
  };


  return (
    <div>
      
  <Container maxWidth={'lg'}>
  <Grid container spacing={3}>
         <Grid item xs={12} >
          
        
         <Grid item  xs={12}  >
    
         <Box textAlign="center" >
         <div className="pb-5 inline-block justify-between items-center shadow border-2 mt-10 sm:w-[50%]">
 
     <div className=' h-12  shadow-green-700 bg-green-800 text-white shadow'>
         <Typography variant='h5' className='text-center p-2 font-bold font-serif uppercase'>
             Add Meal Form
         </Typography>
     </div>
     <form onSubmit={addMeal} >
       <input type="hidden" name="remember" value="true"/>
       <div className="-space-y-px rounded-md shadow-sm m-4">
         <div className=''>
           <label htmlFor="meal_name">Meal Name</label>
           <input id="meal_name" 
           name="meal_name" type="text" 
           onChange={fieldChanged}
           className="r w-full  appearance-none hover:bg-   rounded-none bg-white outline-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10" placeholder="Meal name"/>
         </div>


         
         <div className='pt-2'>
           <label htmlFor="status" className="sr-only">Status</label>
 
           <select  onChange={fieldChanged} name='status' defaultValue={0} className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'>
             <option disabled value={0}>--- Give Status --</option>
             <option color='green'>SAFE</option>
            <option color='red'>UNSAFE</option>
            <option color='blue'>PENDING</option>
           </select>
         </div>
         <div className='pt-2'>
           <label htmlFor="category" className="sr-only">Catagory</label>
 
           <select  onChange={fieldChanged} name='category' defaultValue={0} className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'>
             <option  disabled value={0}>-- Select Meal Catagory --</option>
            <option >Fruit</option>
            <option >Vegetable</option>
            <option >Drinks</option>
           </select>
         </div>


         <div className="mt-3">
                  <label htmlFor="image" className="fw-bold">
                    Select Image
                  </label>
                  <input id="image" type="file" onChange={handleFileChage} />
                </div>
                


         <div className='pt-2'>
         <textarea
id="meal_desc"
name="meal_desc"
onChange={fieldChanged}
// className='border relative block w-full appearance-none hover:bg- rounded-none bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm '
placeholder="meal_desc"

/>
 
       </div>
 
      
 
      
       <div>
        <button className='bg-blue-700 p-2 rounded-md hover:bg-blue-600 text-white font-bold'>Add Meal</button>
       </div>
       </div>
     </form>
   </div>
 
 </Box>
             
          
         </Grid>
         
         </Grid>
       </Grid>
       </Container>
 
         
    </div>
  )
}

export default AddMeal