import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import VehoColors from "../screens/VehoColors";
import Modal from "react-native-modal";
import ShopListItem from "./../components/ShopListItem";

const ShoppingModal = (props) => {
  const renderItem = ({ item }) => (
    <ShopListItem
      key={item.key}
      item={item}
      name={item.name}
      eco={item.eco}
      selected={false}
    />
  );

  const groceries = [
    {
      name: "Oltermanni",
      eco: "12g*",
      key: 1,
    },
    {
      name: "Kinkkuvoileipä",
      eco: "24g*",
      key: 2,
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      isVisible={props.visible}
      onSwipeComplete={() => props.toggleOff(false)}
      swipeDirection="down"
      hasBackdrop={false}
      propagateSwipe={true}
    >
      <View style={styles.container}>
        <View style={styles.pullerContainer} onTouchMove={() => {}}>
          <View style={styles.puller}></View>
        </View>
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>Todays groceries 9.12.</Text>

          <View style={styles.subheaderContainer}>
            <Text style={styles.subHeader}>Item</Text>
            <Text style={styles.subHeader}>g/CO2</Text>
          </View>
          <SafeAreaView style={styles.listContainer}>
            <FlatList
              data={groceries}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
              initialNumToRender={20}
              maxToRenderPerBatch={20}
              style={styles.flatList}
            />
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: VehoColors.input,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    alignSelf: "center",
  },
  subheaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "6%",
  },
  pullerContainer: {
    width: "100%",
    height: "6%",
  },
  puller: {
    height: "10%",
    margin: 12,
    width: "33%",
    alignSelf: "center",
    borderRadius: 4,
    backgroundColor: VehoColors.white,
  },
  modalView: {
    alignSelf: "center",
  },
  button: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    color: VehoColors.white,
  },
  subHeader: {
    color: VehoColors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  modalHeader: {
    fontSize: 26,
    fontWeight: "bold",
    color: VehoColors.white,
    marginBottom: 6,
    alignSelf: "center",
  },
});

export default ShoppingModal;
