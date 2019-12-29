import React from 'react';

import { View } from '@shoutem/ui/components/View'
import { Ionicons } from '@expo/vector-icons'
import { Text, Subtitle, Heading, Caption } from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";
import { Anchor } from './index'

class ContactBlock extends React.Component {
  render() {
    const { style, styleName, person, mail, phone } = this.props
    return <View styleName="vertical">

      {person ?
      <View styleName="horizontal h-start">
        <Heading>
          {person}
        </Heading>
      </View>
      :null}

      <View styleName="horizontal h-start">
        <Ionicons
            size={17}
            name={"md-mail"}
            style={style.icon}
        />
        <Caption>
          <Anchor href={`mailto:${mail}`}>{mail}</Anchor>
        </Caption>
      </View>

      <View styleName="horizontal h-start">
        <Ionicons
            size={17}
            name={"md-call"}
            style={style.icon}
        />
        <Caption>
          <Anchor href={`tel:${phone}`}>{phone}</Anchor>
        </Caption>
      </View>

    </View>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.ContactBlock', styles)(ContactBlock);
