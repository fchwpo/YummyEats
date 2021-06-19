import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";

function App() {
  return (
    <>
      <RestaurantsScreen />
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
