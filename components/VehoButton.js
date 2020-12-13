import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import VehoColors from '../screens/VehoColors';

/**
 * Custom button component to be used anywhere in the application.
 * Uses specified styling but can be given more css-styles with the spread-syntax
 */

const VehoButton = (props) => {

  return (
  <View style={styles.container} backgroundColor={props.color} marginBottom={props.margin}>
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
    elevation: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: VehoColors.white,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
  }
});


export default VehoButton;