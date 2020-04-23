import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Landing from "./landing";
import Results from "./results";
import { tw } from "react-native-tailwindcss";
import { Searchbar } from "react-native-paper";

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
          <ScrollView style={tw.bgPurple800}>
            <View style={[tw.bgWhite]}>
              <View style={[tw.bgPurple800, tw.pX5, tw.pT4]}>
                <Text
                  style={[
                    tw.mB3,
                    tw.text3xl,
                    tw.fontBold,
                    tw.textPurple100,
                    tw.trackingTight,
                  ]}
                >
                  {" "}
                  Selamat Datang, Andi!{" "}
                </Text>
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
              <View style={[tw.pX5]}>{this.displayResult()}</View>
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
