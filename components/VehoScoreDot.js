import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import VehoColors from '../screens/VehoColors';

const VehoScoreDot = (props) => {

  return (
  <View style={styles.container}>
    <View>
      <View style={{ ...styles.dot, backgroundColor: props.color}}></View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: VehoColors.white
  },
  text: {
    color: VehoColors.white,
    textAlign: 'center',
    width: 70,
  }
});


export default VehoScoreDot;