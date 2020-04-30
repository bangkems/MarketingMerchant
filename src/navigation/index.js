import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import HomeScreen from "../screens/home/index";
import OfferScreen from "../screens/offer/index";
import OfferDetail from "../screens/offer/detail";
import Validasi from "../screens/Validasi/Validasi";
import FormValidasi from "../screens/Validasi/FormValidasi";
import KonfirmasiVoucher from "../screens/Validasi/KonfirmasiVoucher";
import Sukses from "../screens/Validasi/Sukses";
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
    Validasi: {
      screen: Validasi,
    },
    FormValidasi: {
      screen: FormValidasi,
    },
    KonfirmasiVoucher: {
      screen: KonfirmasiVoucher,
    },
    Sukses: {
      screen: Sukses,
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
