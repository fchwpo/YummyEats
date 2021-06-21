import React, { createContext } from "react";

export const RestaurantContext = createContext<{
  restaurants: any[];
}>({
  restaurants: [],
});

export const withRestaurantContext = (
  WrappedComponent: React.ComponentType<any>
) => {
  return function (props: any) {
    return (
      <RestaurantContext.Provider
        value={{
          restaurants: [
            {
              name: 1,
            },
            {
              name: 2,
            },
            {
              name: 3,
            },
            {
              name: 4,
            },
            {
              name: 5,
            },
          ],
        }}
      >
        <WrappedComponent {...props} />
      </RestaurantContext.Provider>
    );
  };
};
