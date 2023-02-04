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

export const deleMeal = (token, mealId) => {
  return axios.delete(`/api/v1/partners/meals/${mealId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
