import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import { LocationContext } from "../../../services/location/location.provider";
import { RestaurantContext } from "../../../services/restaurants/restaurants.provider";
import { Search } from "../components/Search.component";

const Container = styled(View)`
  flex: 1;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <Container>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </Container>
  );
};
