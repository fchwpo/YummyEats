import React, { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/location.provider";
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
    const { location } = useContext(LocationContext);

    useEffect(() => {
      setRestaurants([]);
      if (location) {
        setLoadingState(true);
        const locationString = `${location?.lat},${location?.lng}`;
        setTimeout(() => {
          restaurantsRequest(locationString)
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
        }, 2000 * Math.random());
      }
    }, [location]);

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
