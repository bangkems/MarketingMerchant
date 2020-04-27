import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Button, IconButton } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import NavigationService from "../navigation/NavigationService";
export default class Offer extends Component {
  render() {
    return (
      <Card
        style={[tw.mX2, tw.mY2, tw.border, tw.borderGray200, tw.rounded]}
        onPress={() =>
          NavigationService.navigate("OfferDetail", {
            tags: "",
          })
        }
      >
        <Card.Title
          title="Ripped Jeans Company"
          subtitle="Bandung, Jawa Barat"
        />
        <Card.Content>
          <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter]}>
            <View style={[tw.flexCol]}>
              <View style={[tw.flexRow, tw.itemsCenter, tw._mB2, tw._mL2]}>
                <IconButton icon="hanger" size={25} color={color.indigo400} />
                <Text style={[tw.textLg, tw._mL2, tw.textIndigo400]}>
                  Fashion
                </Text>
              </View>
            </View>
            <View style={[tw.itemsEnd]}>
              <Text style={[tw.textLg, tw.fontBold, tw.textGray800]}>
                Rp 50.000
              </Text>
              <Text style={[tw.textXs, tw._mT1]}>per transaksi</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  }
}
