import Modal from "../../Components/Modal/Modal";
import "./cart.scss";
import ProductCart from "../../Components/ProductCard/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/productCart/actions";
import PurchaseForm from "../../Components/Forms/Form";

const Cart = ({
  handleClickModalAction,
  closeButtonAction,
  getCurrentProduct,
  currentProduct,
}) => {
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart);

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(currentProduct));
    closeButtonAction();
  };

  return (
    <>
      {productsCart.length < 1 ? (
        <h2 className="title">
          <i>Your cart is empty</i>
        </h2>
      ) : (
        <>
          <h2 className="title">
            You added {productsCart.length} product to your cart
          </h2>
          <div className="cart-list">
            {productsCart.map((product) => {
              return (
                <ProductCart
                  handleClickModalAction={handleClickModalAction}
                  getCurrentProduct={getCurrentProduct}
                  key={product.vendorCode}
                  product={product}
                />
              );
            })}
          </div>
        </>
      )}
      {productsCart.length > 0 && <PurchaseForm />}
      {showModal && (
        <Modal
          succesClick={removeFromCartHandler}
          header="Product Remove"
          text="Are you sure you want to remove this item from your cart?"
        />
      )}
    </>
  );
};

export default Cart;
