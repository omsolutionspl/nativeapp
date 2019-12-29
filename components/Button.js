import React, { Component } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text
} from 'react-native';

import { Colors, Fonts } from '../constants';

// import { View } from '@shoutem/ui/components/View'
// import { Text } from '@shoutem/ui/components/Text'

import {connectStyle} from "@shoutem/theme/index";

const borderRadius = 40;

class Button extends Component {

  getText() {
    const { caption, uppercase } = this.props
    return (caption && uppercase === true && caption.toUpperCase()) || caption;
  }

  getIcon() {

    const {
      icon,
      style,
      textColor
    } = this.props;

    if(typeof(icon) === 'function')
      return icon();

    if (icon)
    {
      return <Ionicons
          size={18}
          name={icon}
          style={[
              style.icon,
              textColor && {
                color: textColor,
              },
          ]}
      />
    }

    return null;
  }

  render()
  {
    const { props } = this;
    const caption   = this.getText();
    let icon        = this.getIcon();

    let content;

    if (props.bordered) { //  Bordered style block

      const borderedStyle = [
        styles.button,
        props.small && styles.buttonSmall,
        styles.border,
        props.primary && {
          borderColor: Colors.primary,
        },
        props.secondary && {
          borderColor: Colors.secondary,
        },
        props.bgColor && {
          borderColor: props.bgColor,
        },
        props.rounded && styles.rounded,
      ];

      const textStyle = [
        styles.caption,
        props.small && styles.captionSmall,
        styles.secondaryCaption,
        icon && styles.captionWithIcon,
        props.primary && {
          color: Colors.primary,
        },
        props.secondary && {
          color: Colors.secondary,
        },
        props.blue && {
          borderColor: Colors.secondary,
        },
        props.bgColor && {
          color: props.bgColor,
        },
        props.textColor && {
          color: props.textColor,
        },
      ];

      // No background button content
      content = (
          <View style={borderedStyle}>
            { icon && (
                <View>
                  {icon}
                </View>
            )}
            { props.loading && (
                <ActivityIndicator color="white" />
            )}
            { !props.loading && props.caption && (
                <Text style={textStyle}>
                  {caption}
                </Text>
            )}
            { props.children && props.children }
          </View>
      );
    }
    else    // Default sstyle block
    {
      const isPrimary = props.primary || (!props.primary && !props.secondary);

      let gradientArray = props.bgGradientStart && props.bgGradientEnd ? [
        props.bgGradientStart, props.bgGradientEnd,
      ] : undefined;

      if (!gradientArray) {
        gradientArray = isPrimary ? [Colors.primaryGradientStart, Colors.primaryGradientEnd] :
            [Colors.secondaryGradientStart, Colors.secondaryGradientEnd];
      }

      if (props.bgColor) {
        gradientArray = [props.bgColor, props.bgColor];
      }

      if (props.clear) {
        gradientArray = ['transparent', 'transparent'];
      }

      content = (
          <LinearGradient
            start={[0.5, 1]}
            end={[1, 1]}
            colors={gradientArray}
            style={[
              styles.button,
              props.small && styles.buttonSmall,
              (props.small && ! props.caption) && styles.iconOnly,
              styles.primaryButton,
              props.rounded && { borderRadius },
              props.action && styles.action
            ]}>

            { icon && ( <Text> {icon} </Text> )}

            { props.loading && (<ActivityIndicator color="white" />)}
            { !props.loading && props.caption && (
              <Text
              style={[
                styles.caption,
                props.small && styles.captionSmall,
                icon && styles.captionWithIcon,
                styles.primaryCaption,
                props.clear && styles.buttonClear,
                props.textColor && {
                  color: props.textColor,
                },
              ]}>{caption}</Text>
            )}

            { !props.loading && props.children && props.children }

          </LinearGradient>
      );
    }

    return (
        <TouchableOpacity
            accessibilityTraits="button"
            onPress={props.onPress}
            activeOpacity={props.opacity || 0.4}
            style={[styles.container, props.small && styles.containerSmall, props.style]}
        >
          {content}
        </TouchableOpacity>
    );
  }
}

const HEIGHT = 40;
const HEIGHT_SMALL = 30;

const styles = {
  container: {
    height: HEIGHT,
    // borderWidth: 1 / PixelRatio.get(),
  },
  containerSmall: {
    height: HEIGHT_SMALL,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  iconOnly: {
    paddingHorizontal: 2,
  },
  buttonSmall: {
    paddingLeft: 10,
    paddingRight:12,
  },
  border: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  blueButton: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 5,
  },
  rounded: {
    borderRadius: HEIGHT / 2,
  },
  icon: {
    maxHeight: HEIGHT - 20,
    maxWidth: HEIGHT - 20,
    color:'white',
  },
  caption: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: Fonts.primaryBold,
  },
  captionSmall: {
    fontSize: 12,
    fontWeight: '500',
  },
  captionWithIcon: {
    marginLeft: 4,
  },
  buttonClear: {
    color: Colors.darkBlue
  },
  primaryCaption: {
    color: 'white',
  },
  secondaryCaption: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  action: {
    borderRadius: 20,
    height: HEIGHT,
    width: HEIGHT,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// connect the component to the themess
export default connectStyle('mbm.common.StyledButton', styles)(Button);
