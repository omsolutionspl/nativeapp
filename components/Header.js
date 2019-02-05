import React from 'react';
import { Modal, Button, Image, View, Text, TouchableNativeFeedback} from 'react-native';
import { Icon } from 'expo';
import Colors from "../constants/Colors";

// import {  } from 'react-navigation';

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

/*
class ModalExample extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>
    );
  }
}
*/

export const headerNavigationOptions = ({ navigation }) => {
  return {
    headerTitle: <LogoTitle/>,
    headerLeft: (
        <Icon.Ionicons
            name={'ios-menu'}
            size={26}
            style={{ marginLeft: 10, marginTop: 2 }}
            onPress={() => navigation.toggleDrawer()} //
            color={"#000000"}
        />

    ),
    headerStyle: {
      height: 60,
      backgroundColor: '#fff' //'#f4511e',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
}

export const pageStackNavigationOptions = ({ navigation }) => {
  return {

  }
}