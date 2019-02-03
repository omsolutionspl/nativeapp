import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { Constants, Permissions, Notifications } from 'expo';

export default class HomeScreen extends React.Component {

  componentDidMount() {
    this._notificationSubscription = Notifications.addListener(
        this._handleNotification
    );
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Details (Drawer)"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Notifications', {
                  url: 'https://mbmapp.com/',
                });
              }}
          />
        </View>
    );
  }
}