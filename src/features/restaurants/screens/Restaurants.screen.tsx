import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";
import { Loader } from "../../../components/loaders/Loader";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.provider";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import { Search } from "../components/Search";

const MemoizedRestaurantInfoCard = React.memo(RestaurantInfoCard);

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
      {restaurantContext.isLoading && (
        <Loader size={50} animating={true} color={Colors.blue300} />
      )}
      <Search />
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
