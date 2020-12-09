import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MainViewSwipeNavigation from './MainViewSwipeNavigation';
import TipsViewScreen from '../screens/MainPage/TipsView/TipsViewScreen';
import SettingsViewScreen from '../screens/MainPage/SettingsView/SettingsViewScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VehoColors from '../screens/VehoColors';
import styles from '../screens/MainPage/TodaysView/TodaysViewStyle';

const Tab = createBottomTabNavigator();
//Navigation set up for the bottom tab navigator
function MainTabNavigator() {

  return (
      /*bottom tab navigator for moving between the main*/
      <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: VehoColors.background,
            inactiveBackgroundColor: VehoColors.background,
            inactiveTintColor: VehoColors.input,
            keyboardHidesTabBar: true,
            style: styles.containerTabBar = {
              borderTopWidth: 0,
            },
          }}
          //bottom tab navigator icon setup
          screenOptions={({route}) => ({
            headerShown: true,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                    ? 'ios-home'
                    : 'ios-home';
              } else if (route.name === 'Tips') {
                iconName = focused ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color}/>;
            },
          })}>
        <Tab.Screen name="Home" component={MainViewSwipeNavigation}/>
        <Tab.Screen name="Tips" component={TipsViewScreen}/>
        <Tab.Screen name="Settings" component={SettingsViewScreen}/>
      </Tab.Navigator>
  );
}

export default MainTabNavigator;