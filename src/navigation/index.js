import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import OfferScreen from "../screens/offer/index";
import OfferDetail from "../screens/offer/detail";
import OfferCreate from "../screens/offer/createoffer";
import OTP from "../screens/OTP"
import Login from "../screens/OTP/Login";
import LoginKirimUlang from "../screens/OTP/LoginKirimUlang";
import OnboardingFans from "../screens/onboarding";
import MyRewards from "../screens/reward";
import DetailReward from "../screens/reward/DetailReward";
import DetailReward_Komisi from "../screens/reward/DetailReward_Komisi";
import DetailReward_Hadiah from "../screens/reward/DetailReward_Hadiah";
import UbahDetailPengiriman from "../screens/reward/UbahDetailPengiriman";
import UbahDetailRekening from "../screens/reward/UbahDetailRekening";
import Profile from "../screens/profile";
import UpdateProfileMerchant from "../screens/profile/UpdateProfileMerchant";

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
    OfferCreate: {
      screen: OfferCreate,
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
    MyRewards: {
      screen: MyRewards,
    },
    DetailReward: {
      screen: DetailReward,
    },
    UbahDetailPengiriman: {
      screen: UbahDetailPengiriman,
    },
    DetailReward_Komisi: {
      screen: DetailReward_Komisi,
    },
    UbahDetailRekening: {
      screen: UbahDetailRekening,
    },
    DetailReward_Hadiah: {
      screen: DetailReward_Hadiah,
    },
    Profile: {
      screen: Profile,
    },
    UpdateProfileMerchant: {
      screen: UpdateProfileMerchant,
    }
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
