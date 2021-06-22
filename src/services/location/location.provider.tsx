import React, { useState, useEffect, ReactElement, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext<{
  isLoading: boolean;
  error: string | null;
  location: {
    lat: string;
    lng: string;
  } | null;
  search: any;
  keyword: string;
}>({
  isLoading: false,
  error: null,
  search: () => {},
  location: null,
  keyword: "",
});

export const LocationContextProvider = ({
  children,
}: {
  children: ReactElement | null;
}) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState<{
    lat: string;
    lng: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  const fetchLocationData = (searchKeyword: string) => {
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        setError("");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    fetchLocationData(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
