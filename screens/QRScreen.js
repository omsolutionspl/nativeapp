import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { headerNavigationOptions } from '../components/Header';

export default class QRScreen extends React.Component {
  static navigationOptions = headerNavigationOptions;

  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{ flex: 1 }}>
            <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={StyleSheet.absoluteFill}
            />
          </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type (${type}) and data [${data}] has been scanned!`);
  }
}