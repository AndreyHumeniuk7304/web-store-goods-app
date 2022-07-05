export const addToCart = (productToCart) => {
  return {
    type: "ADD_TO_CART",

    payload: {
      cartProduct: productToCart,
      cartProductId: productToCart.vendorCode,
    },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const removeFromCart = (productToRemove) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      cartProduct: productToRemove,
      cartProductId: productToRemove.vendorCode,
    },
  };
};
