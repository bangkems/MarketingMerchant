import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Title } from "react-native-paper";
import { tw } from "react-native-tailwindcss";

function Header({ titleText }) {
  return (
    <Appbar.Header style={titleText == "Home" ? tw.h4 : ""}>
      <View style={[styles.container]}>
        <Title style={styles.title}>
          {titleText == "Home" ? "" : titleText}
        </Title>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
  },
});

export default Header;
