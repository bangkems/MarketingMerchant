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
        <Card.Title title="Voyej DGR Discount" subtitle="Bandung, Jawa Barat" />
        <Card.Content>
          <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter]}>
            <View style={[tw.flexCol]}>
              <View style={[tw.flexRow, tw.itemsCenter, tw._mB2, tw._mL2]}>
                <IconButton icon="account" size={25} color={color.green600} />
                <View>
                  <Text style={[tw.textBase, tw._mL2, tw.textGreen600]}>
                    12 Referral
                  </Text>
                  <Text style={[tw.textXs, tw._mL2, tw.textGreen600]}>
                    Dari 2 influencer
                  </Text>
                </View>
              </View>
            </View>
            <View style={[tw.mX6]} />
            <View style={[tw.itemsEnd]}>
              <Text style={[tw.textLg, tw.fontMedium, tw.textGray800]}>
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
