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

export const changeDeliStatus = (deliveryId, token, status) => {
  return axios.put("/api/v1/users/meals/" + deliveryId, null, {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      status: status,
    },
  });
};

export const getUserAllDeliveries = (token) => {
  return axios.get("/api/v1/users", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const riderAcceptOrder = (token, deliveryId) => {
  return axios.post(`/api/v1/users/meals/confirm-orders/${deliveryId}`, null, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getRiderDeliveries = (token) => {
  return axios.get(`/api/v1/users/meals/confirm-orders`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getAllDeliveries = (token) => {
  return axios.get("/api/v1/partners/orders", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getSingleDeli = (token, deliveryId) => {
  return axios.get(`/api/v1/partners/orders/${deliveryId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteDeli = (token, deliveryId) => {
  return axios.delete("/api/v1/partners/orders/" + deliveryId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
