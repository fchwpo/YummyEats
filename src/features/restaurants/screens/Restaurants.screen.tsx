import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { SearchBar } from "../../../components/SearchBar";

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <View style={styles.container}>
        <Text>Our React Native Blank Canvas !</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // to keep space for current status bar
    // we use marginTop in case of android
    // but in case of iOS we use SafeAreaView
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  searchContainer: {
    padding: 16,
  },
});
