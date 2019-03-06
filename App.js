import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { StyleProvider } from '@shoutem/theme';

import AppNavigator from './navigation/AppNavigator';
import store from './reducers/store';
import theme from './constants/theme'

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
        require('./assets/images/app/content/dap-bg.png'),
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

        'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
        'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
        'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
        'Lato-Medium': require('./assets/fonts/Lato-Medium.ttf'),
        'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
        'Lato-Semibold': require('./assets/fonts/Lato-Semibold.ttf'),
        'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
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
