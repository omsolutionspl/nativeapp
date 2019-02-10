import React from 'react';
import { Platform, Easing, Animated } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/Helpers/TabBarIcon';
import TabBarText from '../components/Helpers/TabBarText';
import { ROOT_NAV_NAME } from '../constants/Navigation'

import DrawerContent from '../screens/DrawerContent';

import HomeScreen from '../screens/HomeScreen';
import SystemWebScreen from '../screens/SystemWebScreen'
import AgendaScreen from '../screens/AgendaScreen';
import QRScreen from '../screens/QRScreen';
import DetailScreen from '../screens/DetailScreen';
import OpportunityDetailScreen from '../screens/OpportunityDetailScreen';
import CompaniesScreen from '../screens/CompaniesScreen';
import DetailModal from '../screens/DetailModal';

// Connected with redux
import OpportunitiesScreen from '../containers/Opportunities';

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
  tabBarLabel: ({ focused }) => (
      <TabBarText focused={focused} text={'Dashboard'} />
  ),
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
                ? `ios-apps${focused ? '' : ''}`
                : 'md-apps'
          }
      />
  ),
}

const AgendaStack = createStackNavigator({
  AgendaScreen
}, MainStackConfig)

AgendaStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
      <TabBarText focused={focused} text={'Agenda'} />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
};


const QRStack = createStackNavigator({
  QRScreen
}, MainStackConfig)

QRStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
      <TabBarText focused={focused} text={'QR'} />
  ),
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-options'}
      />
  ),
}

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  AgendaStack,
  QRStack,
});

const RootDrawer = createDrawerNavigator({ MainTabNavigator }, {
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: DrawerContent
});

const MainAppNavigator = createStackNavigator({
  [ROOT_NAV_NAME]: {
    screen: RootDrawer
  },
  SystemWebScreen,
  CompaniesScreen,
  OpportunitiesScreen,
  DetailScreen
},
{
  defaultNavigationOptions: MainStackHeaderNavigationConfig
});

export default createStackNavigator({
  MainAppNavigator,
  ProfileModal: {
    screen: DetailModal
  },
  OpportunityDetailModal: {
    screen: OpportunityDetailScreen,
  },
  DetailModal
},
{
  headerMode: 'none',
  mode: 'modal',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 1500,
      easing: Easing.out(Easing.poly(10)),
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
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
    },
  }),
}
);


