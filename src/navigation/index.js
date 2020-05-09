import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens";
import OfferScreen from "../screens/offer/index";
import OfferDetail from "../screens/offer/detail";
import OfferCreate from "../screens/offer/createoffer";
import BenefitPelanggan from "../screens/offer/benefitpelanggan";
import BenefitFans from "../screens/offer/benefitfans";
import OTP from "../screens/OTP";
import Login from "../screens/OTP/Login";
import LoginKirimUlang from "../screens/OTP/LoginKirimUlang";
import OnboardingFans from "../screens/onboarding";
import Validasi from "../screens/validasi";
import Validasi_Form from "../screens/validasi/FormValidasi";
import Validasi_Konfirmasi from "../screens/validasi/KonfirmasiVoucher";
import Validasi_Sukses from "../screens/validasi/Sukses";
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
    BenefitPelanggan: {
      screen: BenefitPelanggan,
    },
    BenefitFans: {
      screen: BenefitFans,
    },
    Login: {
      screen: Login,
    },
    LoginKirimUlang: {
      screen: LoginKirimUlang,
    },
    OTP: {
      screen: OTP,
    },
    OnboardingFans: {
      screen: OnboardingFans,
    },
    Validasi: {
      screen: Validasi,
    },
    Validasi_Form: {
      screen: Validasi_Form,
    },
    Validasi_Konfirmasi: {
      screen: Validasi_Konfirmasi,
    },
    Validasi_Sukses: {
      screen: Validasi_Sukses,
    },
    UbahDetailPengiriman: {
      screen: UbahDetailPengiriman,
    },
    UbahDetailRekening: {
      screen: UbahDetailRekening,
    },
    Profile: {
      screen: Profile,
    },
    UpdateProfileMerchant: {
      screen: UpdateProfileMerchant,
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
