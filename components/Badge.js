import React from 'react';
// import { Text } from 'react-native';
import { Button } from '@shoutem/ui/components/Button'
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import { Row } from '@shoutem/ui/components/Row'
import {connectStyle} from "@shoutem/theme/index";

class Badge extends React.Component {
  render() {
    const { style, styleName } = this.props
    return <View styleName={styleName}>
        <Text style={style}>{this.props.children}</Text>
      </View>
  }
}

const styles = {

}

// connect the component to the theme
export default connectStyle('mbm.common.Badge', styles)(Badge);
