export const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVOURITES": {
      const isExistFavourites = state.some((monitor) => {
        return monitor.vendorCode === action.payload.favourites.vendorCode;
      });
      if (isExistFavourites) {
        return state.filter(
          (monitor) =>
            monitor.vendorCode !== action.payload.favourites.vendorCode
        );
      }
      return [...state, action.payload.favourites];
    }

    default:
      return state;
  }
};
