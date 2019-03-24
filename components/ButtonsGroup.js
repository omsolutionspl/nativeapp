import React, {Component} from "react";
import {Animated, Platform, ScrollView } from 'react-native';
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
    const { style, bottom, animatedScrollValue } = this.props

    console.log(animatedScrollValue);

    const headerIconSize = animatedScrollValue.interpolate({
      inputRange: [0, 200],
      outputRange: [0.1, 1],
      extrapolate: 'clamp',
    });


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
          <Animated.View style={{ transform: [{scale: headerIconSize}] }}>
            <Icon.Ionicons
                size={button.size || 30}
                name={button.icon}
                style={style.icon}
            />
          </Animated.View>
        : null}

        <Text style={{fontFamily: "FontAwesome"}}>{button.label}</Text>
    </Button>
  }

  getStyleName() {
    return this.props.styleName || 'default';
  }

  render() {

    const { buttons, title, animatedScrollValue } = this.props

    const featuredTranslateY = animatedScrollValue.interpolate({
      inputRange: [0, 123],
      outputRange: [0, -123],
      extrapolate: 'clamp',
    });

    const headerSize = animatedScrollValue.interpolate({
      inputRange: [0, 123],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });


    return (

        <Animated.View
            style={[
              {
                transform: [
                  // { scale: 0.7 }
                  // { translateX: -250 },
                  // { translateY: titleTranslateY },
                ]
              },
            ]}
        >
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
        </Animated.View>
    );
  }
}

const styles = {

};

// connect the component to the themess
export default connectStyle('mbm.common.ButtonsGroup', styles)(ButtonsGroup);
