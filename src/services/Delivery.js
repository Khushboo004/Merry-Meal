import axios from "axios";

export const orderMeal = (mealId, token, delivery_address) => {
  return axios.post(
    `/api/v1/users/meals/${mealId}`,
    {
      delivery_address: delivery_address,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
