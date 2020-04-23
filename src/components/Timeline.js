import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import { color, tw } from "react-native-tailwindcss";

export default class BasicTimeLine extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: "8:20 Today",
        title: "Event 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        time: "20:00 Yesterday",
        title: "Event 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        time: "17:21 Apr 20th",
        title: "Event 3",
        description:
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      },
      {
        time: "10:04 Apr 20th",
        title: "Event 4",
        description:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      },
      {
        time: "3:20 Apr 20th",
        title: "Event 5",
        description: "Lorem Ipsum was popularised in the 1960s.",
      },
    ];
  }

  renderDetail(rowData) {
    let time = (
      <Text style={[tw._mT2, tw.textXs, tw.textGray700]}>{rowData.time}</Text>
    );
    var desc = null;
    desc = (
      <View style={[]}>
        <Text>{rowData.description}</Text>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        {time}
        {desc}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Timeline
          style={[tw._mL6]}
          circleColor={color.indigo600}
          lineColor={color.indigo600}
          data={this.data}
          showTime={false}
          renderDetail={this.renderDetail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
