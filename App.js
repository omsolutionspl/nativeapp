import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert } from 'react-native';
import { Provider, connect } from 'react-redux';
import { AppLoading, Asset, Ionicons, Constants, Notifications } from 'expo';
import { Permissions } from 'expo-permissions';
import { StyleProvider } from '@shoutem/theme';
import * as Font from 'expo-font';

import AppNavigator from './navigation/AppNavigator';
import store from './reducers/store';
import theme from './constants/theme'

import NavigationService from './navigation/NavigationService';
import Toast from './components/Helpers/Extensions/Toast';

var env = process.env.NODE_ENV || 'development';
var config = require('./Config')[env];

/*
if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('rn-why-did-you-update')
  whyDidYouUpdate(React)
}
*/

/**
 * TODO: Check
 * https://github.com/zo0r/react-native-push-notification
 *
 * No foreground push notification in Expo for now
 * https://stackoverflow.com/questions/48437781/ios-expo-push-notifications-when-app-is-in-foreground
 *
 * @returns {Promise<*>}
 */
async function getNotificationPerms() {

  const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  console.log('ExpoPush Token', token);

  return token;

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  /*
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
      },
      user: {
        username: 'Brent',
      },
    }),
  });
  */

}


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };


  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received') {

        console.log('listenForNotifications', notification);

        let toast = Toast.show(notification.data, {
          duration: Toast.durations.LONG,
          shadow: false,
          animation: true,
          hideOnPress: true,
          delay: 0,
          onPress: () => {

            if (notification.data.navigateTo) {
              NavigationService.navigate(
                  notification.data.navigateTo,
                  notification.data.navigateParams || {}
              );
            }
          },
          onShow: () => {
            // calls on toast\`s appear animation start
          },
          onShown: () => {
            // calls on toast\`s appear animation end.
          },
          onHide: () => {
            // calls on toast\`s hide animation start.
          },
          onHidden: () => {
            // calls on toast\`s hide animation end..
          }
        });
      }

      if (notification.origin === 'selected')
      {
        if (notification.data.navigateTo) {
          NavigationService.navigate(
              notification.data.navigateTo,
              notification.data.navigateParams || {}
          );
        }
      }
    });
  };

  componentWillMount() {
    getNotificationPerms();
    this.listener = this.listenForNotifications();
  }

  componentWillUnmount() {
    this.listener && this.listener.remove();
  }

  componentDidMount() {

    setTimeout(function() {
      const localNotification = {
        title: 'You have new Opportunity!',
        body: 'Click here to review.',
        data: {
            title: 'You have new Opportunity!',
            body: 'Click here to review.',
            icon: "md-analytics",
            navigateTo: "OpportunitiesScreen",
            navigateParams: {

            }
        },
        android: {
          sound: true,
        },
        ios: {
          sound: true,
        },
      };
      let sendAfterFiveSeconds = Date.now();
      sendAfterFiveSeconds += 5000;

      const schedulingOptions = {time: sendAfterFiveSeconds};
      Notifications.presentLocalNotificationAsync(localNotification)
    }, 5000);

  }

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
                <AppNavigator
                    ref={navigatorRef => {
                      NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
              </StyleProvider>
            </View>
          </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {

    // const images = [require('./assets/snack-icon.png')];
    //
    // const cacheImages = images.map(image => {
    //   return Asset.fromModule(image).downloadAsync();
    // });

    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/robot-dev.png'),
      //   require('./assets/images/robot-prod.png'),
      //   require('./assets/images/app/mbm-logo-350.png'),
      //   require('./assets/images/app/content/dap-bg.png'),
      //   require('./assets/images/app/login-bg-small-refine.jpg'),
      // ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        //...Ionicons.font,

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
      })
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
