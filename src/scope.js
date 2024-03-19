import * as affinityComponents from "@allied-solutions/affinity";
// export const scope = {
//   affinityComponents,
// };
export const scope = Object.entries(affinityComponents).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    };
  },
  {}
);
