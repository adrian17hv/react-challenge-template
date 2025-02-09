import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://staging.homevision.co/api_project/houses",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;