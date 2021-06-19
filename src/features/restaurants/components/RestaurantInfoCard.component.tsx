import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({
  restaurant = {
    name: "Some Restaurant",
    icon: "",
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
  return (
    <Card elevation={6} style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 15,
    backgroundColor: "white",
  },
});
