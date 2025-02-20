import apiClient from "../../../lib/axiosInstance";

export const fetchEndppoint = async (params?: any) => {
  try {
    const response = await apiClient.get("/endpoint/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createEndppoint = async (params?: any) => {
  try {
    const response = await apiClient.post("/endpoint/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateEndppoint = async (params?: any) => {
  try {
    const response = await apiClient.post("/endpoint/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteEndppoint = async (params?: any) => {
  try {
    const response = await apiClient.post("/endpoint/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};
