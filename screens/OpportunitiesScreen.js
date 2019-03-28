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

import { filter } from 'lodash';
import { Colors, Fonts, Layout } from '../constants';
import { View } from '@shoutem/ui/components/View'
import { Text, Title, Subtitle, Caption } from '@shoutem/ui/components/Text'
import { ListView } from '@shoutem/ui/components/ListView'

import ButtonsGroup from '../components/ButtonsGroup'
import OpportunityBlock from '../containers/OpportunityBlock'

import { FILTER_OPPORTUNITIES, FILTER_FORECASTS, FILTER_MATCHES } from '../reducers/Features/Opportunities';
import { connectStyle } from '@shoutem/theme';
import OpportunitiesFilterBar from '../containers/OpportunitiesFilterBar'
import NavigationBar from '../components/Helpers/NavigationBar'
import {ROOT_NAV_NAME} from "../constants/Navigation";

const ITEM_HEIGHT = 120

class OpportunitiesScreen extends Component {
  static navigationOptions = {
    title: 'OPPORTUNITIES',
  };


  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(opp, index, mode) {
    return <OpportunityBlock
        item={opp}
        index={index}
        mode={'row'}
        listingReg={this.flatList} // for scroll maintain after collapsable
        navigation={this.props.navigation}
    />
  }

  _renderHeader()
  {
    const { onTabSwitch, currentTab, navigation } = this.props

    return <View>

      <OpportunitiesFilterBar navigation={navigation} />

      {/*
     <ButtonsGroup styleName={"tabs"} buttons={[
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
        }

      ]} />
      */}

    </View>
  }

  get intentions () {
    const { intentions } = this.props
    return filter(intentions, _int => ! _int.placeholder);
  }

  render() {

    const { style, navigate } = this.props

    console.log('render OpportunityScreen');

    return (
        <View styleName={"vertical"} style={{ flex:1 }}>

          {this._renderHeader()}

          <View style={{ flex:1 }}>
            <FlatList
                ref={(list) => this.flatList = list}
                style={{ paddingHorizontal: 6 }}
                autoHideHeader={true}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                keyExtractor={item => item.id}
                data={this.intentions}
                renderItem={({ item, index }) => this._renderRow(item, index)}
            />
          </View>
        </View>
    );
  }
}

const styles = {
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
};

// connect the component to the themes
export default  connectStyle('mbm.OpportunitiesScreen', styles)(OpportunitiesScreen);
