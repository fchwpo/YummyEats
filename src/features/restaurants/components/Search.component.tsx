import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { SearchBar } from "../../../components/SearchBar";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0;
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }: any) => {
  return (
    <SearchContainer>
      <SearchBar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
      />
    </SearchContainer>
  );
};
