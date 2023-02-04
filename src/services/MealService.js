import axios from "axios";

export const getAllMeals = () => {
  return axios.get("/api/v1/partners/meals");
};

export const addMealDetails = (MealData, token) => {
  return axios.post(`/api/v1/partners/meals`, MealData, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
