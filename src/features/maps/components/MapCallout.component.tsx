import React from "react";
import { Text } from "react-native";

export const MapCallout = ({ restaurantInfo }: { restaurantInfo: any }) => {
  return <Text>{restaurantInfo.name}</Text>;
};
