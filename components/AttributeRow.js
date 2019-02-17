import React from 'react';

import { Button } from '@shoutem/ui/components/Button'
import { View } from '@shoutem/ui/components/View'
import { Text, Subtitle } from '@shoutem/ui/components/Text'
import { Row } from '@shoutem/ui/components/Row'
import {connectStyle} from "@shoutem/theme/index";

class AttributeRow extends React.Component {
  render() {
    const { style, styleName, header } = this.props
    return <View styleName={styleName}>
      {header ?
          <View>
            <Subtitle>{header}</Subtitle>
          </View>
      : null}
      {this.props.children}
    </View>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.AttributeRow', styles)(AttributeRow);
