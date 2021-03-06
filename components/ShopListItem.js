import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import VehoColors from "../screens/VehoColors";

const ShopListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{props.amount}</Text>
        </View>

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
    backgroundColor: VehoColors.input,
    elevation: 3,
    flexDirection: "row",
    paddingRight: 8,
    marginBottom: 8
  },
  amountContainer: {
    width: "10%",
    justifyContent: "center",
    paddingRight: 4,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingLeft: 12,
  },
  amount: {
    color: VehoColors.white,
  },
  name: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#ffffff",
  },
  eco: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'right',
    paddingRight: 10,
    color: VehoColors.white,
  },
  nameContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
  },
  ecoContainer: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
  },
});

export default ShopListItem;
