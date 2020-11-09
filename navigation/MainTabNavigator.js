import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import MainViewScreen from "../screens/MainPage/MainView/MainViewScreen";
import TipsViewScreen from "../screens/MainPage/TipsView/TipsViewScreen";
import SettingsViewScreen from "../screens/MainPage/ProfileView/SettingsViewScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        /*bottom tab navigator for moving with in the app*/
<Tab.Navigator screenOptions={({route}) => ({
    headerShown: true,
    tabBarIcon:({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused
                ? 'ios-home'
                : 'ios-home';
        }  else if (route.name === 'Tips') {
            iconName = focused ? 'ios-information-circle'
                : 'ios-information-circle-outline';
        }else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
})}>
    <Tab.Screen name="Home" component={MainViewScreen}/>
    <Tab.Screen name="Tips" component={TipsViewScreen}/>
    <Tab.Screen name="Settings" component={SettingsViewScreen}/>
</Tab.Navigator>

    )}
    export default MainTabNavigator;