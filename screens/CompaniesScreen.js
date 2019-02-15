import React, {Component} from "react";
import { Platform, ScrollView } from 'react-native';
//import { Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Text } from '@shoutem/ui/components/Text'
import { ListView } from '@shoutem/ui/components/ListView'
import { connectStyle } from '@shoutem/theme';

class CompaniesScreen extends Component {
  static navigationOptions = {
    title: 'COMPANIES',
  };

  render() {

    const { style, intentions } = this.props

    return (

        <View>
          <View>
            <Text>CCCC</Text>
          </View>
          <View style={{marginBottom: 80}}>
            <ListView

                autoHideHeader={true}
                data={intentions}
                renderRow={(opp) => <Text>{opp.id}</Text>}
            />
          </View>
        </View>
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
