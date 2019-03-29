import React from 'react';
import { Icon } from 'expo';

import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import { default as BaseToast } from 'react-native-root-toast';

import RootSiblings from 'react-native-root-siblings';
import ToastContainer from './ToastContainer'
import StyledToast from './StyledToast'

import theme from '../../../constants/theme'
import { StyleProvider } from '@shoutem/theme';

const positions = {
  TOP: 20,
  BOTTOM: -20,
  CENTER: 0
};

const durations = {
  LONG: 3500,
  SHORT: 2000
};

export default class Toast extends BaseToast {
  constructor(props) {
    super(props);
  }

  static show = (messageData, options = {duration: durations.SHORT}) => {
    return new RootSiblings(
        <StyleProvider style={theme()}>
          <ToastContainer {...options} visible={true}>
            <StyledToast
                styleName={'default'}
                icon={messageData.icon}
                title={messageData.title}
                body={messageData.body}
            />
          </ToastContainer>
        </StyleProvider>);
  };

  static hide = toast => { // TODO: Run animation instead
    if (toast instanceof RootSiblings) {
      toast.destroy();
    } else {
      console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
    }
  };
}