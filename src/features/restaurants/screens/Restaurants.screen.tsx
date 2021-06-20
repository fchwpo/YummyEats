import React from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../../components/SearchBar";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";

const MemoizedRestaurantInfoCard = React.memo(RestaurantInfoCard, () => true);

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0;
`;

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    paddingTop: 0,
  },
})``;
/* background-color: ${(props) => props.theme.colors.bg.secondary}; */

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <ListContainer
        data={[
          {
            name: 1,
          },
          {
            name: 2,
          },
          {
            name: 3,
          },
          {
            name: 4,
          },
          {
            name: 5,
          },
          {
            name: 6,
          },
          {
            name: 7,
          },
          {
            name: 8,
          },
          {
            name: 9,
          },
          {
            name: 10,
          },
          {
            name: 11,
          },
          {
            name: 12,
          },
          {
            name: 13,
          },
          {
            name: 14,
          },
          {
            name: 15,
          },
          {
            name: 16,
          },
          {
            name: 17,
          },
          {
            name: 18,
          },
          {
            name: 19,
          },
          {
            name: 20,
          },
          {
            name: 21,
          },
          {
            name: 22,
          },
        ]}
        renderItem={() => (
          <Spacer position={"bottom"} size={"lg"}>
            <MemoizedRestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item: any) => "key-" + item.name}
      />
    </SafeArea>
  );
};
