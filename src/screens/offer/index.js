import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { Chip, FAB } from "react-native-paper";
import Header from "../../components/Header";
import Offfer from "../../components/Offer";
import { color, tw } from "react-native-tailwindcss";
import Banner from "../../components/Banner";

function index({ navigation }) {
  const { tags } = navigation.state.params;
  return (
    <>
      <Header titleText="Penawaran tersedia" navigation={navigation}></Header>
      <Banner></Banner>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw.m5]}>
          <View
            style={!!tags ? [tw.flexRow, tw.flexWrap, tw.mY2] : [tw.hidden]}
          >
            <Chip
              style={[tw.maxW10]}
              icon="tag-multiple"
              onPress={() => console.log("Tag Closed")}
              onClose={() => console.log("Tag Closed")}
            >
              <Text style={[tw.capitalize]}>{tags}</Text>
            </Chip>
          </View>
          <Offfer></Offfer>
        </View>
      </ScrollView>

      <FAB
        style={[tw.absolute, tw.m4, tw.right0, tw.bottom0, tw.bgYellow600]}
        icon="filter"
        onPress={() => console.log("Pressed")}
      />
    </>
  );
}
export default index;
