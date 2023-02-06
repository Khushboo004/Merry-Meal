import axios from "axios";

export const getAllMeals = () => {
  return axios.get("/api/v1/partners/meals");
};

export const getMealSingleDetails = (mealId) => {
  return axios
    .get("/api/v1/partners/meals/" + mealId)
    .then((reponse) => reponse.data);
};

export const addMealDetails = (MealData, token) => {
  return axios.post(`/api/v1/partners/meals`, MealData, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export function deleteMeals(mealId, token) {
  return axios.delete(`/api/v1/partners/meals/${mealId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export const updateMeals = (MealData, token) => {
  return axios.put(`/api/v1/partners/meals`, MealData, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const loadAllMeals = (pageNumber, pageSize) => {
  return axios
    .get(
      `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
    )
    .then((response) => response.data);
};
