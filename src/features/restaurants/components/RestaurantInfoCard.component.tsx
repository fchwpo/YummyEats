import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import stars from "../../../../assets/stars";
import openNowIcon from "../../../../assets/open-now-icon";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[0]};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const IconsSection = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const IconsSectionEnd = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const ClosedTempInfo = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
`;

const Icon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

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
    isClosedTemporarily: false,
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
      <Cover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <IconsSection>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={stars} width={20} height={20} />
            ))}
          </Rating>
          <IconsSectionEnd>
            {isClosedTemporarily && (
              <ClosedTempInfo>CLOSED TEMPORARILY</ClosedTempInfo>
            )}
            {isOpenNow && (
              <SvgXml
                key="open-now-icon"
                xml={openNowIcon}
                width={20}
                height={20}
                style={{ marginLeft: 12 }}
              />
            )}
            {icon && <Icon source={{ uri: icon }} />}
          </IconsSectionEnd>
        </IconsSection>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
