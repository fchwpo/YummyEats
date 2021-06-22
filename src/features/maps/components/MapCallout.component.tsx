import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/CompactInfo";

export const MapCallout = ({ restaurantInfo }: { restaurantInfo: any }) => {
  return <CompactRestaurantInfo restaurant={restaurantInfo} />;
};
