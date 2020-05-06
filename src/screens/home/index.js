import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import Landing from "./landing";
import Results from "./results";
import { color, tw } from "react-native-tailwindcss";
import { Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class index extends Component {
  state = {
    searchQuery: "",
  };
  hideResult = true;

  _onChangeSearch = (query) => {
    this.setState({ searchQuery: query });
    this.hideResult = !!query ? false : true;
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[tw.minHFull]}>
              <View style={[tw.p5, tw.bgWhite]}>
                <View style={[tw.flexRow]}>
                  <Surface
                    style={[tw.p2, tw.mR4, tw.roundedLg, { elevation: 2 }]}
                  >
                    <Image
                      style={{ width: 50, height: 50, borderRadius: 12 }}
                      source={{
                        uri:
                          "https://pbs.twimg.com/profile_images/1179195936/VOYEJ_Concho_twtr_copy_400x400.jpg",
                      }}
                    />
                  </Surface>
                  <View>
                    <Text
                      style={[
                        tw.text2xl,
                        tw.fontBold,
                        tw.textGray800,
                        tw.trackingTight,
                      ]}
                    >
                      Voyej Leather Goods
                    </Text>
                    <View style={[tw.mT1, tw.flexRow, tw.itemsCenter]}>
                      <Text
                        style={[tw.textXl, tw.fontSemibold, tw.textGray500]}
                      >
                        Rp 1.500.000
                      </Text>
                      <MaterialCommunityIcons
                        name="arrow-up-circle"
                        color={color.green400}
                        size={20}
                        style={[tw.mL1]}
                      />
                    </View>
                  </View>
                </View>
              </View>
              {this.displayResult()}
            </View>
          </ScrollView>
          {/* <Provider>
            <Portal>{this.displayFABFilter()}</Portal>
          </Provider> */}
        </SafeAreaView>
      </>
    );
  }

  displayResult() {
    if (this.hideResult) {
      return <Landing></Landing>;
    } else {
      return <Results query={this.state.searchQuery}></Results>;
    }
  }
}
