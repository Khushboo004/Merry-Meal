import axios from "axios";

const getAllMeals = () => {
  return axios.post("/api/v1/partners/meals");
};


export const addMealDetails=(MealData ,userId, token) =>{
  return axios.post(`/api/v1/partners/${userId}/meals`, MealData, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}