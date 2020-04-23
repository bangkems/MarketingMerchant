import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { tw } from "react-native-tailwindcss";
import Header from "./Header";
import Home from "../screens/home";
import Referral from "../screens/referral";

const HomeRoute = () => <Home />;

const ReferralRoute = () => <Referral />;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "home" },
      { key: "referral", title: "Referral", icon: "link" },
      { key: "recents", title: "Recents", icon: "alert-circle" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    referral: ReferralRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <>
        <Header titleText={this.state.routes[this.state.index].title} />
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </>
    );
  }
}
