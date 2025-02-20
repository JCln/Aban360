import apiClient from "../../lib/axiosInstance";
export const fetchCountry = async (params?: any) => {
  try {
    const response = await apiClient.get("/country/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createCountry = async (params?: any) => {
  try {
    const response = await apiClient.post("/country/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateCountry = async (params?: any) => {
  try {
    const response = await apiClient.patch("/country/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteCountry = async (params?: any) => {
  try {
    const response = await apiClient.post("/country/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchCordinalDirection = async (params?: any) => {
  try {
    const response = await apiClient.get("/cordinal-direction/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createCordinalDirection = async (params?: any) => {
  try {
    const response = await apiClient.post("/cordinal-direction/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateCordinalDirection = async (params?: any) => {
  try {
    const response = await apiClient.patch(
      "/cordinal-direction/update",
      params
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteCordinalDirection = async (params?: any) => {
  try {
    const response = await apiClient.post("/cordinal-direction/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//Headquarters
export const fetcheHeadquarters = async (params?: any) => {
  try {
    const response = await apiClient.get("/headquarters/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createHeadquarters = async (params?: any) => {
  try {
    const response = await apiClient.post("/headquarters/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateeHeadquarters = async (params?: any) => {
  try {
    const response = await apiClient.patch("/headquarters/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteHeadquarters = async (params?: any) => {
  try {
    const response = await apiClient.post("/headquarters/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//Region
export const fetchRegion = async (params?: any) => {
  try {
    const response = await apiClient.get("/region/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createRegion = async (params?: any) => {
  try {
    const response = await apiClient.post("/region/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateRegion = async (params?: any) => {
  try {
    const response = await apiClient.patch("/region/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteRegion = async (params?: any) => {
  try {
    const response = await apiClient.post("/region/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//Province
export const fetchProvince = async (params?: any) => {
  try {
    const response = await apiClient.get("/province/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createProvince = async (params?: any) => {
  try {
    const response = await apiClient.post("/province/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateProvince = async (params?: any) => {
  try {
    const response = await apiClient.patch("/province/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteProvince = async (params?: any) => {
  try {
    const response = await apiClient.post("/province/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//Zone
export const fetchZone = async (params?: any) => {
  try {
    const response = await apiClient.get("/zone/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createZone = async (params?: any) => {
  try {
    const response = await apiClient.post("/zone/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateZone = async (params?: any) => {
  try {
    const response = await apiClient.patch("/zone/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteZone = async (params?: any) => {
  try {
    const response = await apiClient.post("/zone/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//Municipality
export const fetchMunicipality = async (params?: any) => {
  try {
    const response = await apiClient.get("/municipality/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createMunicipality = async (params?: any) => {
  try {
    const response = await apiClient.post("/municipality/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateMunicipality = async (params?: any) => {
  try {
    const response = await apiClient.patch("/municipality/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteMunicipality = async (params?: any) => {
  try {
    const response = await apiClient.post("/municipality/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// ReadingBound
export const fetchReadingBound = async (params?: any) => {
  try {
    const response = await apiClient.get("/reading-bound/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createReadingBound = async (params?: any) => {
  try {
    const response = await apiClient.post("/reading-bound/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateReadingBound = async (params?: any) => {
  try {
    const response = await apiClient.patch("/reading-bound/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteReadingBound = async (params?: any) => {
  try {
    const response = await apiClient.post("/reading-bound/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// ReadingBound
export const fetchReadingBlock = async (params?: any) => {
  try {
    const response = await apiClient.get("/reading-block/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createReadingBlock = async (params?: any) => {
  try {
    const response = await apiClient.post("/reading-block/create", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateReadingBlock = async (params?: any) => {
  try {
    const response = await apiClient.patch("/reading-block/update", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteReadingBlock = async (params?: any) => {
  try {
    const response = await apiClient.post("/reading-block/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
