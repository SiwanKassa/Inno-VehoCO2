import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View,Button } from 'react-native';

import styles from './RegistrationScreenStyle.js'


function RegistrationScreen ({navigation}){



    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Register</Text>
            <Button     /*Button for moving back to login page*/
                title={'Back to login'} onPress={()=> navigation.navigate('Login')} />

        </View>
    );
}

export default RegistrationScreen;