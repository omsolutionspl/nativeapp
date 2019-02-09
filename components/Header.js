import React, { Component } from 'react';
import {Modal, Button, Image, View, Text, TouchableNativeFeedback, Platform} from 'react-native';
import { Icon } from 'expo';
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
    headerLeft: <Icon.Ionicons
        name={navigation.state.routeName === ROOT_NAV_NAME ? 'md-menu' : 'md-arrow-back'}
        size={26}
        style={{ marginLeft: 16, marginTop: 2 }}
        onPress={() => (navigation.state.routeName === ROOT_NAV_NAME ? navigation.toggleDrawer() : navigation.goBack())}
        color={Colors.headerIconColor}
    />,
    headerRight: <Icon.Ionicons
        name={Platform.OS === 'ios' ? 'ios-contact': 'md-contact'}
        size={28}
        style={{ marginRight: 16, marginTop: 2 }}
        onPress={() => (navigation.navigate('ProfileModal'))}
        color={Colors.headerIconColor}
    />,
    headerStyle: {
      height: 60,
      backgroundColor: Colors.topNavBarColor,
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}

export const MainStackConfig = {
  headerMode: 'none'
}

export const pageStackNavigationOptions = ({ navigation }) => {
  return {

  }
}