import axios from "axios";
export async function uploadImage(userId, imagefile, token) {
  let formData = new FormData();
  formData.append("file", imagefile);
  return axios.post(`/api/v1/users/${userId}/upload-profile-image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
}

export async function getUsers(token) {
  return axios.get("/api/v1/users/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function uploadMealImage(mealId, imagefile, token) {
  let formData = new FormData();
  formData.append("file", imagefile);
  return axios.post(`/api/v1/partners/meals/${mealId}/upload-meal-image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
}


