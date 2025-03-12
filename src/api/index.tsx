import apiClient from "../lib/axiosInstance";

export const fetchResource = async (resource, params?:any) => {
  try {
    const response = await apiClient.get(`/${resource}/all`, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${resource} data:`, error);
    throw error;
  }
};

export const createResource = async (resource, params?:any) => {
  console.log(params);
  try {
    const response = await apiClient.post(`/${resource}/create`, params);
    return response.data;
  } catch (error) {
    console.error(`Error creating ${resource}:`, error);
    throw error;
  }
};

export const updateResource = async (resource, params?:any) => {
  try {
    const response = await apiClient.post(`/${resource}/update`, params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};

export const deleteResource = async (resource, params?:any) => {
  try {
    const response = await apiClient.post(`/${resource}/delete`, params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};
