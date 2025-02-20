import { useCallback, useState } from "react";
import { GridColumnVisibilityModel } from "@mui/x-data-grid";

interface ColumnVisibilityModel {
  [key: string]: boolean;
}

export const useColumnVisibilityModel = (
  defaultVisibilityModel: GridColumnVisibilityModel
) => {
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<ColumnVisibilityModel>(defaultVisibilityModel ?? {});

  const handleColumnVisibilityChange = useCallback(
    (newModel: GridColumnVisibilityModel) => {
      const updatedModel = { ...columnVisibilityModel, ...newModel };

      // Ensure default hidden columns remain hiddel
      Object.keys(defaultVisibilityModel).forEach((key) => {
        if (defaultVisibilityModel[key] === false) {
          updatedModel[key] = false;
        }
      });

      // setColumnVisibilityModel(updatedModel);
      setColumnVisibilityModel(newModel);
    },
    [columnVisibilityModel, defaultVisibilityModel]
  );

  return { columnVisibilityModel, handleColumnVisibilityChange };
};
