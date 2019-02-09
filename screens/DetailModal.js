import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';
import { Constants, Permissions, Notifications } from 'expo';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { connectStyle } from "@shoutem/theme/index";
import { Button } from '@shoutem/ui/components/Button'

class DetailScreen extends Component {
  static navigationOptions = { };

  render() {

    const { style, navigation } = this.props

    return (
        <View style={style.container}>
          <Text>DETAILS MODAL SCHEREEM</Text>
          <Button onPress={() => navigation.goBack()}>
            <Text>CLOSE</Text>
          </Button>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: Constants.statusBarHeight,
    // flexDirection: 'center',
    // justifyContent: 'center',
  }
}

// connect the component to the themes
export default connectStyle('mbm.modal.DetailScreen', styles)(DetailScreen);
