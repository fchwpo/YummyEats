import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";

// to keep space for current status bar
// we use marginTop in case of android
// but in case of iOS we use SafeAreaView
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
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
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <InfoContainer>
        <RestaurantInfoCard />
      </InfoContainer>
    </SafeArea>
  );
};
