import React, { Component } from 'react';
import {Modal, Button, Image, View, Text, TouchableNativeFeedback, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { ROOT_NAV_NAME } from '../constants/Navigation'

class LogoTitle extends React.Component {
  render() {
    return (
        <Image
            source={require('../assets/images/app/mbm-logo-350.png')}
            style={{ width: 210, height: 60 }}
        />
    );
  }
}

export const MainStackHeaderNavigationConfig = ({ navigation }) => {
  return {
    headerTitle: navigation.state.routeName === ROOT_NAV_NAME ? <LogoTitle /> : null,
    headerLeft: <Ionicons
        name={navigation.state.routeName === ROOT_NAV_NAME ? 'md-menu' : 'md-arrow-back'}
        size={26}
        style={{ marginLeft: 16, marginTop: 2 }}
        onPress={() => (navigation.state.routeName === ROOT_NAV_NAME ? navigation.toggleDrawer() : navigation.goBack())}
        color={Colors.defaultText}
    />,
    headerRight: <Ionicons
        name={Platform.OS === 'ios' ? 'ios-contact': 'md-contact'}
        size={28}
        style={{ marginRight: 16, marginTop: 2 }}
        onPress={() => (navigation.navigate('ProfileModal'))}
        color={Colors.defaultText}
    />,
    headerStyle: {
      height: 60,
      backgroundColor: Colors.topNavBarColor,
    },
    headerTintColor: Colors.defaultText,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}

export const MainStackConfig = {

}

export const pageStackNavigationOptions = ({ navigation }) => {
  return {

  }
}