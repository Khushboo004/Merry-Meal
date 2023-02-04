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

export async function getOtherUserRoles(token, userid) {
  const response = axios.get("/api/v1/role/" + userid, {
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
  const response = axios.post(
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

export async function assignRoles(token, roles, userid) {
  const response = axios.post("/api/v1/role/" + userid, null, {
    params: {
      assignRoles: roles,
    },
  });
  return response;
}
