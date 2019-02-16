import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk'

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import axiosMiddleware from 'redux-axios-middleware';
import { AppLoading, Asset, Font, Icon } from 'expo';
import axios from 'axios';
import { StyleProvider } from '@shoutem/theme';
import theme from './constants/theme'


import AppNavigator from './navigation/AppNavigator';
import reducer from './reducers/index';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    app: reducer,
    nav: navReducer,
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
/*
const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const AppWithNavigationState = connect((state) => ({
  state: state.nav,
}))(createReduxContainer(AppNavigator));
*/

const store = createStore(
    appReducer,
    applyMiddleware(ReduxThunk)
    // applyMiddleware(promiseMiddleware),
    // applyMiddleware(middleware),//
    // , applyMiddleware(axiosMiddleware(client)));
);


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
          <Provider store={store}>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <StyleProvider style={theme()}>
                <AppNavigator />
              </StyleProvider>
            </View>
          </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/app/mbm-logo-350.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'FontAwesome': require('./assets/fonts/FontAwesome5-Regular-400.otf'),
        'sans-pro': require('./assets/fonts/SourceSansPro-Regular.ttf'),
        'Rubik-Regular': require('./assets/fonts/rubik/Rubik-Regular.ttf'),
        'Rubik-Medium': require('./assets/fonts/rubik/Rubik-Medium.ttf'),
        'Rubik-Bold': require('./assets/fonts/rubik/Rubik-Bold.ttf'),
        'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
