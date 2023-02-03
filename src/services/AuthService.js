import axios from "axios";

export async function login(emailAddress, password) {
  const response = axios.post("/auth/login", {
    email: emailAddress,
    password: password,
  });
  return response;
}

export async function getRoles(token) {
  const response = axios.get("/api/v1/role/userRoles", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
}

export async function register(emailAddress, password) {
  const response = axios.post("/auth/signUp", {
    email: emailAddress,
    password: password,
  });
  return response;
}

export async function retrieveProfileInformation(token) {
  const response = axios.get("/profile/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
}


export async function createProfile(token, formData, birth) {
  const response = axios.put(
    "/api/v1/users/register",
    { ...formData, birth: birth },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response;
}

export const retrieveProfileInfo=(token) =>{
  const response = axios.get("/profile/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
}

