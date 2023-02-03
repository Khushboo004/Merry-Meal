import axios from "axios";



export const getAllMeals = ()=>{
  return axios.post("/api/v1/partners/meals").then(response=>response.data)
}


export const addMealDetails=(MealData ,userId, token) =>{
  return axios.post(`/api/v1/partners/${userId}/meals`, MealData, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}