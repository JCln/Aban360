import apiClient from "../../lib/axiosInstance";

export const fetchLocation = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("/location/descriptive", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};
export const fetchSummary = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("/subscription/summary", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};

//Fetch Owner
export const fetchOwnerInfo = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("/individual/owner", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};

// beneficiary
export const fetchBeneficiary = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("/individual/stakeholder", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
};

export const fetchPropertyInfo = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("realm/estate", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching propert:", error);
    throw error;
  }
};

export const fetchUnitInfo = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("realm/flat", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching unitInfo:", error);
    throw error;
  }
};

export const fetchSiphon = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("realm/flat", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching siphone:", error);
    throw error;
  }
};

export const fetchMeter = async (params: { input: string }) => {
  try {
    const response = await apiClient.post("realm/flat", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching meter:", error);
    throw error;
  }
};
