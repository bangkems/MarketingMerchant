import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Title } from "react-native-paper";

function Header({ titleText }) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  //   headerContainer: {
  //     backgroundColor: "#2980b9",
  //   },
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
