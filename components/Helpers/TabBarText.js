import React from 'react';
import { Icon } from 'expo';

import { Text } from '@shoutem/ui/components/Text'
import Colors from '../../constants/Colors';

export default class TabBarText extends React.Component {
  render() {
    return (
        <Text
            styleName={"h-center"}
            style={{
              fontSize: 11,
              fontFamily: "FontAwesome",
              color: this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}}
        >{this.props.text}</Text>
    );
  }
}