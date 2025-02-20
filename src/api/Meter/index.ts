
import apiClient from '../../lib/axiosInstance';
export const fetchMeterMaterial  = async (params?: any) => {
  try {
    const response = await apiClient.get("/meter-material/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createMeterMaterial  = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-material/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateMeterMaterial  = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-material/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteMeterMaterial = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-material/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

export const fetchMeterDiameter = async (params?: any) => {
  try {
    const response = await apiClient.get("/meter-diameter/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createMeterDiameter = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-diameter/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateMeterDiameter = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-diameter/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteMeterDiameter = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-diameter/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};


export const fetchMeterProducer = async (params?: any) => {
  try {
    const response = await apiClient.get("/meter-producer/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createMeterProducer = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-producer/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateMeterProducer = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-producer/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteMeterProducer = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-producer/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};


export const fetchMeterType = async (params?: any) => {
  try {
    const response = await apiClient.get("/meter-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createMeterType = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateMeterType = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteMeterType = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

export const fetchMeterUseType = async (params?: any) => {
  try {
    const response = await apiClient.get("/meter-use-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createMeterUseType = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-use-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateMeterUseType = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-use-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteMeterUseType = async (params?: any) => {
  try {
    const response = await apiClient.post("/meter-use-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};


export const fetchUseState = async (params?: any) => {
  try {
    const response = await apiClient.get("/use-state/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createUseState = async (params?: any) => {
  try {
    const response = await apiClient.post("/use-state/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateUseState = async (params?: any) => {
  try {
    const response = await apiClient.post("/use-state/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};

export const deleteUseState = async (params?: any) => {
  try {
    const response = await apiClient.post("/use-state/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};


export const fetchWaterMeterTagDefinition = async (params?: any) => {
  try {
    const response = await apiClient.get("/water-meter-tag-definition/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createWaterMeterTagDefinition = async (params?: any) => {
  try {
    const response = await apiClient.post("/water-meter-tag-definition/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateWaterMeterTagDefinition = async (params?: any) => {
  try {
    const response = await apiClient.post("/water-meter-tag-definition/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteWaterMeterTagDefinition = async (params?: any) => {
  try {
    const response = await apiClient.post("/water-meter-tag-definition/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

