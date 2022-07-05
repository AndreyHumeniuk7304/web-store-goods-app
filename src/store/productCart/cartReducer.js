export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const isExistCart = state.some((monitor) => {
        console.log(monitor);
        return monitor.vendorCode === action.payload.cartProductId;
      });

      if (isExistCart) return state;

      return [...state, action.payload.cartProduct];
    }

    case "REMOVE_FROM_CART": {
      const newCartFilter = state.filter(
        (monitor) => monitor.vendorCode !== action.payload.cartProductId
      );

      return newCartFilter;
    }

    default:
      return state;
  }
};
