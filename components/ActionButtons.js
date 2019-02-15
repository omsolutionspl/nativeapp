import React, {Component} from "react";
import {Platform, ScrollView, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
// import { Constants } from 'expo';
import { map } from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Text } from '@shoutem/ui/components/Text'
import { Divider } from '@shoutem/ui/components/Divider'
import Colors from '../constants/Colors';

import { connectStyle } from '@shoutem/theme';

class ActionButtons extends Component {

  renderButton(button)
  {
    const { style } = this.props

    // Workaround for forcing black color on .tabs .active
    let __color = (this.getStyleName() && button.active) ? {color: Colors.black} : {}
    return <Button
        onPress={button.onPress}
        key={`btn_${button.label}`}
        //style={style.button}
        styleName={`stacked clear ${this.getStyleName()} ${button.active ? 'active' : ''}`}>
        {button.icon ?
          <Ionicons
              name={button.icon}
              style={style.icon}
          />: null}
          <Text style={{...style.buttonText, ...__color}}>{button.label}</Text>
    </Button>
  }

  getStyleName() {
    return this.props.theme || 'default';
  }

  render() {

    const { buttons, style, title } = this.props

    return (

        <View style={style.container}>
          {title?
          <View style={style.header} styleName={"horizontal v-start"}>
            <Text style={style.headerText} styleName={"bold"}>
              {title}
            </Text>
          </View>
          :null}
          <View styleName={`horizontal space-between ${this.getStyleName()}`} style={style.buttonsContainer}>
            {buttons.map(button => this.renderButton(button))}
          </View>
        </View>
    );
  }
}

const styles = {
  'shoutem.ui.View': {
    'shoutem.ui.View': {
      '.tabs': {
        height: 40,
        paddingLeft: 0,
        paddingRight: 0
      },

      'shoutem.ui.Button': {
        '.tabs': {
          height: 40,
          padding:0,
          margin:0,
        },
        '.active': {
          backgroundColor: Colors.topNavBarColor,
          color: Colors.headerIconColor,
        },
        'shoutem.ui.Text': {
          color: Colors.black
        },
      }
    },
  }
};

// connect the component to the theme
export default connectStyle('mbm.dashboard.ActionButtons', styles)(ActionButtons);
