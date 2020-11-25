import React, {useState,useEffect} from 'react';
import styles from './WeeksViewStyle.js';
import {inject, observer} from 'mobx-react/dist/index';
import { Text, View } from 'react-native';

import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const WeeksViewScreen =(props)=> {



    return(
        /*screen for home/main view*/
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.mainViewHeader}>Today's data breakdown</Text>
            </View>
            <View style={styles.pieContainer}>

            </View>
            <View style={styles.dataContainer}>

            </View>
        </View>
    );
}
export default WeeksViewScreen;


