
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from '../screens/MainScreen'

const StackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)