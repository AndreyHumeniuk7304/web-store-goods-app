import ProductCard from "../../Components/ProductCard/ProductCard";
import "./favourites.scss";

import Modal from "../../Components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/productCart/actions";
const Favourites = ({
  getCurrentProduct,
  closeButtonAction,
  currentProduct,
}) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const showModal = useSelector((state) => state.showModal);

  const addtoCartHandler = () => {
    dispatch(addToCart(currentProduct));
    closeButtonAction();
  };

  return (
    <>
      {favourites.length < 1 ? (
        <h2 className="title">
          <i>You have not selected any product</i>
        </h2>
      ) : (
        <>
          <h2 className="title">
            You added {favourites.length} product to your favourites{" "}
          </h2>
          <div className="favourites-list">
            {favourites.map((product) => {
              return (
                <ProductCard
                  key={product.vendorCode}
                  monitor={product}
                  getCurrentProduct={getCurrentProduct}
                />
              );
            })}
          </div>
        </>
      )}
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

export default Favourites;
