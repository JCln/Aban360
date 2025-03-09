import apiClient from "../../lib/axiosInstance";

//Invoices
export const fetchInvoiceInsertMode = async (params?: any) => {
  try {
    const response = await apiClient.get("/invoice-insert-mode/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createInvoiceInsertMode = async (params?: any) => {
  try {
    const response = await apiClient.post(
      "/invoice-insert-mode/create",
      params
    );
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateInvoiceInsertMode = async (params?: any) => {
  try {
    const response = await apiClient.post(
      "/invoice-insert-mode/update",
      params
    );
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteInvoiceInsertMode = async (params?: any) => {
  try {
    const response = await apiClient.post(
      "/invoice-insert-mode/delete",
      params
    );
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};

export const fetchInvoiceType = async (params?: any) => {
  try {
    const response = await apiClient.get("/invoice-type/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createInvoiceType = async (params?: any) => {
  try {
    const response = await apiClient.post("/invoice-type/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateInvoiceType = async (params?: any) => {
  try {
    const response = await apiClient.post("/invoice-type/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteInvoiceType = async (params?: any) => {
  try {
    const response = await apiClient.post("/invoice-type/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};


//status
export const fetchInvoiceStatus = async (params?: any) => {
  try {
    const response = await apiClient.get("/invoice-status/all", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createInvoiceStatus = async (params?: any) => {
  try {
    const response = await apiClient.post("/invoice-status/create", params);
    return response.data;
  } catch (error) {
    console.error("Error post data:", error);
    throw error;
  }
};

export const updateInvoiceStatus = async (params?: any) => {
  try {
    const response = await apiClient.post("/invoice-status/update", params);
    return response.data;
  } catch (error) {
    console.error("Error update data:", error);
    throw error;
  }
};
export const deleteInvoiceStatus = async (params?: any) => {
  try {
    const response = await apiClient.post("/invoice-status/delete", params);
    return response.data;
  } catch (error) {
    console.error("Error delete data:", error);
    throw error;
  }
};