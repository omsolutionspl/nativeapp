import React from 'react';
import {Platform} from "react-native";
import {createBottomTabNavigator} from "react-navigation";
import TabBarIcon from '../components/Helpers/TabBarIcon';
import TabBarText from '../components/Helpers/TabBarText';

import Authentication from "../screens/Auth/AuthenticationScreen";
import SignUp from "../screens/Auth/SignUpScreen";

export default createBottomTabNavigator({
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      tabBarLabel: ({ focused }) => (
          <TabBarText focused={focused} text={'Sign In'} />
      ),
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
      tabBarLabel: ({ focused }) => (
          <TabBarText focused={focused} text={'Sing Up'} />
      ),
      tabBarIcon: ({ focused }) => (
          <TabBarIcon
              focused={focused}
              name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'}
          />
      ),
    }
  }
},{
  tabBarOptions: {
    style: {
      height:54,
      paddingBottom:6,
      paddingTop:6
    },
  }
});