type OptionsType = {
  id: number;
  value: number;
  label: string;
};

export const mapToOptionsType = (data: any): OptionsType[] => {
  return Array.isArray(data?.data)
    ? data.data.map((item: any) => ({
        id: item.id,
        value: item.id,
        label: item.title,
      }))
    : [];
};

export type CrudProps = {
  handleClose: () => void;
  hideColumns: any;
  formData: any;
  open: boolean;
  fetchFunction?: () => Promise<any>;
  createFunction?: (data: any) => Promise<any>;
  updateFunction?: (data: any) => Promise<any>;
  deleteFunction?: (id: number) => Promise<any>;
  formConfig: any;
  title: string;
  columns: any;
  handleEditClick: (data: any) => void;
  // handleDeleteClick: (id: number) => void;
};
