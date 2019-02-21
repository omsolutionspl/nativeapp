import React  from 'react';
import { Linking } from 'react-native';
import { Text} from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";

class Anchor extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
        <Text {...this.props} onPress={this._handlePress}>
          {this.props.children}
        </Text>
    );
  }
}

const styles = {

}

// connect the component to the themess
export default connectStyle('mbm.common.Anchor', styles)(Anchor);
