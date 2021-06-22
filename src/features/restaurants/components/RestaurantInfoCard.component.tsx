import React from "react";
import { SvgXml } from "react-native-svg";
import stars from "../../../../assets/stars";
import openNowIcon from "../../../../assets/open-now-icon";
import { Spacer } from "../../../components/spacer/Spacer";
import { View } from "react-native";
import { Text } from "../../../components/typography/Text";
import {
  RestaurantCard,
  IconsSectionEnd,
  IconsSection,
  Rating,
  Cover,
  Icon,
  Info,
} from "./RestaurantInfoCard.styles";
import { Favourite } from "../../../components/favourite/Favourite.component";

export const RestaurantInfoCard = ({
  restaurant = {
    name: "Some Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=85",
      "https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=85",
    ],
    address: "100, Some Random Street!",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  },
}: {
  restaurant?: any;
}) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={6}>
      <View>
        <Favourite />
        <Cover source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <IconsSection>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={stars} width={20} height={20} />
            ))}
          </Rating>
          <IconsSectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && (
              <>
                <Spacer position="left" size="lg">
                  <SvgXml
                    key="open-now-icon"
                    xml={openNowIcon}
                    width={20}
                    height={20}
                  />
                </Spacer>
              </>
            )}
            {icon && (
              <Spacer position="left" size="lg">
                <Icon source={{ uri: icon }} />
              </Spacer>
            )}
          </IconsSectionEnd>
        </IconsSection>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
