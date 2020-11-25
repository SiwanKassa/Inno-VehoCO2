import React, {useState,useEffect} from 'react';
import styles from './CombinedViewStyle.js';
import {inject, observer} from 'mobx-react/dist/index';
import { Text, View } from 'react-native';
import {VictoryPie, VictoryLabel} from 'victory-native'
import Svg from 'react-native-svg/src'
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

function CombinedViewScreen() {

    return(
        /*screen for home/main view*/
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.mainViewHeader}>Combined data breakdown</Text>
            </View>
            <View style={styles.pieContainer}>

            </View>
            <View style={styles.dataContainer}>

            </View>
        </View>
    );
}
export default CombinedViewScreen;


