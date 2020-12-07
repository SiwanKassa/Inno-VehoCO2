import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import VehoColors from "../screens/VehoColors";

const PieLegend = (props) => {
  return (
      <View style={styles.itemContainer}>
        <View style={{ ...styles.legend, backgroundColor: props.color }} />
        <Text style={styles.text}>{props.text}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignSelf: "flex-end",
    height: 40,
    marginHorizontal: 24,
  },
  legend: {
    height: 20,
    width: 20,
  },
  text: {
    color: VehoColors.white,
    width: "80%",
    textAlign: "center",
  },
});

export default PieLegend;
