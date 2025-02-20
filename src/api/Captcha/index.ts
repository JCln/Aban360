import apiClient from "../../lib/axiosInstance";
export const captchaRead = async (params?: any) => {
  try {
    const response = await apiClient.get("/captcha/read", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const captchaReadPost = async (params?: any) => {
  try {
    const response = await apiClient.post("/captcha/read", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const captchaLangPost = async (params?: any) => {
  try {
    const response = await apiClient.post("/captcha/lang", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const captchaLang = async (params?: any) => {
  try {
    const response = await apiClient.get("/captcha/lang", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const captchaModePost = async (params?: any) => {
  try {
    const response = await apiClient.post("/captcha/mode", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const captchaMode = async (params?: any) => {
  try {
    const response = await apiClient.get("/captcha/mode", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};



export const captchaUpdate = async (params?: any) => {
  try {
    const response = await apiClient.post("/captcha/update", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};


