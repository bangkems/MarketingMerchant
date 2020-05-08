// import React from "react";
// import { ScrollView, Text, View, Image } from "react-native";
// import Header from "../../components/Header";
// import Offfer from "../../components/Offer";
// import { color, tw } from "react-native-tailwindcss";
// import Banner from "../../components/Banner";

// function index({ navigation }) {
//   const { tags } = navigation.state.params;
//   return (
//     <>
//       <Header titleText="Penawaran tersedia" navigation={navigation}></Header>
//       <View style={[tw.h2, tw.bgWhite]} />
//       <Banner></Banner>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={[tw.m5]}>
//           <View
//             style={!!tags ? [tw.flexRow, tw.flexWrap, tw.mY2] : [tw.hidden]}
//           ></View>
//           <Offfer></Offfer>
//         </View>
//       </ScrollView>
//     </>
//   );
// }
// export default index;

// INI PAGE SEMENTARA YA KRAM BUAT NGARAHIN AJA KE CREATE OFFER, NTAR KALO PUNYAMU UDAH DIGANTI AJA
import React, { Component } from "react";
import { View } from "react-native";
import { Text, Button} from 'react-native-paper'
import NavigationService from "../../navigation/NavigationService";


export default class index extends Component {
  render() {
    return (
      <View>
        <Text> Ini adalah page sementara </Text>
        <Button mode="outlined" onPress={() => NavigationService.navigate("OfferCreate")}>Buat Offer</Button>
      </View>
    );
  }
}

