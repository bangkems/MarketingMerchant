import React, { Component } from "react";
import { Text, View } from "react-native";
import { Headline } from "react-native-paper";
import { tw } from "react-native-tailwindcss";
import Offer from "../../components/Offer";
export default class inactive extends Component {
  render() {
    return (
      <View style={[tw.m2]}>
        <Headline style={[tw.mY2]}> Penawaran tidak aktif</Headline>
        <Offer />
      </View>
    );
  }
}
