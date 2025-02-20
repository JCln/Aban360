import axios from "axios";
// Create an Axios instance
export const getToken = () =>
  localStorage.getItem("authToken") ? localStorage.getItem("authToken") : null;
export const getAuthorizationHeader = () => `Bearer ${getToken()}`;
const apiClient = axios.create({
  baseURL:
    process.env.REACT_APP_NODE_ENV !== "production"
      ? process.env.REACT_APP_LOCAL_URL
      : process.env.REACT_APP_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Authorization: getAuthorizationHeader(),

  },
});
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default apiClient;
