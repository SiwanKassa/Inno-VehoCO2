import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WeeksViewScreen from "../screens/MainPage/WeeksView/WeeksViewScreen";
import CombinedViewScreen from "../screens/MainPage/CombinedVIew/CombinedViewScreen";
import TodaysViewScreen from "../screens/MainPage/TodaysView/TodaysViewScreen";
import TripListScreen from "../screens/MainPage/CombinedVIew/TripListScreen";
import VehoColors from './../screens/VehoColors'

const Tab = createMaterialTopTabNavigator();

function MainViewSwipeNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                headerShown:true,
                showLabel:false,
                showIcon:false,
                indicatorStyle:{opacity:0},
                style: {backgroundColor: VehoColors.background}
            }}
        >
            <Tab.Screen name="Today" options={{ headerShown: false }} component={TodaysViewScreen} />
            <Tab.Screen name="Week" options={{ headerShown: false }} component={WeeksViewScreen} />
            <Tab.Screen name="Combined" options={{ headerShown: false }} component={TripListScreen} />
        </Tab.Navigator>
    );
}
export default MainViewSwipeNavigation;
