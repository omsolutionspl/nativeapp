import React, {Component} from "react";
import PropTypes from 'prop-types';

import {Animated, Platform, ScrollView } from 'react-native';
// import { Constants } from 'expo';
// import { map } from 'lodash';

import { Ionicons } from '@expo/vector-icons';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Text, Heading } from '@shoutem/ui/components/Text'
import { Divider } from '@shoutem/ui/components/Divider'

import { Colors, Fonts } from "../constants";
import TabBarIcon from '../components/Helpers/TabBarIcon';
import TabBarText from '../components/Helpers/TabBarText';

import { connectStyle } from '@shoutem/theme';

class ButtonsGroup extends Component {

  static propTypes = {
    buttons: PropTypes.array.isRequired,
    // asdasd: PropTypes.object.isRequired
  };

  static defaultProps = {
    // asdasd: {},
  };

  // stacked
  renderButton(button)
  {
    const { style, bottom, animatedScrollValue, smaller } = this.props

    // console.log(animatedScrollValue);

    const headerIconSize = animatedScrollValue ? animatedScrollValue.interpolate({
      inputRange: [0, 150, 300],
      outputRange: [1, 1, 0.7],
      extrapolate: 'clamp',
    }) : 1;

    const iconTranslateX = animatedScrollValue ? animatedScrollValue.interpolate({
      inputRange: [0, 150, 300],
      outputRange: [1, -10, -50],
      extrapolate: 'clamp',
    }) : 0;

    const iconTranslateY = animatedScrollValue ? animatedScrollValue.interpolate({
      inputRange: [0, 150, 300],
      outputRange: [1, 10, 32],
      extrapolate: 'clamp',
    }) : 0;

    const labelTranslateY = animatedScrollValue ? animatedScrollValue.interpolate({
      inputRange: [0, 150, 300],
      outputRange: [1, -10, -32],
      extrapolate: 'clamp',
    }) : 0;

    const labelTranslateX = animatedScrollValue ? animatedScrollValue.interpolate({
      inputRange: [0, 300],
      outputRange: [0, 20],
      extrapolate: 'clamp',
    }) : 0;


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
        styleName={`${this.getStyleName()} ${button.active ? 'active' : ''}`}>

        {button.icon ?
          <Animated.View style={{
            transform: [
              {scale: headerIconSize},
              // {translateY: iconTranslateY},
              {translateX: iconTranslateX}
            ]
          }}>
            <Ionicons
                // size={button.size || 30}
                name={button.icon}
                style={[
                    style.icon,
                    smaller && style.iconSmall
                ]}
            />
          </Animated.View>
        : null}

        <Animated.View style={{
          transform: [
            // {scale: headerIconSize},
            {translateY: labelTranslateY},
            {translateX: labelTranslateX}
          ]
        }}>
          <Text style={style.label}>{button.label}</Text>
        </Animated.View>
    </Button>
  }

  getStyleName() {
    return this.props.styleName || 'default';
  }

  render() {

    const { buttons, title, animatedScrollValue } = this.props

    /*
    const featuredTranslateY = animatedScrollValue ? animatedScrollValue.interpolate({
      inputRange: [0, 123],
      outputRange: [0, -123],
      extrapolate: 'clamp',
    }) : 1;
    */

    const buttonsSize = animatedScrollValue ? animatedScrollValue.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0.8],
      extrapolate: 'clamp',
    }) : 1;

    return (


        <View styleName={this.getStyleName()}>

          {title?
          <View tyleName={"horizontal v-start"}>
            <Heading>{title}</Heading>
          </View>
          :null}

          <Animated.View
              style={[
                {

                  transform: [
                    { scale: buttonsSize }
                    // { translateX: -250 },
                    // { translateY: titleTranslateY },
                  ]
                },
              ]}
          >
            <View styleName={`horizontal h-center`}>
              {buttons.map(button => this.renderButton(button))}
            </View>
          </Animated.View>

        </View>
    );
  }
}

const styles = {

};

// connect the component to the themess
export default connectStyle('mbm.common.ButtonsGroup', styles)(ButtonsGroup);
