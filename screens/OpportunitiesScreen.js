import React, {Component} from "react";
import {
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo';
import { Colors, Fonts, Layout } from '../constants';
import { View } from '@shoutem/ui/components/View'
import { Text, Title, Subtitle, Caption } from '@shoutem/ui/components/Text'

import ButtonsGroup from '../components/ButtonsGroup'
import OpportunityBlock from '../containers/OpportunityBlock'
import { SearchBar } from 'react-native-elements';
import { FILTER_OPPORTUNITIES, FILTER_FORECASTS, FILTER_MATCHES } from '../reducers/Features/Opportunities';
import { connectStyle } from '@shoutem/theme';

const ITEM_HEIGHT = 120

class OpportunitiesScreen extends Component {
  static navigationOptions = {
    title: 'OPPORTUNITIES',
  };

  state = {
    activeSections: [],
  };


  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {activeSections: []}
  }

  renderRow(opp, index, mode) {
    return <OpportunityBlock
        item={opp}
        index={index}
        mode={mode}
        listingReg={this.flatList} // for scroll maintain after collapsable
        navigation={this.props.navigation}
    />
  }

  renderHeader()
  {
    const { onTabSwitch, currentTab } = this.props

    return <ButtonsGroup styleName={"tabs"} buttons={[
      {
        label: "Opportunities",
        active: currentTab === FILTER_OPPORTUNITIES,
        //icon:  "md-analytics", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
        onPress: () => onTabSwitch(FILTER_OPPORTUNITIES)
      },
      {
        label: "Forecasts",
        active: currentTab === FILTER_FORECASTS,
        // icon: "md-people",
        onPress: () => onTabSwitch(FILTER_FORECASTS)
      },
      {
        label: "Matches",
        active: currentTab === FILTER_MATCHES,
        //icon: "md-globe",
        onPress: () => onTabSwitch(FILTER_MATCHES)
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
        <View styleName={"vertical"} style={styles.container}>
            {/*
            <View>
              {this.renderHeader()}
            </View>
            */}
            <View /*style={{marginBottom: 60}} */>
              <FlatList
                  ref={(list) => this.flatList = list}
                  //renderHeader={this.renderFilters.bind(this)}
                  autoHideHeader={true}
                  initialNumToRender={3}
                  maxToRenderPerBatch={3}
                  keyExtractor={item => item.id}
                  // getItemLayout={(data, index) => (
                  //     {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                  // )}
                  data={intentions}
                  renderItem={({ item, index }) => this.renderRow(item, index)}
              />
            </View>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
};

// connect the component to the themes
export default  connectStyle('mbm.OpportunitiesScreen', styles)(OpportunitiesScreen);
