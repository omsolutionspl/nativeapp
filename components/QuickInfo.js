import React from 'react';
import { Button } from '@shoutem/ui/components/Button'
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";

class QuickInfo extends React.Component {
  render() {
    const { style, styleName } = this.props
    return <View styleName={styleName}>
      {this.props.children}
    </View>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.QuickInfo', styles)(QuickInfo);
