import React from 'react';

import { Button } from '@shoutem/ui/components/Button'
import { View } from '@shoutem/ui/components/View'
import { Icon } from '@shoutem/ui/components/Icon'
import { Text, Subtitle } from '@shoutem/ui/components/Text'
import { Row } from '@shoutem/ui/components/Row'
import {connectStyle} from "@shoutem/theme/index";

class AttributeRow extends React.Component {
  render() {
    const { style, styleName, header } = this.props
    return <Row styleName={styleName}>
      {/*<Icon name="share" />*/}
      <View styleName="vertical">
        {header ? <Subtitle>{header}</Subtitle> : null}
        {this.props.children}
      </View>
    </Row>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.AttributeRow', styles)(AttributeRow);
