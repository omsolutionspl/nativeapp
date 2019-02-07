import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import DrawerContent from '../screens/DrawerContent';

import HomeScreen from '../screens/HomeScreen';
import SystemWebScreen from '../screens/SystemWebScreen'
import SettingsScreen from '../screens/SettingsScreen';
import QRScreen from '../screens/QRScreen';

import { headerNavigationOptions } from '../components/Header';

const MainStackConfig = {
  headerMode: 'none'
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  WebPage: SystemWebScreen
}, MainStackConfig)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : ''}`
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
}, MainStackConfig)

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
}, MainStackConfig)

QRStack.navigationOptions = {
  tabBarLabel: 'QR',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-options'}
      />
  ),
}

const ApplicationNavigator = createBottomTabNavigator({
  HomeStack,
  QRStack,
  SettingsStack
});

const Application = createDrawerNavigator({
  Application: {
    screen: ApplicationNavigator
  }
},
{
  initialRouteName: 'Application',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: DrawerContent
})

export default createStackNavigator({
  Application,
}, { defaultNavigationOptions: headerNavigationOptions })


