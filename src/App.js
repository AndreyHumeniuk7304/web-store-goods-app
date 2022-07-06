import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Favourites from "./Pages/Favourites/Favourites";
import { useDispatch, useSelector } from "react-redux";

import { Home } from "./Pages/Home/Home";
import { fetchProducts } from "./store/marketProducts/actions";
import { showModal } from "./store/modal/actions";

const App = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const loading = useSelector((state) => state.loader);
  const productsCart = useSelector((state) => state.cart);

  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const closeButtonAction = () => {
    dispatch(showModal());
  };

  const getCurrentProduct = (productObject) => {
    setCurrentProduct(productObject);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo-link">
          <img className="logo-link_img" src="./images/logo.png" alt="logo" />
        </Link>
        <div className="header_navigaton">
          <div className="cart">
            <Link to="/cart" className="link cart-link">
              <img className="cart_img" src="../images/cart.png" alt="cart" />
              <span className="cart-length">{productsCart.length}</span>
            </Link>
          </div>
          <div className="favourites">
            <Link to="/favourites" className="link favourites-link">
              <img
                className="favourites_img"
                src="./images/favourite.png"
                alt="favourites"
              />
              <span className="favourites-length">{favourites.length}</span>
            </Link>
          </div>
        </div>
      </header>
      {loading && <h1>Loading...</h1>}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              closeButtonAction={closeButtonAction}
              getCurrentProduct={getCurrentProduct}
              currentProduct={currentProduct}
            />
          }
        />
        <Route
          path="favourites"
          element={
            <Favourites
              closeButtonAction={closeButtonAction}
              getCurrentProduct={getCurrentProduct}
              currentProduct={currentProduct}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              currentProduct={currentProduct}
              closeButtonAction={closeButtonAction}
              getCurrentProduct={getCurrentProduct}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
