import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Headline, Caption, Card, List } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import Offer from "../../components/Offer";
import NavigationService from "../../navigation/NavigationService";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export class landing extends Component {
  render() {
    return (
      <>
        <View style={[tw.pT3, tw.pX4, tw.bgWhite]}>
          <View style={[tw.flexRow, tw.itemsEnd]}>
            <Headline style={[tw.fontMedium]}>Performa</Headline>
            <Caption style={[tw.mX1, tw.mB1]}>(30 hari terakhir)</Caption>
          </View>
          <View style={[tw.mY2, tw.flexRow, tw.justifyBetween]}>
            <View>
              <Text style={[tw.textLg, tw.fontMedium, tw.textGray900]}>
                Referral
              </Text>
              <Text
                style={[
                  tw.mT1,
                  tw.w10_12,
                  tw.textXs,
                  tw.fontMedium,
                  tw.textGray700,
                ]}
              >
                Referral baru yang terdaftar melalui semua link offer mu
              </Text>
            </View>
            <Text style={[tw.textLg, tw.fontMedium, tw.textGray900]}>12</Text>
          </View>
          <View style={[tw.mY2, tw.flexRow, tw.justifyBetween]}>
            <View>
              <Text style={[tw.textLg, tw.fontMedium, tw.textGray900]}>
                Offer Clicks
              </Text>
              <Text
                style={[
                  tw.mT1,
                  tw.w10_12,
                  tw.textXs,
                  tw.fontMedium,
                  tw.textGray700,
                ]}
              >
                Jumlah klik dari semua penawaran yang kamu miliki
              </Text>
            </View>
            <Text style={[tw.textLg, tw.fontMedium, tw.textGray900]}>114</Text>
          </View>
          <View
            style={[
              tw.pX5,
              tw._mX5,
              tw.pY2,
              tw.mT4,
              tw.flexRow,
              tw.itemsCenter,
              tw.borderY,
              tw.borderGray400,
            ]}
          >
            <Text style={[tw.textBase]}>Lihat traffic</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              color={color.gray800}
              size={21}
              style={{ marginTop: 2 }}
            />
          </View>
        </View>
        <View style={[tw.mY3, tw.mX4]}>
          <View style={[tw.mY3]}>
            <Text style={[tw.mB2, tw.text2xl, tw.fontBold, tw.textGray700]}>
              My Offer
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={[tw._mX4, tw.pX2]}
            >
              <Offer />
              <Offer />
              <Offer />
            </ScrollView>
          </View>
          <View>
            <Card style={[tw._mX4, tw.mY2]}>
              <Text
                style={[
                  tw.mT3,
                  tw.mX4,
                  tw.mB2,
                  tw.text2xl,
                  tw.fontBold,
                  tw.textGray700,
                ]}
              >
                Panduan
              </Text>
              <Card.Content>
                <List.Item
                  title="Membaca tingkat penjualan"
                  left={(props) => (
                    <List.Icon {...props} icon="gift" style={[tw.mX0]} />
                  )}
                  right={(props) => (
                    <List.Icon
                      {...props}
                      icon="chevron-right"
                      style={[tw.mX0]}
                    />
                  )}
                  style={[tw.borderB, tw.borderGray200]}
                  onPress={() =>
                    NavigationService.navigate("OfferScreen", {
                      tags: "travel",
                    })
                  }
                />
                <List.Item
                  title="Word of mouth"
                  left={(props) => (
                    <List.Icon {...props} icon="thumb-up" style={[tw.mX0]} />
                  )}
                  right={(props) => (
                    <List.Icon
                      {...props}
                      icon="chevron-right"
                      style={[tw.mX0]}
                    />
                  )}
                  style={[tw.borderB, tw.borderGray200]}
                />
                <List.Item
                  title="Membangun Brandmu"
                  left={(props) => (
                    <List.Icon {...props} icon="bullhorn" style={[tw.mX0]} />
                  )}
                  right={(props) => (
                    <List.Icon
                      {...props}
                      icon="chevron-right"
                      style={[tw.mX0]}
                    />
                  )}
                  style={[tw.borderGray200]}
                />
              </Card.Content>
            </Card>
          </View>
        </View>
      </>
    );
  }
}

export default landing;
