export const getProducts = () => {
  return fetch("./products.json").then((res) => res.json());
};
