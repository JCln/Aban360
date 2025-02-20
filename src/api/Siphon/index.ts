
import apiClient from '../../lib/axiosInstance';
export const fetchSiphonMaterial = async (params?: any) => {
  try {
    const response = await apiClient.get("/siphon-material/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createSiphonMaterial = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-material/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateSiphonMaterial = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-material/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteSiphonMaterial = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-material/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

//Type
export const fetchSiphonType = async (params?: any) => {
  try {
    const response = await apiClient.get("/siphon-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createSiphonType = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateSiphonType = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteSiphonType = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};
//Diameter
export const fetchSiphonDiameter = async (params?: any) => {
  try {
    const response = await apiClient.get("/siphon-diameter/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createSiphonDiameter = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-diameter/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateSiphonDiameter = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-diameter/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteSiphonDiameter = async (params?: any) => {
  try {
    const response = await apiClient.post("/siphon-diameter/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};