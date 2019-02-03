import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import SystemWebScreen from '../screens/SystemWebScreen'
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QRScreen from '../screens/QRScreen';

import { headerNavigationOptions } from '../components/Header';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  WebPage: SystemWebScreen
}, {defaultNavigationOptions: headerNavigationOptions})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

/*
const LinksStack = createStackNavigator({
  Links: LinksScreen, // shorthanded { screen: HomeScreen }
}, {defaultNavigationOptions: headerNavigationOptions})

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
*/

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
}, {defaultNavigationOptions: headerNavigationOptions})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


const QRStack = createStackNavigator({
  QR: {
    screen: QRScreen
  }
}, {defaultNavigationOptions: headerNavigationOptions})

QRStack.navigationOptions = {
  tabBarLabel: 'QR',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-options'}
      />
  ),
}


export default createBottomTabNavigator({
  HomeStack,
  // LinksStack,
  QRStack,
  SettingsStack
});
