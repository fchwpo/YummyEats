import React, { createContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantContext = createContext<{
  restaurants: any[];
  isLoading: boolean;
  error: string | null;
}>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const withRestaurantContext = (
  WrappedComponent: React.ComponentType<any>
) => {
  return function (props: any) {
    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [isLoading, setLoadingState] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setLoadingState(true);
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results: any) => {
          setRestaurants(results);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => {
          setLoadingState(false);
        });
    }, []);

    return (
      <RestaurantContext.Provider
        value={{
          restaurants,
          isLoading,
          error,
        }}
      >
        <WrappedComponent {...props} />
      </RestaurantContext.Provider>
    );
  };
};
