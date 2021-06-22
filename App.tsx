import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { withRestaurantContext } from "./src/services/restaurants/restaurants.provider";
import { LocationContextProvider } from "./src/services/location/location.provider";
import { Navigation } from "./src/infrastructure/navigation/index";

function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    // App still loading
    return null;
  }

  return (
    <>
      <Navigation />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const AppWithRestaurantContext = withRestaurantContext(App);

export default function Main() {
  return (
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <AppWithRestaurantContext />
        </LocationContextProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}
