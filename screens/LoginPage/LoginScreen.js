import * as React from 'react';
import styles from './LoginScreenStyle.js'
import { Text, View, Button } from 'react-native';

 function LoginScreen ({navigation}){
    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Welcome To</Text>
          <Text style={styles.titleText}>VEHO CO2 APP</Text>
            /*button for moving to register page*/
            <Button title={'Register'} onPress={()=> navigation.navigate('Register')} />
          /*button for login function*/
            <Button title={'Login'} onPress={()=> navigation.navigate('App')} />
        </View>

    );
}

export default LoginScreen;
