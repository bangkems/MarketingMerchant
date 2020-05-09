import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Colors, FAB } from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import NavigationService from "../../navigation/NavigationService";

const OngoingRoute = () => <View style={[styles.scene]} />;

const InactiveRoute = () => <View style={[styles.scene]} />;

const initialLayout = { width: Dimensions.get("window").width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "ongoing", title: "Berlangsung" },
    { key: "inactive", title: "Tidak Aktif" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: Colors.indigo100,
        height: 4,
      }}
      style={{ backgroundColor: Colors.indigo500 }}
    />
  );

  const renderScene = SceneMap({
    ongoing: OngoingRoute,
    inactive: InactiveRoute,
  });

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        label="Tambah Offer"
        onPress={() => NavigationService.navigate("OfferCreate")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
