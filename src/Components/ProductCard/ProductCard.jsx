import Button from "../Buttons/Button";
import "./productCard.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/modal/actions";
import { setFavourites } from "../../store/favourites/actions";

const ProductCard = ({
  // handleClickModalAction,
  getCurrentProduct,
  monitor,
}) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const handleButtonAddToCart = () => {
    // handleClickModalAction();
    dispatch(showModal());
    getCurrentProduct(monitor);
  };

  const handleButtonFavourites = () => {
    monitor.isInFavourites = true;
    dispatch(setFavourites(monitor));
  };

  const { name, img, vendorCode, price, color } = monitor;

  const isFavourite = favourites.some((item) => item.vendorCode === vendorCode);

  let favouriteStar;
  isFavourite
    ? (favouriteStar = (
        <img
          className="add-to-favourites_img"
          src="./favourites-filled-star-symbol.png"
          alt="remove into favourites"
        />
      ))
    : (favouriteStar = (
        <img
          className="add-to-favourites_img"
          src="./star.png"
          alt="add to favourites"
        />
      ));

  return (
    <>
      <div className="monitor_box">
        <div className="monitor_img-box">
          <img className="monitor_img" src={img} alt="" />
        </div>
        <div className="monitor_description">
          <h2 className="monitor_name">{name}</h2>
          <span className="monitor_price">₴{price}</span>
          <Button
            className="btn__add-to-cart"
            handleClickButton={handleButtonAddToCart}
            text="Add to Cart"
          />
          <i>Color: {color}</i>

          <i className="monitor_code">{vendorCode}</i>
          <Button
            handleClickButton={handleButtonFavourites}
            className="btn btn_add-to-favourites"
            text={favouriteStar}
          />
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  favourites: PropTypes.array,
  addToFavourites: PropTypes.func,
  monitor: PropTypes.object,
};

export default ProductCard;
