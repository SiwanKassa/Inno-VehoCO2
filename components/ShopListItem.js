import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import VehoColors from "../screens/VehoColors";

const ShopListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.ecoContainer}>
          <Text
            style={{
              ...styles.eco,
            }}
          >
            {props.eco}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 5,
  },
  itemContainer: {
    height: 40,
    width: "95%",
    borderRadius: 15,
    backgroundColor: VehoColors.card,
    elevation: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 8
  },
  name: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#ffffff",
  },
  eco: {
    fontSize: 16,
    fontWeight: "bold",
    paddingRight: 10,
    color: VehoColors.white,
  },
  nameContainer: {
    height: "100%",
    justifyContent: "center",
  },
  ecoContainer: {
    height: "100%",
    justifyContent: "center",
  },
});

export default ShopListItem;
