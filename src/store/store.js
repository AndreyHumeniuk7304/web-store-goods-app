import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { favouritesReducer } from "./favourites/favouritesReducer";
import { loaderReducer } from "./marketProducts/loaderReducer";
import { marketProductsReducer } from "./marketProducts/marketProductsReducer";
import { modalReducer } from "./modal/modalReducer";
import { cartReducer } from "./productCart/cartReducer";
import {
  getCartFromLS,
  getFavouritesFromLS,
  syncLS,
} from "./syncLocalStorage/syncLS";

const initialState = {
  marketProducts: [],
  showModal: false,
  favourites: getFavouritesFromLS(),
  loader: false,
  cart: getCartFromLS(),
};

const reducers = combineReducers({
  marketProducts: marketProductsReducer,
  favourites: favouritesReducer,
  cart: cartReducer,
  showModal: modalReducer,
  loader: loaderReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk, syncLS), devTools)
);

export default store;
