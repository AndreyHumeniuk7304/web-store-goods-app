import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import "./productList.scss";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import { addToCart } from "../../store/productCart/actions";
const ProductList = ({
  favourites,
  addToFavourites,
  handleClickModalAction,
  closeButtonAction,
  getCurrentProduct,
  currentProduct,
}) => {
  const dispatch = useDispatch();
  const marketProducts = useSelector((state) => state.marketProducts);
  const showModal = useSelector((state) => state.showModal);

  const addtoCartHandler = () => {
    dispatch(addToCart(currentProduct));
    closeButtonAction();
  };

  return (
    <>
      <div className="product-list">
        {marketProducts.map((product) => {
          return (
            <ProductCard
              closeButtonAction={closeButtonAction}
              handleClickModalAction={handleClickModalAction}
              key={product.vendorCode}
              monitor={product}
              getCurrentProduct={getCurrentProduct}
              addToFavourites={addToFavourites}
            />
          );
        })}
      </div>
      {showModal && (
        <Modal
          currentProduct={currentProduct}
          succesClick={addtoCartHandler}
          closeButtonAction={closeButtonAction}
          header="Addition"
          text="Do you want to add this item to your cart"
        />
      )}
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  favourites: PropTypes.array,
  addToFavourites: PropTypes.func,
};
