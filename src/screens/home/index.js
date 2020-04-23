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
          <ScrollView>
            <View style={tw.mX5}>
              <View style={[tw.mT8, tw.mB3]}>
                <Text
                  style={[
                    tw.text3xl,
                    tw.fontBold,
                    tw.textGray800,
                    tw.trackingTight,
                  ]}
                >
                  {" "}
                  Selamat Datang, Andi!{" "}
                </Text>
              </View>
              <Searchbar
                placeholder="Cari offer terbaru"
                onChangeText={this._onChangeSearch}
                value={searchQuery}
                style={[tw.mT3, tw.shadow, tw.border, tw.borderGray100]}
              />
              {this.displayResult()}
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
