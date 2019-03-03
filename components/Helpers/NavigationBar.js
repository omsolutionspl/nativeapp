import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StatusBar,
  Animated,
  Platform,
  View,
} from 'react-native';

/**
 * https://github.com/shoutem/ui/issues/417
 */
import { Device } from "@shoutem/ui/helpers/device-selector.js";

import _ from 'lodash';

import { connectStyle } from '@shoutem/theme';

// import { connectAnimation } from '@shoutem/animation';
// import composeChildren from './composeChildren';

function getBackgroundColor(style) {
  const styleWithBg = _.find(style, (styleDef) =>
      styleDef.backgroundColor && styleDef.backgroundColor !== 'transparent'
  );

  return styleWithBg && styleWithBg.backgroundColor || 'transparent';
}

function setStatusBarStyle(backgroundColor) {
  function chooseBarStyle(bgColor) {
    return color(bgColor).isDark() ? 'light-content' : 'default';
  }

  function setStyle(bgColor) {

    /**
     * https://github.com/shoutem/ui/issues/417
     */
    const { statusBarColor } = this.props ? this.props : { statusBarColor: bgColor };
    // const { statusBarColor } = this.props;

    const color = statusBarColor || bgColor;

    // if (Platform.OS === 'android') {
    //   StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.2)');
    // } else {
    //   const barStyle = chooseBarStyle(color);
    //   StatusBar.setBarStyle(barStyle);
    // }
  }

  // This is little bit hacky, but is the only way
  // to determine the current value of interpolated Animated.Value
  // Other way would be to ask developer to provide Animated.Value
  // used to interpolate backgroundColor. But this way developer doesn't
  // have to concern about status bar if he animates navigation bar color
  if (backgroundColor && backgroundColor._parent instanceof Animated.Value) {
    backgroundColor._parent.addListener((animation) => {
      setStyle(backgroundColor._interpolation(animation.value));
    });
    setStyle(backgroundColor._interpolation(0));
  } else {
    setStyle(backgroundColor);
  }
}

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
      navigation,
      id,
    } = this.props;

    // const backgroundColor = getBackgroundColor(style);
    // setStatusBarStyle(backgroundColor);

    // console.log('NavigationBar', style, navigation);

    // Key must be set to render new screen NavigationBar
    return (
        <Animated.View style={style.container} key={id}>
          {this.renderStatusBar()}
          <View style={style.componentsContainer}>
            <View style={style.leftComponent}>{leftComponent}</View>
            <View style={style.centerComponent}>{centerComponent}</View>
            <View style={style.rightComponent}>{rightComponent}</View>
          </View>
        </Animated.View>
    );
  }
}

const styles = {
  container: {

  },
  componentsContainer: {
    backgroundColor: 'green'
  }
};


// const AnimatedNavigationBar = connectAnimation(composeChildren(NavigationBar));
export default connectStyle('mbm.common.NavigationBar', styles)(NavigationBar);

