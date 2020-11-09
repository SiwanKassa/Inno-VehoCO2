import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from "./AuthNavigator";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        /*navigation container and navigation stack for joining both of the navigators together */
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Auth" component={AuthNavigator} /*option for disabling the header*/ options={{headerShown: false}} />
                <Stack.Screen name="App" component={MainTabNavigator} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default  AppNavigator;