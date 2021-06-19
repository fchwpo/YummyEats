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
  padding: ${(props) => props.theme.space[3]};
`;

const InfoContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
/* background-color: ${(props) => props.theme.colors.bg.secondary}; */

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
