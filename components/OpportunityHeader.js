import React from 'react';

import { Button } from '@shoutem/ui/components/Button'
import { View } from '@shoutem/ui/components/View'
import { Text, Subtitle } from '@shoutem/ui/components/Text'
import { Row } from '@shoutem/ui/components/Row'
import {changeColorAlpha, connectStyle, createSharedStyle} from "@shoutem/theme/index";
import {textComponents, viewComponents} from "@shoutem/ui/theme";

class OpportunityHeader extends React.Component {
  render() {
    const { style, styleName, header } = this.props
    return <View styleName={styleName}>
      {this.props.children}
    </View>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.OpportunityHeader', styles)(OpportunityHeader);
