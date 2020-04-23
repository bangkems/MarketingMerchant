import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Appbar, Title } from "react-native-paper";
import { tw } from "react-native-tailwindcss";
import Header from "../../components/Header";

function index({ navigation }) {
  return (
    <>
      <Header titleText="" navigation={navigation}></Header>
      {/* <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <View>
          <Title style={[tw.textWhite]}>All Offer</Title>
        </View>
      </Appbar.Header> */}
      <ScrollView>
        <View>
          <Text>Offer Screen</Text>
        </View>
      </ScrollView>
    </>
  );
}
export default index;
