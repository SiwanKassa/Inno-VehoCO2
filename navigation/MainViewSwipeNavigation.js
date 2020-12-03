import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WeeksViewScreen from '../screens/MainPage/WeeksView/WeeksViewScreen';
import CombinedViewScreen from '../screens/MainPage/CombinedVIew/CombinedViewScreen';
import TodaysViewScreen from '../screens/MainPage/TodaysView/TodaysViewScreen';
import TripListScreen from '../screens/MainPage/CombinedVIew/TripListScreen';
import VehoColors from './../screens/VehoColors';
import styles from '../screens/MainPage/TodaysView/TodaysViewStyle';
import {ScrollView} from 'react-native';

const Tab = createMaterialTopTabNavigator();

function MainViewSwipeNavigation() {
  return (
      <Tab.Navigator tabBar={() => null} springConfig={{damping:700, mass:10}}>
        <Tab.Screen name="Today" options={{headerShown: false}} component={TodaysViewScreen}/>
        <Tab.Screen name="Week" options={{headerShown: false}} component={WeeksViewScreen}/>
        <Tab.Screen name="Combined" options={{headerShown: false}} component={TripListScreen}/>
      </Tab.Navigator>
  );
}

export default MainViewSwipeNavigation;
