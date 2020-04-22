import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Header from "./Header";
import Home from "../screens/home";

const HomeRoute = () => <Home></Home>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "home" },
      { key: "albums", title: "Albums", icon: "alert-circle" },
      { key: "recents", title: "Recents", icon: "alert-circle" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
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
