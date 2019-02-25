import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, StatusBar } from 'react-native';
import { connectStyle } from "@shoutem/theme/index";
import { Text } from '@shoutem/ui/components/Text'
import { View } from '@shoutem/ui/components/View'
import { Icon } from 'expo'
import { ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor } from '../components/'

import OpportunityBlock from '../containers/OpportunityBlock'

import Colors from "../constants/Colors";

class DetailScreen extends Component {
  static navigationOptions = { };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.opp.id === this.props.opp.id) {
      return false;
    }
  }

  render() {

    const { style, navigation } = this.props
    const { item } = navigation.state.params;

    return (
        <View styleName={"vertical"}>

          <StatusBar
            hidden={true}
            barStyle="light-content"
            backgroundColor="#6a51ae"
          />

          <Text>DETAIL SCREEEN</Text>

        </View>
    );
  }
}

const styles = {

}

// connect the component to the themes
export default connectStyle('mbm.modal.DetailScreen', styles)(DetailScreen);
