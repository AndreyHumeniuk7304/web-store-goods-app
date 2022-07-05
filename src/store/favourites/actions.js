export const setFavourites = (productToFavourite) => {
  return {
    type: "SET_FAVOURITES",

    payload: {
      favourites: productToFavourite,
      // favouritesId: productToFavourite.vendorCode,
      // isInWish: productToFavourite.isInFavourites,
    },
  };
};
