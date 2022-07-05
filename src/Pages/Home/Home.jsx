import ProductList from "../../Components/ProductList/ProductList";

export const Home = ({
  closeButtonAction,
  getCurrentProduct,
  currentProduct,
}) => {
  return (
    <ProductList
      closeButtonAction={closeButtonAction}
      getCurrentProduct={getCurrentProduct}
      currentProduct={currentProduct}
    />
  );
};
