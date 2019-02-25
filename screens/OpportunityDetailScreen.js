import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, StatusBar } from 'react-native';
import { connectStyle } from "@shoutem/theme/index";
import { Text } from '@shoutem/ui/components/Text'
import { View } from '@shoutem/ui/components/View'
import { Icon } from 'expo'
import { Button } from '@shoutem/ui/components/Button'

import OpportunityBlock from '../containers/OpportunityBlock'
import Colors from "../constants/Colors";

class OpportunityDetailScreen extends Component {
  static navigationOptions = { };
  
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.opp.id === this.props.opp.id) {
      return false;
    }
  }

  render() {

    const { style, navigation } = this.props
    const { opp } = navigation.state.params;

    return (
        <View styleName={"vertical"}>

          <StatusBar hidden={true}
              barStyle="light-content"
              backgroundColor="#6a51ae"
          />

          <OpportunityBlock item={opp} mode={'full'} navigation={navigation} />

        </View>
    );
  }
}

const styles = {

}

// connect the component to the themes
export default connectStyle('mbm.modal.OpportunityDetailScreen', styles)(OpportunityDetailScreen);
