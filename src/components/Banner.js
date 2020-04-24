import * as React from "react";
import { View, Text } from "react-native";
import { IconButton, TouchableRipple } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import { ScrollView } from "react-native-gesture-handler";

export default class MyComponents extends React.Component {
  constructor() {
    super();
    this.data = [
      {
        icon: "airplane",
        text: "Travel",
      },
      {
        icon: "food",
        text: "Makanan",
      },
      {
        icon: "hanger",
        text: "Fashion",
      },
      {
        icon: "silverware-fork-knife",
        text: "Pottery",
      },
      {
        icon: "gender-female",
        text: "Kosmetik",
      },
      {
        icon: "leaf",
        text: "Taman",
      },
      {
        icon: "sofa",
        text: "Furniture",
      },
    ];
  }

  render() {
    return (
      <>
        <View style={[tw.borderB, tw.borderGray300, tw.bgWhite, tw.shadow]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[tw.mX2]} />
            {this.data.map((item, key) => (
              <View key={key} style={[tw.itemsCenter, tw.m2]}>
                <IconButton
                  icon={item.icon}
                  color={color.indigo700}
                  style={[tw.p0, tw.m0]}
                  size={25}
                />
                <Text style={[tw.textIndigo800, tw.textXs, tw.fontMedium]}>
                  {item.text}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </>
    );
  }
}
