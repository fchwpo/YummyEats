import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import MapView, { Marker, Callout } from "react-native-maps";
import { LocationContext } from "../../../services/location/location.provider";
import { RestaurantContext } from "../../../services/restaurants/restaurants.provider";
import { Search } from "../components/Search.component";
import { MapCallout } from "../components/MapCallout.component";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AppTabParamsList } from "src/infrastructure/navigation/app.navigation";

const Container = styled(View)`
  flex: 1;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({
  navigation,
}: BottomTabBarProps<AppTabParamsList>) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const { lat = "37.7749295", lng = "-122.4194155" } = location || {};

  useEffect(() => {
    const viewport = location?.viewport;
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location]);

  return (
    <Container>
      <Search />
      <Map
        region={{
          latitude: Number(lat),
          longitude: Number(lng),
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              key={restaurant.placeId}
              onCalloutPress={() => {
                navigation.navigate("RestaurantsDetails", {
                  item: restaurant,
                });
              }}
            >
              <Callout>
                <MapCallout restaurantInfo={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </Container>
  );
};
