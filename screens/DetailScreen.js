import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Button } from 'react-native';
import { Constants, Permissions, Notifications } from 'expo';
import { DrawerItems, SafeAreaView } from 'react-navigation';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});
