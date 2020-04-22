import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import HomeScreen from "../screens/home/index";

const StackNavigator = createStackNavigator(
  {
    IndexScreen: {
      screen: IndexScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: "IndexScreen",
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: "#FFF" },
    },
  }
);

export default createAppContainer(StackNavigator);
