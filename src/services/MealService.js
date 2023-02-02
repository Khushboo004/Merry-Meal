const getAllMeals = () => {
  const token = localStorage.getItem("token");
  return axios.post("/api/v1/partners/meals", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
