import React, {Component} from "react";
import {Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements'
import { Icon } from 'expo';
import { map } from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import deafults from "../constants/styles";

export default class ActionButtons extends Component {

  renderButton(button)
  {
    return <Button
        //icon={<Ionicons name={button.icon} size={12} color={button.color || "white"} />}
        buttonStyle={styles.button}
        title={button.title}
    />
  }

  renderGroup()
  {
    return map(this.props.buttons, (button) => this.renderButton(button))
  }

  render() {

    const { buttons } = this.props

    return (
        <SafeAreaView style={{flex: 1, flexDirection:'row', backgroundColor: '#fff'}}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
            {buttons.length > 1 ? this.renderGroup() : this.renderButton()}
          </View>
        </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
})