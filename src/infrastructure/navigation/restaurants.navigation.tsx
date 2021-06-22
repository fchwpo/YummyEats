import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/Restaurants.screen";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/SafeArea";

export type RestaurantsStackParamList = {
  RestaurantsList: undefined;
  RestaurantsDetails: {
    placeId: string;
  };
};

const RestaurantsStack = createStackNavigator<RestaurantsStackParamList>();

function DetailsScreen({ route }) {
  return (
    <SafeArea>
      <Text>Restaurant Details!</Text>
      <Text>{route.params.placeId}</Text>
    </SafeArea>
  );
}

export const RestaurantsNavigation = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="RestaurantsList"
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantsStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantsDetails"
        component={DetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
