import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Paragraph, IconButton, Badge } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import Timeline from "../../components/Timeline";
import { ScrollView } from "react-native-gesture-handler";
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
                onPress={() => console.log("airplane Pressed")}
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                Travelling
              </Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
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
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
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
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="dots-horizontal"
                color={color.indigo400}
                size={40}
                onPress={() => NavigationService.navigate("OfferScreen")}
              />
              <Paragraph style={[tw.textIndigo600, tw.fontMedium]}>
                More
              </Paragraph>
            </View>
          </View>
          <Text style={[tw.mT3, tw.text2xl, tw.fontBold, tw.textGray800]}>
            Penawaran terbaru
          </Text>
          <ScrollView
            horizontal
            style={[tw._mX5]}
            showsHorizontalScrollIndicator={false}
          >
            <View style={[tw.mX2]} />
            <Card style={[tw.mX2, tw.mY4, tw.shadowMd, tw.roundedLg]}>
              <Card.Content>
                <View style={[tw.textXl, tw.mT4]}>
                  <Text style={[tw.textLg, tw.fontBold, tw.textGray800]}>
                    Ripped Jeans Company
                  </Text>
                </View>
                <View style={[tw.flexRow, tw.mB4, tw.mT1]}>
                  <Badge style={[tw.pX2, tw.mR1]}>Fashion</Badge>
                  <Badge style={[tw.pX2, tw.mR1]}>Tekstil</Badge>
                  <Badge style={[tw.pX2, tw.mR1]}>Kulit</Badge>
                </View>
                <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter]}>
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
                    <Text style={[tw.textLg, tw.fontBold, tw.textGray800]}>
                      Rp 50.000
                    </Text>
                    <Text style={[tw.textXs, tw._mT1]}>per transaksi</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <Card style={[tw.mX2, tw.mY4, tw.shadowMd, tw.roundedLg]}>
              <Card.Content>
                <View style={[tw.textXl, tw.mT4]}>
                  <Text style={[tw.textLg, tw.fontBold, tw.textGray800]}>
                    Ripped Jeans Company
                  </Text>
                </View>
                <View style={[tw.flexRow, tw.mB4, tw.mT1]}>
                  <Badge style={[tw.pX2, tw.mR1]}>Fashion</Badge>
                  <Badge style={[tw.pX2, tw.mR1]}>Tekstil</Badge>
                  <Badge style={[tw.pX2, tw.mR1]}>Kulit</Badge>
                </View>
                <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter]}>
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
                    <Text style={[tw.textLg, tw.fontBold, tw.textGray800]}>
                      Rp 50.000
                    </Text>
                    <Text style={[tw.textXs, tw._mT1]}>per transaksi</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <View style={[tw.mX2]} />
          </ScrollView>
        </View>
        <View style={[tw.mT8]}>
          <Text style={[tw.mB2, tw.text2xl, tw.fontBold, tw.textGray800]}>
            Aktivitas terakhir
          </Text>
          <Timeline></Timeline>
        </View>
      </>
    );
  }
}

export default landing;
