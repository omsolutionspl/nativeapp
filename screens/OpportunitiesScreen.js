import React, {Component} from "react";
import { Platform, ScrollView } from 'react-native';
// import { Icon, ImageBackground } from 'expo';
import { View } from '@shoutem/ui/components/View'
import { Text, Title, Subtitle, Caption } from '@shoutem/ui/components/Text'
import { ListView } from '@shoutem/ui/components/ListView'

// import Colors from '../Colors'
import ActionButtons from '../components/ActionButtons'
import OpportunityBlock from '../containers/OpportunityBlock'
import { SearchBar } from 'react-native-elements';
// import { }

import { connectStyle } from '@shoutem/theme';

class OpportunitiesScreen extends Component {
  static navigationOptions = {
    title: 'OPPORTUNITIES',
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(opp) {
      return <OpportunityBlock item={opp} navigation={this.props.navigation} />
  }

  renderHeader()
  {
    const { navigate } = this.props

    return <ActionButtons theme={"tabs"} buttons={[
      {
        label: "Opportunities",
        active: true,
        //icon:  "md-analytics", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
        onPress: () => navigate('OpportunitiesScreen', {

        })
      },
      {
        label: "Forecasts",
        // icon: "md-people",
        onPress: () => navigate('CompaniesScreen', {

        })
      },
      {
        label: "Matches",
        //icon: "md-globe",
        onPress: () => {
          navigate('DetailModal', {
            url: 'https://mbmapp.com/',
          });
        }
      }

    ]} />
  }

  renderFilters()
  {
    const { navigate } = this.props

    let search = ''

    return <View style={{padding:10}}>
        <SearchBar
          style={{margin:20}}
          lightTheme={true}
          placeholder="Type Here..."
          onChangeText={(e) => console.log(e)}
          //showLoading={true}
          value={search}
      />
    </View>
  }

  render() {

    const { style, navigate, intentions } = this.props


    console.log('render OpportunitSCree');
    return (
        <View>
            <View>
              {this.renderHeader()}
            </View>
            <View style={{marginBottom: 80}}>
              <ListView
                  //renderHeader={this.renderFilters.bind(this)}
                  autoHideHeader={true}
                  data={intentions}
                  renderRow={this.renderRow}
              />
            </View>
        </View>
    );
  }
}

const styles = {

};

// connect the component to the themes
export default connectStyle('mbm.OpportunitiesScreen', styles)(OpportunitiesScreen);
