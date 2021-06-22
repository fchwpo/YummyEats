import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { SearchBar } from "../../../components/SearchBar";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <SearchBar />
    </SearchContainer>
  );
};
