import * as React from 'react';
import styles from './MainViesStyle.js'

import { Text, View } from 'react-native';

function MainViewScreen({}) {
  return (
      /*screen for home/main view*/
    <View style={styles.container}>
      <Text style={styles.title}>Home/main page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
export default MainViewScreen;

