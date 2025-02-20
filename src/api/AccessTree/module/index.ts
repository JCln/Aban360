import apiClient from "../../../lib/axiosInstance";

export const fetchAllModule = async (params?: any) => {
  try {
    const response = await apiClient.get("/module/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createModule = async (params?: any) => {
  try {
    const response = await apiClient.post("/module/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateModule = async (params?: any) => {
  try {
    const response = await apiClient.post("/module/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteModule = async (params?: any) => {
  try {
    const response = await apiClient.post("/module/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};
