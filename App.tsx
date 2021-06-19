import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    // App still loading
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
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
