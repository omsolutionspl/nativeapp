import React from 'react';
import { Platform, Easing, Animated } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import { ROOT_NAV_NAME } from '../constants/Navigation'

import DrawerContent from '../screens/DrawerContent';

import HomeScreen from '../screens/HomeScreen';
import SystemWebScreen from '../screens/SystemWebScreen'
import SettingsScreen from '../screens/SettingsScreen';
import QRScreen from '../screens/QRScreen';
import DetailScreen from '../screens/DetailScreen';
import DetailModal from '../screens/DetailModal';

import GoScreen from '../components/__examples__/GoScreen'

import { MainStackHeaderNavigationConfig, MainStackConfig } from '../components/Header';

/*
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps
      const toIndex = index
      const thisSceneIndex = scene.index
      const height = layout.initHeight
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })

      // Since we want the card to take the same amount of time
      // to animate downwards no matter if it's 3rd on the stack
      // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0]
      })

      const slideFromRight = { transform: [{ translateX }] }
      const slideFromBottom = { transform: [{ translateY }] }

      const lastSceneIndex = scenes[scenes.length - 1].index

      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return { opacity: 0 }
        // Slide top screen down
        return slideFromBottom
      }

      return slideFromRight
    },
  }}
*/

const HomeStack = createStackNavigator({
  HomeScreen
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
}

const SettingsStack = createStackNavigator({
  SettingsScreen
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
  QRScreen
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

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  QRStack,
  SettingsStack
});

const RootDrawer = createDrawerNavigator({ MainTabNavigator }, {
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: DrawerContent
})


const MainAppNavigator = createStackNavigator({
  [ROOT_NAV_NAME]: {
    screen: RootDrawer
  },
  SystemWebScreen,
  DetailScreen
}, {
  defaultNavigationOptions: MainStackHeaderNavigationConfig
})

export default createStackNavigator({
  MainAppNavigator,
  ProfileModal: { screen: DetailModal },
  DetailModal
},
{
  headerMode: 'none',
  mode: 'modal',
  // defaultNavigationOptions: {
  //   gesturesEnabled: false,
  // },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 1500,
      easing: Easing.out(Easing.poly(20)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;

      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { transform: [{ translateY }], opacity };
    },
  }),
}
);


