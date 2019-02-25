import React from 'react';
import { ScrollView, Easing, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import { Icon, LinearGradient, Linking } from 'expo';
import { Fonts, Colors, Layout } from '../constants';
import { renderImageOverlay } from '../components/utils/gradients'
import ProfileHeader  from '../components/ProfileHeader'
import QuickInfo  from '../components/QuickInfo'
import { ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor } from '../components/'

class ProfileScreen extends React.Component {
  render() {

    const { profile, style } = this.props;

    return (
        <View styleName={"vertical"}>
          <Text>PROFILE</Text>
        </View>
    )
  }
}

const styles = {

};

// connect the component to the them
export default connectStyle('mbm.ProfileScreen', styles)(ProfileScreen);

