import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  Searchbar,
  Card,
  Paragraph,
  IconButton,
  Badge,
} from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import Timeline from "../../components/Timeline";

export default class index extends Component {
  state = {
    searchQuery: "",
  };

  _onChangeSearch = (query) => this.setState({ searchQuery: query });

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
              <View style={[tw.mB3]}>
                <View style={[tw.flex, tw.flexRow]}>
                  <View style={[tw.m4, tw.flexGrow, tw.itemsCenter]}>
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
                  <View style={[tw.m4, tw.flexGrow, tw.itemsCenter]}>
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
                  <View style={[tw.m4, tw.flexGrow, tw.itemsCenter]}>
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
                </View>
                <Card style={[tw.mT2, tw.shadowMd, tw.roundedLg]}>
                  <Card.Cover
                    source={{ uri: "https://picsum.photos/700?grayscale" }}
                  />
                  <Card.Content>
                    <View style={[tw.textXl, tw.mT4]}>
                      <Text style={[tw.text2xl, tw.fontBold]}>
                        Ripped Jeans Company
                      </Text>
                    </View>
                    <View style={[tw.flexRow, tw.mB4, tw.mT1]}>
                      <Badge style={[tw.pX2, tw.mR1]}>Fashion</Badge>
                      <Badge style={[tw.pX2, tw.mR1]}>Tekstil</Badge>
                      <Badge style={[tw.pX2, tw.mR1]}>Kulit</Badge>
                    </View>
                    <View
                      style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter]}
                    >
                      <View style={[tw.flexCol]}>
                        <View
                          style={[tw.flexRow, tw.itemsCenter, tw._mB2, tw._mL2]}
                        >
                          <IconButton
                            icon="speedometer"
                            size={25}
                            color={color.green700}
                          />
                          <Text style={[tw.textLg, tw._mL2, tw.textGreen700]}>
                            89%
                          </Text>
                        </View>
                      </View>
                      <View style={[tw.itemsEnd]}>
                        <Text style={[tw.text2xl, tw.fontBold]}>Rp 50.000</Text>
                        <Text style={[tw.textXs, tw._mT1]}>per transaksi</Text>
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              </View>
              <View style={[tw.mT8]}>
                <Text style={[tw.mB2, tw.text2xl, tw.fontBold, tw.textGray800]}>
                  Aktivitas terakhir
                </Text>
                <Timeline></Timeline>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
