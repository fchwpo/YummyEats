import React from "react";
import { View, SafeAreaView, StatusBar, Platform } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";

const isAndroid = Platform.OS === "android";

// to keep space for current status bar
// we use marginTop in case of android
// but in case of iOS we use SafeAreaView
const RootContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const InfoContainer = styled(View)`
  padding: 16px;
  flex: 1;
  background-color: lightpink;
`;

export const RestaurantsScreen = () => {
  return (
    <RootContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <InfoContainer>
        <RestaurantInfoCard />
      </InfoContainer>
    </RootContainer>
  );
};
