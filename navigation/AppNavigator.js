import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {inject, observer} from 'mobx-react/dist/index';
import AuthNavigator from "./AuthNavigator";
import MainTabNavigator from "./MainTabNavigator";
import TodaysViewScreen from "../screens/MainPage/TodaysView/TodaysViewScreen";
import RootStore from "../stores/rootStore";

const Stack = createStackNavigator();

function AppNavigator(props) {
    return (
        /*navigation container and navigation stack for joining both of the navigators together */
        <NavigationContainer>
            <Stack.Navigator initialRoute={'Auth'}>
                <Stack.Screen name="Auth" component={AuthNavigator} /*option for disabling the header*/ options={{headerShown: false}} />
                <Stack.Screen name="App" component={MainTabNavigator} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;