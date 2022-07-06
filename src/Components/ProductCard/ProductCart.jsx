import { useDispatch } from "react-redux";
import { showModal } from "../../store/modal/actions";
import Button from "../Buttons/Button";
const ProductCart = ({ product, getCurrentProduct }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showModal());
    getCurrentProduct(product);
  };
  return (
    <div className="monitor_box monitor_box-in-cart">
      <div className="monitor_img-box">
        <img className="monitor_img" src={product.img} alt="" />
      </div>
      <Button
        className="btn btn_delete_from_cart"
        text={
          <img
            className="delete_from_cart_img"
            src="images/delete.png"
            alt="delete"
          />
        }
        handleClickButton={handleClick}
      />
      <div className="monitor_description">
        <h2 className="monitor_name">{product.name}</h2>
        <span className="monitor_price">₴{product.price}</span>
        <Button
          className="btn__add-to-cart"
          // handleClickButton={handleClick}
          text="Buy Now"
        />
        <i>Color: {product.color}</i>

        <i className="monitor_code">{product.vendorCode}</i>
      </div>
    </div>
  );
};

export default ProductCart;
