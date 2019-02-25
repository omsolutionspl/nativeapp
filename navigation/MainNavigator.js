import React from 'react';
import {Platform, Easing, Animated, StyleSheet} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import { Colors, Fonts } from '../constants';

import { ROOT_NAV_NAME } from '../constants/Navigation'

import DrawerContent from '../screens/DrawerContent';

import SystemWebScreen from '../screens/SystemWebScreen'
import DetailScreen from '../screens/DetailScreen';
import OpportunityDetailScreen from '../screens/OpportunityDetailScreen';
import CompaniesScreen from '../screens/CompaniesScreen';
import DetailModal from '../screens/DetailModal';
import ProfileScreen from '../containers/Profile';

import MainTabNavigator from './MainTabNavigator'

// Connected with redux
import Profile from '../containers/Profile';
import OpportunitiesScreen from '../containers/Opportunities';
import OpportunityBlock from '../containers/OpportunityBlock'
import EventsScreen from '../containers/Events';
import ChatScreen from '../containers/Chat';
import MessagesScreen from '../containers/Message';
import { MainStackHeaderNavigationConfig } from '../components/Header';

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
  EventsScreen,
  DetailScreen,
  Opportunity: {
    screen: OpportunityBlock
  },
  Chats: {
    screen: ChatScreen,
    params: { label: "Let's Connect"}
  },
  Messages: {
    screen: MessagesScreen,
    params: { label: "MessageScreen"}
  },
},
{
  defaultNavigationOptions: MainStackHeaderNavigationConfig
});

export default createStackNavigator({
  Main: {
    screen: MainAppNavigator
  },
  ProfileModal: {
    screen: DetailModal,
    params: {
      component: navigation => <Profile navigation={navigation} />
    }
  },
  OpportunityDetailModal: {
    screen: DetailModal,
    params: {
      component: navigation => <OpportunityBlock item={navigation.state.params.opp} mode={'full'} navigation={navigation} />
    }
  },
  DetailModal: {
    screen: DetailModal
  }
},
{
  headerMode: 'none',
  mode: 'modal',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 1500,
      easing: Easing.out(Easing.poly(8)),
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