import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Text } from 'react-native'

export default class Authentication extends React.Component {
  static navigationOptions = {
    title: 'Authentication',
  };

  render() {
    return (
        <Text style={{fontWeight: 'bold'}}>
          I am bold
          <Text style={{color: 'red'}}>
            and red
          </Text>
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
