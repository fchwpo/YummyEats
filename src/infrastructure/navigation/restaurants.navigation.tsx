import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/Restaurants.screen";
import { RestaurantsDetails } from "../../features/restaurants/screens/RestaurantsDetails.screen";

export type RestaurantsStackParamList = {
  RestaurantsList: undefined;
  RestaurantsDetails: {
    item: any;
  };
};

const RestaurantsStack = createStackNavigator<RestaurantsStackParamList>();

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
        component={RestaurantsDetails}
      />
    </RestaurantsStack.Navigator>
  );
};
