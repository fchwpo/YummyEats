import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const IconsSection = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconsSectionEnd = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[0]};
`;

export const Cover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Icon = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
