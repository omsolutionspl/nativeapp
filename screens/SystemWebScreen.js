import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class SystemWebScreen extends Component {
  render() {

    const { navigation } = this.props;
    const url = navigation.getParam('url', 'NO-ID');

    return (
        <WebView
            source={{uri: url}}
            style={{marginTop: 20}}
        />
    );
  }
}