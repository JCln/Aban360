import apiClient from "../../../lib/axiosInstance";

export const fetchAllApp = async (params?: any) => {
  try {
    const response = await apiClient.get("/app/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createApp = async (params?: any) => {
  try {
    const response = await apiClient.post("/app/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateApp = async (params?: any) => {
  try {
    const response = await apiClient.post("/app/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteApp = async (params?: any) => {
  try {
    const response = await apiClient.post("/app/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};
