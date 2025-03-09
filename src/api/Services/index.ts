
import apiClient from '../../lib/axiosInstance';

//services
export const fetchOffering= async (params?: any) => {
  try {
    const response = await apiClient.get("/offering/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createOffering  = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateOffering  = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteOffering = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

export const fetchOfferingUnit  = async (params?: any) => {
  try {
    const response = await apiClient.get("/offering-unit/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createOfferingUnit  = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering-unit/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateOfferingUnit  = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering-unit/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteOfferingUnit = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering-unit/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

//Invoice
export const fetchOfferingGroup = async (params?: any) => {
  try {
    const response = await apiClient.get("/offering-group/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createOfferingGroup = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering-group/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateOfferingGroup = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering-group/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteOfferingGroup = async (params?: any) => {
  try {
    const response = await apiClient.post("/offering-group/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};


