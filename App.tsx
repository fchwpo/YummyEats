import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

const isAndroid = Platform.OS === "android";

function App() {
  return (
    <>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.searchContainer}>
          <Text>Search Container 1</Text>
        </View>
        <View style={styles.container}>
          <Text>Our React Native Blank Canvas !</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

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
    backgroundColor: "green",
  },
});
