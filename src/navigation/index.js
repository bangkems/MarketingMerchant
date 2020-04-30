import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import OfferScreen from "../screens/offer/index";
import OfferDetail from "../screens/offer/detail";
import Login from "../screens/OTP/Login";
import Welcome from "../screens/OTP/Welcome";
import OnboardingFans from "../screens/OnboardingFans";

const StackNavigator = createStackNavigator(
  {
    IndexScreen: {
      screen: IndexScreen,
    },
    OfferScreen: {
      screen: OfferScreen,
    },
    OfferDetail: {
      screen: OfferDetail,
    },
    Login: {
      screen: Login,
    },
    Welcome: {
      screen: Welcome,
    },
    OnboardingFans: {
      screen: OnboardingFans,
    },
  },
  {
    initialRouteName: "OnboardingFans",
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: "#FFF" },
    },
  }
);

export default createAppContainer(StackNavigator);
