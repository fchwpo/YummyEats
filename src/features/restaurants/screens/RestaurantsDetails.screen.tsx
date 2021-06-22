import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { RestaurantsStackParamList } from "src/infrastructure/navigation/restaurants.navigation";
import { SafeArea } from "../../../components/utility/SafeArea";

export const RestaurantsDetails = ({
  route,
}: StackScreenProps<RestaurantsStackParamList, "RestaurantsDetails">) => {
  return (
    <SafeArea>
      <Text>Restaurant Details!</Text>
      <Text>{route.params.placeId}</Text>
    </SafeArea>
  );
};
