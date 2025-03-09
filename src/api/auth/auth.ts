import apiClient from "../../lib/axiosInstance";

export const signinUser = async (params: any) => {
  try {
    const response = await apiClient.post("/login/first-step", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching lohin response:", error);
    throw error;
  }
};

export const fetchCaptcha = async () => {
  try {
    const response = await apiClient.get("/captcha/params");
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};

export const loginRefresh = async () => {
  try {
    const response = await apiClient.get("/login/refresh");
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};

export const signout = async (params:any) => {
  try {
    const response = await apiClient.post("/session/terminate", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};

export const myToolbar = async () => {
  try {
    const response = await apiClient.get("/account/my-topbar");
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};

export const favoritToolbar = async (id: string) => {
  try {
    const response = await apiClient.get(`/account/user-topbar/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};
