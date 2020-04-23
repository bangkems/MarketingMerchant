import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#553c9a",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
