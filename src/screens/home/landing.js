import React, { Component } from "react";
import { Text, View } from "react-native";
import { Paragraph, IconButton, Badge } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import Timeline from "../../components/Timeline";
import Offer from "../../components/Offer";
import { ScrollView } from "react-native-gesture-handler";
import NavigationService from "../../navigation/NavigationService";

export class landing extends Component {
  render() {
    return (
      <>
        <View style={[tw.mB3]}>
          <View style={[tw.flex, tw.flexRow, tw.mY5]}>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="airplane"
                color={color.indigo400}
                size={40}
                onPress={() => console.log("airplane Pressed")}
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                Travelling
              </Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="food"
                color={color.indigo400}
                size={40}
                onPress={() => console.log("food Pressed")}
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                Makanan
              </Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="hanger"
                color={color.indigo400}
                size={40}
                onPress={() => console.log("hanger Pressed")}
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                Fashion
              </Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="dots-horizontal"
                color={color.indigo400}
                size={40}
                onPress={() => NavigationService.navigate("OfferScreen")}
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                More
              </Paragraph>
            </View>
          </View>
          <Text style={[tw.mT3, tw.text2xl, tw.fontBold, tw.textGray800]}>
            Penawaran terbaru
          </Text>
          <ScrollView
            horizontal
            style={[tw._mX5]}
            showsHorizontalScrollIndicator={false}
          >
            <View style={[tw.mX2]} />
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <View style={[tw.mX2]} />
          </ScrollView>
        </View>
        <View style={[tw.mT8]}>
          <Text style={[tw.mB2, tw.text2xl, tw.fontBold, tw.textGray800]}>
            Aktivitas terakhir
          </Text>
          <Timeline></Timeline>
        </View>
      </>
    );
  }
}

export default landing;
