import React, {Component} from "react";
import { Platform, ScrollView } from 'react-native';
//import { Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Screen } from '@shoutem/ui/components/Screen'
import { connectStyle } from '@shoutem/theme';

class CompaniesScreen extends Component {
  static navigationOptions = {
    title: 'COMPANIES',
  };

  render() {

    const { style } = this.props

    return (

        <Screen styleName="">

        </Screen>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

// connect the component to the theme
export default connectStyle('mbm.CompaniesScreen', styles)(CompaniesScreen);
