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
  return axios.post(
    `/api/v1/partners/meals/${mealId}/upload-meal-image`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    }
  );
}

export async function editProfile(token, userId, formData, birth) {
  return axios.put(
    "/api/v1/users/update/" + userId,
    { ...formData, birth: birth },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

export async function deleUser(token, userId) {
  return axios.delete(`/api/v1/users/` + userId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getProfile(token, userId) {
  return axios.get("/api/v1/users/" + userId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getPersonalProfile(token) {
  console.log(token+"    hdsdjsidhcvdccis")
  return axios.get("/api/v1/users/profile", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
