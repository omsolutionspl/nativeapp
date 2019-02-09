import React, {Component} from "react";
import { Platform, ScrollView } from 'react-native';
// import { Icon, ImageBackground } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { View } from '@shoutem/ui/components/View'
import { Button } from '@shoutem/ui/components/Button'
import { Text, Title, Subtitle } from '@shoutem/ui/components/Text'
import { ListView } from '@shoutem/ui/components/ListView'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
// import Colors from '../Colors'
import ActionButtons from '../components/ActionButtons'
import { SearchBar } from 'react-native-elements';

import { connectStyle } from '@shoutem/theme';

class OpportunitiesScreen extends Component {
  static navigationOptions = {
    title: 'OPPORTUNITIES',
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [
        {
          "name": "Gaspar Brasserie",
          "address": "185 Sutter St, San Francisco, CA 94109",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
        },
        {
          "name": "Chalk Point Kitchen",
          "address": "527 Broome St, New York, NY 10013",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        },
        {
          "name": "Kyoto Amber Upper East",
          "address": "225 Mulberry St, New York, NY 10012",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        },
        {
          "name": "Sushi Academy",
          "address": "1900 Warner Ave. Unit A Santa Ana, CA",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
        },
        {
          "name": "Sushibo",
          "address": "35 Sipes Key, New York, NY 10012",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
        },
        {
          "name": "Mastergrill",
          "address": "550 Upton Rue, San Francisco, CA 94109",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
        }
      ],
    }
  }

  renderRow(restaurant) {
    return (
        <View>
          <ImageBackground
              styleName="large-banner"
              source={{ uri: restaurant.image.url }}
          >
            <Text>
              <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
              <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
            </Text>
          </ImageBackground>
        </View>
    );
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

    const { style } = this.props

    return (
        <View>
            <View>
              {this.renderHeader()}
            </View>
            <View style={{marginBottom:200}}>
              <ListView
                  //renderHeader={this.renderFilters.bind(this)}
                  autoHideHeader={true}
                  data={this.state.restaurants}
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
