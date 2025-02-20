
import apiClient from '../../lib/axiosInstance';
export const fetchIndividualType = async (params?: any) => {
  try {
    const response = await apiClient.get("/individual-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createIndividualType = async (params?: any) => {
  try {
    const response = await apiClient.post("/individual-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateIndividualType = async (params?: any) => {
  try {
    const response = await apiClient.post("/individual-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteIndividualType = async (params?: any) => {
  try {
    const response = await apiClient.post("/individual-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

//individual-estate-relation-type
export const fetchIndividualEstateRelationType  = async (params?: any) => {
  try {
    const response = await apiClient.get("/individual-estate-relation-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createIndividualEstateRelationType  = async (params?: any) => {
  try {
    const response = await apiClient.post("/individual-estate-relation-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateIndividualEstateRelationType  = async (params?: any) => {
  try {
    const response = await apiClient.post("/individual-estate-relation-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteIndividualEstateRelationType = async (params?: any) => {
  try {
    const response = await apiClient.post("/individual-estate-relation-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};