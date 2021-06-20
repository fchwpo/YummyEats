import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// to keep space for current status bar
// we use marginTop in case of android
// but in case of iOS we use SafeAreaView
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
