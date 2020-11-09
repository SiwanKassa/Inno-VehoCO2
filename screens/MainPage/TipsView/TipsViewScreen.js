import * as React from 'react';
import styles from "./TipsViewStyle"

import { Text, View } from 'react-native';

function TipsViewScreen({navigation}) {
  return (
      /*screen for tips view*/
    <View style={styles.container}>
      <Text style={styles.title}>Tips view</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

export default TipsViewScreen;
