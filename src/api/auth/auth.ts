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



