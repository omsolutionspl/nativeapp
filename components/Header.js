import React from 'react';
import { Button, Image, View, Text } from 'react-native';

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

export const headerNavigationOptions = {
  headerTitle: <LogoTitle />,
  headerRight: (
      <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#777"
      />
  ),
  headerStyle: {
    backgroundColor: '#fff' //'#f4511e',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}