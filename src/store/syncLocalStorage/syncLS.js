export const syncLS = (store) => (next) => (action) => {
  if (action.type === "CLEAR_CART") {
    const result = next(action);
    localStorage.removeItem("cart");
    return result;
  } else if (action.type === "SET_FAVOURITES") {
    const result = next(action);
    localStorage.setItem(
      "favourites",
      JSON.stringify(store.getState().favourites)
    );
    return result;
  } else if (action.type === "ADD_TO_CART" || "REMOVE_FROM_CART") {
    const result = next(action);
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    return result;
  }

  return next(action);
};

export const getFavouritesFromLS = () => {
  try {
    const favourites = localStorage.getItem("favourites");
    if (!favourites) return [];
    const parsed = JSON.parse(favourites);
    return parsed;
  } catch (e) {
    return [];
  }
};

export const getCartFromLS = () => {
  try {
    const cartProducts = localStorage.getItem("cart");
    if (!cartProducts) return [];
    const parsed = JSON.parse(cartProducts);
    return parsed;
  } catch (error) {
    return [];
  }
};
