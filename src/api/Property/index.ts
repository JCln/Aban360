import apiClient from "../../lib/axiosInstance";
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

//Range
export const fetchEstateBoundType = async (params?: any) => {
  try {
    const response = await apiClient.get("/estate-bound-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createEstateBoundType = async (params?: any) => {
  try {
    const response = await apiClient.post("/estate-bound-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateEstateBoundType = async (params?: any) => {
  try {
    const response = await apiClient.post("/estate-bound-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteEstateBoundType = async (params?: any) => {
  try {
    const response = await apiClient.post("/estate-bound-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

//guild

export const fetchGuild = async (params?: any) => {
  try {
    const response = await apiClient.get("/guild/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createGuild = async (params?: any) => {
  try {
    const response = await apiClient.post("/guild/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateGuild = async (params?: any) => {
  try {
    const response = await apiClient.patch("/guild/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteGuild = async (params?: any) => {
  try {
    const response = await apiClient.post("/guild/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//profession
export const fetchProfession = async (params?: any) => {
  try {
    const response = await apiClient.get("/profession/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const createProfession = async (params?: any) => {
  try {
    const response = await apiClient.post("/profession/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const updateProfession = async (params?: any) => {
  try {
    const response = await apiClient.patch("/profession/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteProfession = async (params?: any) => {
  try {
    const response = await apiClient.post("/profession/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
