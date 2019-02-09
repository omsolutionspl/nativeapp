import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Button } from 'react-native';
import { Constants, Permissions } from 'expo';

export default class DetailScreen extends React.Component {
  static navigationOptions = { };

  render() {
    return (
        <View style={{ marginTop: 0 }}>
          <Text>DETAILS</Text>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
};
