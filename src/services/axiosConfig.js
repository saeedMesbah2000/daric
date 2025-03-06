import axios from "axios";
import apiPath from "./apiPath";

const http = axios.create({
  baseURL: apiPath.basePath,
});

http.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
