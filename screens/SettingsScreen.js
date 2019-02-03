import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View } from 'react-native';
import { headerNavigationOptions } from '../components/Header';

export default class SettingsScreen extends Component {

  render() {

    return <ExpoConfigView />

    return <Text style={{fontWeight: 'bold'}}>
      I am bold
      <Text style={{color: 'red'}}>
        and red
      </Text>
    </Text>;
  }
}
