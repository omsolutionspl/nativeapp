import React from 'react';
import {Platform} from "react-native";
import {createBottomTabNavigator} from "react-navigation";
import TabBarIcon from '../components/TabBarIcon';

import Authentication from "../screens/Auth/AuthenticationScreen";
import SignUp from "../screens/Auth/SignUpScreen";

export default createBottomTabNavigator({
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      tabBarLabel: 'Sign In',
      tabBarIcon: ({ focused }) => (
          <TabBarIcon
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-contact': 'md-contact'}
          />
      ),
    }
  },
  SingUp: {
    screen: SignUp,
    navigationOptions: {
      tabBarLabel: 'Sign Up',
      tabBarIcon: ({ focused }) => (
          <TabBarIcon
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'}
          />
      ),
    }
  }
});