
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Validasi from '../screens/Validasi/Validasi'
import FormValidasi from '../screens/Validasi/FormValidasi'
import KonfirmasiVoucher from '../screens/Validasi/KonfirmasiVoucher'
import Sukses from '../screens/Validasi/Sukses'
import Login from '../screens/OTP/Login'
import Welcome from '../screens/OTP/Welcome'
import OnboardingFans from '../screens/OnboardingFans'


const StackNavigator = createStackNavigator(
  {
    Validasi: {
      screen: Validasi
    },
    FormValidasi: {
      screen: FormValidasi
    },
    KonfirmasiVoucher: {
      screen: KonfirmasiVoucher
    },
    Sukses: {
      screen: Sukses
    },
    Login: {
      screen: Login
    },
    Welcome: {
      screen: Welcome
    },
    OnboardingFans: {
      screen: OnboardingFans
    }
  },
  {
    initialRouteName: 'OnboardingFans',
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)