
import apiClient from '../../lib/axiosInstance';
export const fetchUsers = async (params?: any) => {
  try {
    const response = await apiClient.get("/user/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchUser = async (id: number) => {
  try {
    const response = await apiClient.get(`/user/info/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const createUser = async (params?: any) => {
  try {
    const response = await apiClient.post("/user/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};


export const updateUser = async (params?: any) => {
  try {
    const response = await apiClient.post("/user/update", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const deleteUser = async (params?: any) => {
  try {
    const response = await apiClient.post("/user/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};
