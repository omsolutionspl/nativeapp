import React from 'react';

import { View } from '@shoutem/ui/components/View'
import { Tile } from '@shoutem/ui/components/Tile'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Overlay } from '@shoutem/ui/components/Overlay'
import { map } from 'lodash'
import { Text, Subtitle, Heading, Caption, Title } from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";
import { Layout } from '../constants'
import Button from '../components/Button'

class EmptyStackPlaceholder extends React.Component {


  render() {
    const { style, styleName, data: { header, buttons } } = this.props

    {/* TODO Fix layout */}

    return <ImageBackground
          styleName="large-banner"
          style={{width: /*Layout.width - 10*/ 200 }}
          source={require('../assets/images/app/login-bg-small-refine.jpg')}
          onPress={() => alert('12')}
      >
        <Tile>
          <Overlay styleName="image-overlay">
            <Text>{header}</Text>
            <View styleName={"vertical"}>
              {map(buttons, (button, i) => <Button
                  key={`empty-stack-btn${i}`}
                  caption={button.label}
                  onPress={button.onPress}
                  icon={button.icon}
                  textColor={"white"}
                  small
                  clear
              />)}
            </View>
          </Overlay>
        </Tile>
      </ImageBackground>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.EmptyStackPlaceholder', styles)(EmptyStackPlaceholder);
