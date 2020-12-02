import axios from "axios";

const api = axios.create({
  baseURL: "https://communicart-backend.herokuapp.com/",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export default api;
