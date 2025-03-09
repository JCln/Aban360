
export const USRial = new Intl.NumberFormat("en-US", {
  // style: 'currency',
  // currency: 'IRR',
  // maximumFractionigits: 2,
});

// export const getSelectedCheckboxIds = (data: any, prefix: string): number[] => {
//   return Object.keys(data)
//     .filter(key => key.startsWith(prefix))
//     .reduce<number[]>((acc, key) => {
//       if (data[key]?.length > 0) {
//         // acc = acc.concat(data[key].map(item => Number(item)));
//         return [...acc, ...data[key].map((item: string | number) => +item)];
//       }
//       return acc;
//     }, []);
// };

export const getSelectedCheckboxIds = (data: any, prefix: string): number[] => {
  return Object.keys(data)
    .filter(key => key.startsWith(prefix))
    .reduce<number[]>((acc, key) => {
      // Handle array values
      if (Array.isArray(data[key])) {
        return [...acc, ...data[key].map((item: string | number) => +item)];
      }
      
      // Handle individual checkbox values
      if (typeof data[key] === 'boolean' && data[key]) {
        const id = key.split('_').pop();
        if (id && !isNaN(+id)) {
          return [...acc, +id];
        }
      }
      
      return acc;
    }, []);
};