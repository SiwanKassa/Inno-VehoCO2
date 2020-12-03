import React, { Component, useState } from "react";
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Text } from "react-native";
import VehoColors from "../screens/VehoColors";

const VehoButton = (props) => {


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Todays groceries</Text>

          <TouchableWithoutFeedback
            style={{ ...styles.openButton }}
            onPress={() => {
              props.toggleOff(false);
            }}
          >
            <Text style={styles.button}>Hide Modal</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: VehoColors.input,

    width: "100%",
    height: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: "center",
  },
  modalView: {
    alignSelf: 'center'
  },    
  button: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    color: VehoColors.white,
  },
});

export default VehoButton;
