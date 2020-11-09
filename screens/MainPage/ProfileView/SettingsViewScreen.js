import * as React from 'react';
import styles from './SettingsViewStyle'
import { Text, View } from 'react-native';

function SettingsViewScreen({navigation}) {
    return (
        /*screen for settings view*/
        <View style={styles.container}>
            <Text style={styles.title}>Settings/profile</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        </View>
    );
}
export default SettingsViewScreen;

