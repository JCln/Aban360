import { useState } from "react";

export const usePaginationState = (initialPageSize: number = 20) => {
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handlePageSizeChange = (value: number) => {
    try {
      setPageSize(value);
    } catch (e) {
      console.error("Error changing page size", e);
    }
  };
  return {
    pageSize,
    handlePageSizeChange,
  };
};
