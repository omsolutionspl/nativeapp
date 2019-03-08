import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StatusBar,
  Animated,
  Platform
} from 'react-native';
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'

/**
 * https://github.com/shoutem/ui/issues/417
 */
import { Device } from "@shoutem/ui/helpers/device-selector.js";

import _ from 'lodash';

import { connectStyle } from '@shoutem/theme';

class NavigationBar extends Component {
  static propTypes = {
    leftComponent: PropTypes.node,
    centerComponent: PropTypes.node,
    rightComponent: PropTypes.node,
    style: PropTypes.object,
    id: PropTypes.string,
    statusBarColor: PropTypes.string,
  };

  static defaultProps = {
    id: 'default',
  };

  renderStatusBar() {
    const { style } = this.props;

    return Device.select({
      iPhoneX: (<View style={style.statusBar} />),
      default: null,
    });
  }

  render() {
    const {
      leftComponent,
      rightComponent,
      centerComponent,
      style,
      id,
      styleName,
    } = this.props;

    // console.log('NavigationBar', style, navigation);

    // Key must be set to render new screen NavigationBar
    return (
        <Animated.View style={style.container} key={id}>
          <View styleName={styleName} style={{flex:1}}>
            <View style={style.componentsContainer}>
              <View style={style.leftComponent}>{leftComponent}</View>
              <View style={style.centerComponent}>{centerComponent}</View>
              {rightComponent ?
                <View style={style.rightComponent}>{rightComponent}</View>
              : null}
            </View>
          </View>
        </Animated.View>
    );
  }
}

const styles = {

};

// const AnimatedNavigationBar = connectAnimation(composeChildren(NavigationBar));
export default connectStyle('mbm.common.NavigationBar', styles)(NavigationBar);

