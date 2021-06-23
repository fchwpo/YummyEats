import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";
import { Loader } from "../../../components/loaders/Loader";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.provider";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import { Search } from "../components/Search.component";
import { StackScreenProps } from "@react-navigation/stack";
import { RestaurantsStackParamList } from "../../../infrastructure/navigation/restaurants.navigation";
import { FavouritesBar } from "../../../components/favourite/FavoritesBar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.provider";

const MemoizedRestaurantInfoCard = React.memo(RestaurantInfoCard);

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    paddingTop: 0,
  },
})``;
/* background-color: ${(props) => props.theme.colors.bg.secondary}; */

export const RestaurantsScreen = ({
  navigation,
}: StackScreenProps<RestaurantsStackParamList, "RestaurantsList">) => {
  const restaurantContext = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {restaurantContext.isLoading && (
        <Loader size={50} animating={true} color={Colors.blue300} />
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <ListContainer
        data={restaurantContext.restaurants}
        renderItem={({ item }: { item: any }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push("RestaurantsDetails", {
                item,
              });
            }}
          >
            <Spacer position={"bottom"} size={"lg"}>
              <MemoizedRestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item: any) => "key-" + item.name}
      />
    </SafeArea>
  );
};
