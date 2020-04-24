import React, { Component } from "react";
import { Text, View } from "react-native";
import { tw } from "react-native-tailwindcss";
import { Chip } from "react-native-paper";
import Offer from "../../components/Offer";

export default class results extends Component {
  render() {
    return (
      <>
        <View style={[tw.mB3]}>
          <Text style={[tw.textXl, tw.textGray600, tw.mT10]}>
            Hasil penulusuran untuk "{this.props.query}"
          </Text>
          <Offer></Offer>
          <Offer></Offer>
          <Offer></Offer>
        </View>
      </>
    );
  }
}
