import React, { Component } from "react";
import { Text, View } from "react-native";
import { Paragraph, IconButton, Card, Button, List } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import Offer from "../../components/Offer";
import NavigationService from "../../navigation/NavigationService";
export class landing extends Component {
  render() {
    return (
      <>
        <View style={[tw.mB3]}>
          <View style={[tw.flex, tw.flexRow, tw.mY5]}>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="airplane"
                color={color.indigo400}
                size={40}
                onPress={() =>
                  NavigationService.navigate("OfferScreen", {
                    tags: "travel",
                  })
                }
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                Travel
              </Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="food"
                color={color.indigo400}
                size={40}
                onPress={() =>
                  NavigationService.navigate("OfferScreen", {
                    tags: "makanan",
                  })
                }
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                Makanan
              </Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="hanger"
                color={color.indigo400}
                size={40}
                onPress={() =>
                  NavigationService.navigate("OfferScreen", {
                    tags: "Fashion",
                  })
                }
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                Fashion
              </Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="dots-horizontal"
                color={color.indigo400}
                size={40}
                onPress={() =>
                  NavigationService.navigate("OfferScreen", {
                    tags: "",
                  })
                }
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                More
              </Paragraph>
            </View>
          </View>
          <View>
            <Text
              style={[tw.mT3, tw.mB2, tw.text2xl, tw.fontBold, tw.textGray700]}
            >
              Penawaran terbaru
            </Text>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <Button style={[tw.mY2]}>Lihat semua penawaran</Button>
          </View>
          <View>
            <Text
              style={[tw.mT3, tw.mB2, tw.text2xl, tw.fontBold, tw.textGray700]}
            >
              Panduan
            </Text>
            <Card
              style={[
                tw.mX2,
                tw.mY2,
                tw.shadowMd,
                tw.border2,
                tw.borderPurple300,
                tw.roundedLg,
              ]}
            >
              <Card.Content>
                <List.Item
                  title="Dapatkan lebih banyak"
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
                  title="Membangun Audiens"
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
