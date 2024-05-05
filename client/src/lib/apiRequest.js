import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8080/api/question",
  withCredentials: false,
});

export default apiRequest;
