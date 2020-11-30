import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import VehoColors from '../screens/VehoColors';

const VehoButton = (props) => {

  return (
  <View style={styles.container} backgroundColor={props.color}>
    <TouchableOpacity
      {...props}
      containerViewStyle={styles.button}>
        <Text style={styles.button}>{props.text}</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: VehoColors.input,
    width: '90%',
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    height: '100%',
    width: '100%',
    color: VehoColors.white,
  }
});


export default VehoButton;