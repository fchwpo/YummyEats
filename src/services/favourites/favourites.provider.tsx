import React, { createContext, useState } from "react";

export const FavouritesContext = createContext<{
  favourites: any[];
  addToFavourites: any;
  removeFromFavourites: any;
}>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

export const FavouritesContextProvider = ({ children }: { children: any }) => {
  const [favourites, setFavourites] = useState<any[]>([]);

  const add = (restaurant: any) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: any) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
