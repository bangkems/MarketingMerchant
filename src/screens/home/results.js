import React, { Component } from "react";
import { Text, View } from "react-native";
import { tw } from "react-native-tailwindcss";
import { Button } from "react-native-paper";
import Offer from "../../components/Offer";

export default class results extends Component {
  render() {
    return (
      <>
        <View style={[tw.mB3]}>
          <View style={[tw.flexRow, tw.mT5]}>
            <Text style={[tw.textXl, tw.textGray600]}>Urutkan:</Text>
            <Button mode="outlined" onPress={() => console.log("Pressed")}>
              Tertinggi
            </Button>
            <Button mode="outlined" onPress={() => console.log("Pressed")}>
              Tertinggi
            </Button>
          </View>

          <View style={[tw.flexRow, tw.mT10]}>
            <Text style={[tw.textXs, tw.textGray600]}>
              Menampilkan 3 penawaran untuk
            </Text>
            <Text style={[tw.textXs, tw.fontMedium]}>
              {" "}
              "{this.props.query}"
            </Text>
          </View>
          <Offer></Offer>
          <Offer></Offer>
          <Offer></Offer>
        </View>
      </>
    );
  }
}
