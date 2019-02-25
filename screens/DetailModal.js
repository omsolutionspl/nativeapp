import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connectStyle } from "@shoutem/theme/index";
import { View } from '@shoutem/ui/components/View'
import { Icon } from 'expo'
import { ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor } from '../components/'

class DetailModal extends Component {
  static navigationOptions = { };

  render() {

    const { style, navigation } = this.props
    const { component } = navigation.state.params;

    return (
        <View styleName={"vertical"}>

          <StatusBar
              hidden={true}
              barStyle="light-content"
              backgroundColor="#6a51ae"
          />

          {/* TODO Close btn here */}
          <GoBackBtn {...this.props} />

          {component(navigation)}

        </View>
    );
  }
}

const styles = {

}

// connect the component to the themes
export default connectStyle('mbm.modal.DetailModal', styles)(DetailModal);
