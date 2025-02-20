import apiClient from "../../lib/axiosInstance";
export const fetchRoles = async (params?: any) => {
  try {
    const response = await apiClient.get("/role/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchRole = async (id: number) => {
  try {
    const response = await apiClient.get(`/role/single/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const createRole = async (params?: any) => {
  try {
    const response = await apiClient.post("/role/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateRole = async (params?: any) => {
  try {
    const response = await apiClient.post("/role/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteRole = async (params?: any) => {
  try {
    const response = await apiClient.post("/role/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

export const fetchRoleParams = async (params?: any) => {
  try {
    const response = await apiClient.post("/role/params-create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const fetchUserParams = async (params?: any) => {
  try {
    const response = await apiClient.post("/user/params-create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};
