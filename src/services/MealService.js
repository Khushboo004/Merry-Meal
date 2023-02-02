const getAllMeals = () => {
  return axios.post("/api/v1/partners/meals");
};
