import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import VehoColors from '../screens/VehoColors';

const VehoScoreDot = (props) => {

  return (
  <View style={styles.container}>
      <View style={{ ...styles.icon, backgroundColor: "#589312"}}></View>
      <View style={{ ...styles.bar, backgroundColor: "#568313"}}></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: VehoColors.white
  },
  bar: {
    height: 40,
    width: '100%',
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