import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Landing from "./landing";
import Results from "./results";
import { color, tw } from "react-native-tailwindcss";
import { Searchbar, IconButton } from "react-native-paper";

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
    const { searchQuery } = this.state;
    return (
      <>
        <SafeAreaView>
          <ScrollView
            style={tw.bgPurple800}
            showsVerticalScrollIndicator={false}
          >
            <View style={[tw.bgWhite]}>
              <View style={[tw.bgPurple800, tw.pX4, tw.pT4]}>
                <Text style={[tw.textXl, tw.fontMedium, tw.textPurple100]}>
                  Poin anda
                </Text>
                <View style={[tw.mT1, tw.flexRow, tw.justifyBetween]}>
                  <Text
                    style={[
                      tw.text3xl,
                      tw.fontBold,
                      tw.textPurple100,
                      tw.trackingTight,
                    ]}
                  >
                    Rp. 150.000
                  </Text>
                  <IconButton
                    icon="history"
                    size={30}
                    color={color.indigo100}
                    style={[tw.textWhite, tw.pB2, tw.m0]}
                  />
                </View>
                <Searchbar
                  placeholder="Cari offer terbaru"
                  onChangeText={this._onChangeSearch}
                  value={searchQuery}
                  style={[
                    tw._mB3,
                    tw.mT1,
                    tw.shadow,
                    tw.border,
                    tw.borderGray100,
                  ]}
                />
              </View>
              <View style={[tw.pX4]}>{this.displayResult()}</View>
            </View>
          </ScrollView>
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
