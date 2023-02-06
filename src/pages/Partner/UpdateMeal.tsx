import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import {
  addMealDetails,
  getMealSingleDetails,
  updateMeals,
} from "../../services/MealService";
import { uploadImage, uploadMealImage } from "../../services/ProfileService";
import { useParams } from "react-router-dom";

const UpdateMeal = () => {
  const { mealId } = useParams();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(undefined);
  const [imageFile, setImageFile] = useState();
  const [meal, setMeal] = useState({
    meal_name: "",
    status: "",
    category: "",
    meal_desc: "",
  });

  useEffect(() => {
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

  const handleChange = (event: any, fieldName: any) => {
    console.log(fieldName + " " + event.target.value);
    setMeal({
      ...meal,
      [fieldName]: event.target.value,
    });
  };

  const updateMealDetails = (event: any) => {
    event.preventDefault();
    // console.log(car)
    updateMeals({ ...meal }, token)
      .then((res) => {
        if (imageFile) {
          uploadMealImage(mealId, imageFile, token)
            .then((data) => {
              toast.success("Image uploaded");
            })
            .catch((error) => {
              toast.error("error in uploading image");
              console.log(error);
            });
        }
        console.log(res);
        toast.success("Meal details updated");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in upading meal details");
      });
  };
  // handling file change image
  const handleFileChage = (event: any) => {
    console.log(event.target.files[0]);
    setImageFile(event.target.files[0]);
  };

  return (
    <div>
      <Container maxWidth={"lg"}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Box textAlign="center">
                <div className="pb-5 inline-block justify-between items-center shadow border-2 mt-10 sm:w-[50%]">
                  <div className=" h-12  shadow-green-700 bg-green-800 text-white shadow">
                    <Typography
                      variant="h5"
                      className="text-center p-2 font-bold font-serif uppercase"
                    >
                      Edit Meal Form
                    </Typography>
                  </div>
                  <form onSubmit={updateMealDetails}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm m-4">
                      <div className="">
                        <input
                          id="meal_name"
                          name="meal_name"
                          type="text"
                          value={meal.meal_name}
                          onChange={(event) => handleChange(event, "meal_name")}
                          className="r w-full  appearance-none hover:bg-   rounded-none bg-white outline-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10"
                          placeholder="Meal name"
                        />
                      </div>

                      <div className="pt-2">
                        <select
                          value={meal.status}
                          onChange={(event) => handleChange(event, "status")}
                          name="status"
                          defaultValue={0}
                          className='relative block w-full appearance-none rounded-none  bg-white border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'
                        >
                          <option disabled value={0}>
                            -- Give Status --
                          </option>
                          <option
                            value={"SAFE"}
                            className="text-green-700 font-bold hover:text-green-800"
                          >
                            SAFE
                          </option>
                          <option
                            value={"UNSAFE"}
                            className="text-red-700 font-bold hover:text-red-800"
                          >
                            UNSAFE
                          </option>
                          <option
                            value={"PENDING"}
                            className="text-blue-700 font-bold hover:text-blue-800"
                          >
                            PENDING
                          </option>
                        </select>
                      </div>
                      <div className="pt-2">
                        <select
                          value={meal.category}
                          onChange={(event) => handleChange(event, "category")}
                          name="category"
                          defaultValue={0}
                          className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'
                        >
                          <option disabled value={0}>
                            -- Select Meal Catagory --
                          </option>
                          <option>Fruit</option>
                          <option>Vegetable</option>
                          <option>Drinks</option>
                        </select>
                      </div>

                      <div className="pt-2">
                        <div className="mt-1 card bg-white shadow justify-center">
                          <textarea
                            id="meal_desc"
                            name="meal_desc"
                            className="border relative block w-full appearance-none hover:bg- rounded-none bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm "
                            placeholder="Meal Description"
                            value={meal.meal_desc}
                            onChange={(event) =>
                              handleChange(event, "meal_desc")
                            }
                          />
                        </div>
                      </div>
                      <div className="my-3 text-left">
                        <label htmlFor="image" className="fw-bold">
                          Select Image
                        </label>
                        <div>
                          <input
                            id="image"
                            type="file"
                            onChange={handleFileChage}
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          className="bg-blue-700 p-2 my-2 rounded-md hover:bg-blue-600 text-white font-bold"
                          onClick={(e) => updateMealDetails(e)}
                        >
                          Edit Meal
                        </button>
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
  );
};

export default UpdateMeal;