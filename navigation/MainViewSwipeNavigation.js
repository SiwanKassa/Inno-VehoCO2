import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WeeksViewScreen from '../screens/MainPage/WeeksView/WeeksViewScreen';
import TodaysViewScreen from '../screens/MainPage/TodaysView/TodaysViewScreen';
import TripListScreen from '../screens/MainPage/TripList/TripListScreen';

//navigation for the swipe navigation
const Tab = createMaterialTopTabNavigator();

function MainViewSwipeNavigation() {

  return (
      <Tab.Navigator tabBar={() => null} springConfig={{damping:700, mass:10}} initialRouteName={"Today"} backBehavior={"initialRoute"}>
        <Tab.Screen name="Today" options={{headerShown: false}} component={TodaysViewScreen}/>
        <Tab.Screen name="Week" options={{headerShown: false}} component={WeeksViewScreen}/>
        <Tab.Screen name="Combined" options={{headerShown: false}} component={TripListScreen}/>
      </Tab.Navigator>
  );
}

export default MainViewSwipeNavigation;
