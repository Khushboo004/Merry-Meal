import axios from "axios";
export async function uploadImage(userId, imagefile, token) {
  let formData = new FormData();
  formData.append("file", imagefile);
  axios.post(`/api/v1/users/${userId}/upload-profile-image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
}
