
import apiClient from '../../lib/axiosInstance';
export const fetchConstructionType = async (params?: any) => {
  try {
    const response = await apiClient.get("/construction-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createConstructionType = async (params?: any) => {
  try {
    const response = await apiClient.post("/construction-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateConstructionType = async (params?: any) => {
  try {
    const response = await apiClient.post("/construction-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteConstructionType = async (params?: any) => {
  try {
    const response = await apiClient.post("/construction-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};


//
export const fetchUsage = async (params?: any) => {
  try {
    const response = await apiClient.get("/usage/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createUsage = async (params?: any) => {
  try {
    const response = await apiClient.post("/usage/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateUsage = async (params?: any) => {
  try {
    const response = await apiClient.post("/usage/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteUsage = async (params?: any) => {
  try {
    const response = await apiClient.post("/usage/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};
