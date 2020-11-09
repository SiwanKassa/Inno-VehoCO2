import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginPage/LoginScreen';
import RegistrationScreen from '../screens/RegistrationPage/RegistrationScreen';
const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        /*navigation stack for moving between login and registration page*/
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
        </Stack.Navigator>
    );
}


export default AuthNavigator;
