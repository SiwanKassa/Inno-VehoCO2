import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WeeksViewScreen from "../screens/MainPage/WeeksView/WeeksViewScreen";
import CombinedViewScreen from "../screens/MainPage/CombinedVIew/CombinedViewScreen";
import TodaysViewScreen from "../screens/MainPage/TodaysView/TodaysViewScreen";

const Tab = createMaterialTopTabNavigator();

function MainViewSwipeNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false
            }}
        >
            <Tab.Screen name="Today" component={TodaysViewScreen} />
            <Tab.Screen name="Week" component={WeeksViewScreen} />
            <Tab.Screen name="Combined" component={CombinedViewScreen} />
        </Tab.Navigator>
    );
}
export default MainViewSwipeNavigation;