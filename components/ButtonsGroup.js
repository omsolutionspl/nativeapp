import React, {Component} from "react";
import {Platform, ScrollView, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
// import { Constants } from 'expo';
// import { map } from 'lodash';
import { Icon } from 'expo';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Text, Heading } from '@shoutem/ui/components/Text'
import { Divider } from '@shoutem/ui/components/Divider'

import { Colors, Fonts } from "../constants";
import TabBarIcon from '../components/Helpers/TabBarIcon';
import TabBarText from '../components/Helpers/TabBarText';

import { connectStyle } from '@shoutem/theme';

class ButtonsGroup extends Component {

  // stacked
  renderButton(button)
  {
    const { style, bottom } = this.props

    if (bottom === true)
    {
      return <Button
          onPress={button.onPress}
          key={`btn_${button.label}`}
          styleName={`full-width ${this.getStyleName()} ${button.active ? 'active' : ''}`}>

        {button.icon ? <TabBarIcon focused={false} name={button.icon} /> :null}
        <TabBarText focused={false} text={button.label} />

      </Button>
    }

    return <Button
        onPress={button.onPress}
        key={`btn_${button.label}`}
        styleName={`full-width ${this.getStyleName()} ${button.active ? 'active' : ''}`}>

        {button.icon ?
          <Icon.Ionicons
              size={button.size || 30}
              name={button.icon}
              style={style.icon}
          />
        : null}

        <Text style={{fontFamily: "FontAwesome"}}>{button.label}</Text>
    </Button>
  }

  getStyleName() {
    return this.props.styleName || 'default';
  }

  render() {

    const { buttons, title } = this.props

    return (

        <View styleName={this.getStyleName()}>

          {title?
          <View tyleName={"horizontal v-start"}>
            <Heading>{title}</Heading>
          </View>
          :null}

          <View styleName={`horizontal h-center`}>
            {buttons.map(button => this.renderButton(button))}
          </View>

        </View>
    );
  }
}

const styles = {

};

// connect the component to the themess
export default connectStyle('mbm.common.ButtonsGroup', styles)(ButtonsGroup);
