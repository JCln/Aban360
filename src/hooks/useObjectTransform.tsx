interface TransformedObject {
  id: number;
  value: number;
  label: string;
}

export const useObjectTransform = (obj: any): TransformedObject => {
  if (!obj) return null;
  
  return {
    id: obj.id || obj.value,
    value: obj.value || obj.id,
    label: obj.label || obj.title
  };
};