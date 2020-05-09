import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Title, Caption, Colors } from "react-native-paper";
import { tw } from "react-native-tailwindcss";
import NavigationService from "../navigation/NavigationService";

function Header({ titleText, hideBackButton, hideActionButton, subtitleText }) {
  return (
    <Appbar.Header style={tw.justifyBetween}>
      <Appbar.BackAction
        onPress={() => NavigationService.back()}
        style={hideBackButton ? tw.hidden : tw.block}
      />
      <View style={[styles.container]}>
        <Title style={[tw.textWhite]}>{titleText}</Title>
        <Caption style={[tw.textWhite]}>{subtitleText}</Caption>
      </View>
      <Appbar.Action
        icon="dots-horizontal"
        style={hideActionButton ? tw.hidden : tw.block}
        onPress={() => console.log("Shown more")}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
