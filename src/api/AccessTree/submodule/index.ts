import apiClient from "../../../lib/axiosInstance";

export const fetchSubModule = async (params?: any) => {
  try {
    const response = await apiClient.get("/sub-module/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createSubModule = async (params?: any) => {
  try {
    const response = await apiClient.post("/sub-module/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateSubModule = async (params?: any) => {
  try {
    const response = await apiClient.post("/sub-module/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteSubModule = async (params?: any) => {
  try {
    const response = await apiClient.post("/sub-module/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};
