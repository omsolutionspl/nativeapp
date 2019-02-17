import React from 'react';
import {createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import {Platform} from "react-native";

import MainNavigator from './MainNavigator';
import Bootstrap from "./Bootstrap";
import AuthNavigator from "./AuthNavigator"

/*
export default function NavigatorView({ dispatch, navigatorState, authState }) {
  if (authState.isLoggedIn || authState.hasSkippedLogin) {
    return (
        <AppNavigator
            navigation={
              addNavigationHelpers({
                dispatch,
                state: navigatorState,
              })
            }
        />
    );
  } else {
    return <AuthNavigator />;
  }
}
*/

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Bootstrap,
  App: MainNavigator,
  Auth: {
    screen: AuthNavigator,
    navigationOptions: { header: null }
  }
}));