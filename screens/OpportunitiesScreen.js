import React, {Component} from "react";
import { Platform, ScrollView, FlatList } from 'react-native';
// import { Icon, ImageBackground } from 'expo';
import { View } from '@shoutem/ui/components/View'
import { Text, Title, Subtitle, Caption } from '@shoutem/ui/components/Text'

import ButtonsGroup from '../components/ButtonsGroup'
import OpportunityBlock from '../containers/OpportunityBlock'
// import OpportunityBlock from '../components/OpportunityBlock'
import { SearchBar } from 'react-native-elements';
import { FILTER_OPPORTUNITIES, FILTER_FORECASTS, FILTER_MATCHES } from '../reducers/Features/Opportunities';
import Accordion from 'react-native-collapsible/Accordion';


import { Tabs, Tab } from 'native-base';

import { connectStyle } from '@shoutem/theme';

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];

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

  /*
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.intentions === this.props.intentions) {
      return false;
    }
    return true;
  }
  */

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

  // TMP TEST


  _renderSectionTitle = section => {
    return (
        <View style={styles.content}>
          <Text>{section.content}</Text>
        </View>
    );
  };

  _renderHeader = section => {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.name}</Text>
        </View>
    );
  };

  _renderContent = section => {
    return (
        <View style={styles.content}>
          <Text>{section.content}</Text>
        </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {

    const { style, navigate, intentions } = this.props

    const ITEM_HEIGHT = 120

    console.log('render OpportunitSCree');
    return (
        <View>
            <View>
              {this.renderHeader()}
            </View>
            <View style={{marginBottom: 60}}>

              {/*
              <Accordion
                  sections={intentions}
                  activeSections={this.state.activeSections}
                  renderSectionTitle={this._renderSectionTitle}
                  renderHeader={this._renderHeader}
                  renderContent={(section, index, isActive, sections) => this.renderRow(section, index, 'tile')}
                  onChange={this._updateSections}
              />
              */}

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

};

// connect the component to the themes
export default  connectStyle('mbm.OpportunitiesScreen', styles)(OpportunitiesScreen);
