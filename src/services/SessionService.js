import axios from "axios";

export const addNewSession = (sessionTime, token) => {
    return axios.post(`/api/v1/caregivers/caregivepost`, sessionTime, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  export const getAllSession = (token) => {
    console.log(token+"hdsdjsidhis")
    return axios.get("/api/v1/caregivers/sessions",{
      
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };