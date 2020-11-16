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
    backgroundColor: '#ecf0f1',
    width: '90%',
    height: 60,
    margin: 12,
    borderRadius: 20,
  },
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    height: '100%',
    width: '100%',
    color: VehoColors.white,
  }
});


export default VehoButton;