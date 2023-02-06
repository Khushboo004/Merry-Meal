import axios from "axios";

export const addNewSession = (sessionTime, token) => {
console.log(token+"hdsdjsidhisssdu===================")
    return axios.post(`/api/v1/caregivers/caregivepost`, sessionTime, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  export const getAllSession = (token) => {
    return axios.get("/api/v1/caregivers/sessions",{
      
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  
  export const updateSessions = (SessionData, token) => {
    
    return axios.put(`/api/v1/caregivers/caregivepost`, SessionData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  export const getSingleSessionDetails = (sessionId,token) => {
  
    return axios
      .get("/api/v1/caregivers/caregivepost/" + sessionId, {
        headers: {
          Authorization: "Bearer " + token,
        },})
      .then((reponse) => reponse.data);
  };

  
  export const requestForCaregiver = (sessionId,token) => {
  console.log(token+"+++++++++++++++++++++++++");
    return axios
      .put(`/api/v1/caregivers/requestCare/${sessionId}`,null, {
        headers: {
          Authorization: "Bearer " + token,
        },})
      
  };