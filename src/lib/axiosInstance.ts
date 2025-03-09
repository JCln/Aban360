import axios from "axios";
// Create an Axios instance
export const getToken = () =>
  localStorage.getItem("authToken") ? localStorage.getItem("authToken") : null;
export const getAuthorizationHeader = () => `Bearer ${getToken()}`;
const apiClient = axios.create({
  baseURL:
    (window as any).API_CONFIG?.baseURL || process.env.REACT_APP_LOCAL_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Authorization: getAuthorizationHeader(),
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          `${apiClient.defaults.baseURL}/login/refresh`,
          {
            refreshToken: localStorage.getItem("refreshToken"),
          }
        );
        const { accessToken } = response.data;
        localStorage.setItem("authToken", accessToken);
        apiClient.defaults.headers.Authorization = getAuthorizationHeader();
        originalRequest.headers.Authorization = getAuthorizationHeader();

        return apiClient(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, redirect to login
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
