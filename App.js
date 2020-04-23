import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation";
import NavigationService from "./src/navigation/NavigationService";

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
      <AppNavigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </PaperProvider>
  );
}
