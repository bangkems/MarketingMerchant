import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MyRewards from '../screens/MyRewards'
import DetailReward from '../screens/DetailReward'
import UbahDetailPengiriman from '../screens/UbahDetailPengiriman'
import DetailReward_Komisi from '../screens/DetailReward_Komisi'
import UbahDetailRekening from '../screens/UbahDetailRekening'
import DetailReward_Hadiah from '../screens/DetailReward_Hadiah'

const StackNavigator = createStackNavigator({
    MyRewards: {
        screen: MyRewards
    },
    DetailReward: {
        screen: DetailReward
    },
    UbahDetailPengiriman: {
        screen: UbahDetailPengiriman
    },
    DetailReward_Komisi: {
        screen: DetailReward_Komisi
    },
    UbahDetailRekening: {
        screen: UbahDetailRekening
    },
    DetailReward_Hadiah: {
        screen: DetailReward_Hadiah
    }
}, {
    initialRouteName: 'MyRewards',
    headerMode: 'none',
    mode: 'modal'
})

export default createAppContainer(StackNavigator)