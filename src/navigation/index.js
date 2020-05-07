import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import OfferScreen from "../screens/offer/index";
import OfferDetail from "../screens/offer/detail";
import OTP from "../screens/OTP"
import Login from "../screens/OTP/Login";
import LoginKirimUlang from "../screens/OTP/LoginKirimUlang";
import OnboardingFans from "../screens/onboarding";
import Validasi from "../screens/validasi"
import Validasi_Form from "../screens/validasi/FormValidasi"
import UbahDetailPengiriman from "../screens/reward/UbahDetailPengiriman";
import UbahDetailRekening from "../screens/reward/UbahDetailRekening";
import Referral from "../screens/referral";
import DetailReferral from "../screens/referral/DetailReferral";
import UbahKodeReferral from "../screens/referral/UbahKodeReferral";

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
    LoginKirimUlang: {
      screen: LoginKirimUlang
    },
    OTP: {
      screen: OTP,
    },
    OnboardingFans: {
      screen: OnboardingFans,
    },
    Validasi: {
      screen: Validasi
    },
    Validasi_Form: {
      screen: Validasi_Form
    },
    UbahDetailPengiriman: {
      screen: UbahDetailPengiriman,
    },
    UbahDetailRekening: {
      screen: UbahDetailRekening,
    },
    Referral: {
      screen: Referral,
    },
    DetailReferral: {
      screen: DetailReferral,
    },
    UbahKodeReferral: {
      screen: UbahKodeReferral,
    },
  },
  {
    initialRouteName: "OTP",
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: "#FFF" },
    },
  }
);

export default createAppContainer(StackNavigator);
