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
