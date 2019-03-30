import React from 'react';
import { Icon } from 'expo';
import {
  ViewPropTypes,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Easing,
  Keyboard
} from 'react-native';

import { Colors } from '../../../constants'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import Layout from '../../../constants/Layout'
import * as Animatable from 'react-native-animatable';

import {connectStyle} from "@shoutem/theme/index";

const durations = {
  LONG: 5000,
  SHORT: 2500
};

/**
 * /node_modules/react-native-root-toast/lib/ToastContainer.js
 */
class Container extends React.Component {

  handleViewRef = ref => this.view = ref;

  enter = () => this.view.slideInUp(800).then(
      endState => console.log(endState.finished ? 'entering finished' : 'entering cancelled')
  );

  exit = () => {
    clearTimeout(this._exit);
    this.view.slideOutDown(800).then(
        endState => {
          console.log(endState.finished ? 'exiting finished' : 'exiting cancelled')
          // this.props.onPress()
        }
    );
  }

  onPress = () => {

    const { onPress, hideOnPress } = this.props

    // onPress();
    hideOnPress && this.exit();
  }

  componentDidMount() {
    this.enter();
    this._exit = setTimeout(() => this.exit(), durations.LONG)
  }

  componentWillUnmount() {
    this.exit();
  }

  render() {

    const { styleName, style } = this.props;

    return  <TouchableWithoutFeedback onPress={this.onPress}>
        <Animatable.View
            ref={this.handleViewRef}
            styleName={styleName}
            style={{
              width: Layout.window.width,
              flex: 1,
              bottom:0,
              position:'absolute',
            }}
          >
          {this.props.children}
        </Animatable.View>
      </TouchableWithoutFeedback>

  }
}


const styles = {
  content: {

  }
};

// connect the component to the theme
export default connectStyle('mbm.Toast.Container', styles)(Container);
