import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Header from "./Header";
import Home from "../screens/home";
import Validasi from "../screens/validasi";
import Offer from "../screens/offer/";
import Profile from "../screens/profile";

const HomeRoute = () => <Home />;

const OfferRoute = () => <Offer />;

const ValidasiRoute = () => <Validasi />;

const ProfileRoute = () => <Profile />;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "home" },
      { key: "offer", title: "Offer", icon: "tag" },
      { key: "validasi", title: "Validasi", icon: "check-circle-outline" },
      { key: "profile", title: "My Profile", icon: "face" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    validasi: ValidasiRoute,
    offer: OfferRoute,
    profile: ProfileRoute,
  });

  render() {
    return (
      <>
        <Header
          titleText={this.state.routes[this.state.index].title}
          hideBackButton={true}
          hideActionButton={true}
        />
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </>
    );
  }
}
