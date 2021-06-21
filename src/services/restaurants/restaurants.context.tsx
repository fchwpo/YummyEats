import React, { createContext } from "react";

const RestaurantContext = createContext<{
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
          restaurants: [],
        }}
      >
        <WrappedComponent {...props} />
      </RestaurantContext.Provider>
    );
  };
};
