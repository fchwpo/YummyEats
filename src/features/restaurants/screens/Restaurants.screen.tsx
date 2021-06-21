import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../../components/SearchBar";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";

const MemoizedRestaurantInfoCard = React.memo(RestaurantInfoCard);

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
  const restaurantContext = useContext(RestaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <ListContainer
        data={restaurantContext.restaurants}
        renderItem={({ item }) => (
          <Spacer position={"bottom"} size={"lg"}>
            <MemoizedRestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item: any) => "key-" + item.name}
      />
    </SafeArea>
  );
};
