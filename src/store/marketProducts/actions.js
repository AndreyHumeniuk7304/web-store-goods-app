import { getProducts } from "../../Fetching/getProducts";

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

const showLoader = () => {
  return {
    type: "SHOW_LOADER",
  };
};

const hideLoader = () => {
  return {
    type: "HIDE_LOADER",
  };
};

export const fetchProducts = () => (dispatch) => {
  dispatch(showLoader());
  getProducts().then((products) => {
    const action = setProducts(products);
    dispatch(action);
    dispatch(hideLoader());
  });
};
