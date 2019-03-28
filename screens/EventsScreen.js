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
import EventBlock from '../components/EventBlock'
import { SearchBar } from 'react-native-elements';
import { FILTER_OPPORTUNITIES, FILTER_FORECASTS, FILTER_MATCHES } from '../reducers/Features/Opportunities';
import { connectStyle } from '@shoutem/theme';
import { GridRow } from '../components'

const ITEM_HEIGHT = 120

class EventsScreen extends Component {
  static navigationOptions = {
    title: 'EVENTS',
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderHeader() {
    return null;
  }

  renderRow(event, index) {
    return <EventBlock
        item={event}
        onPress={() =>  this.props.onSelect(event)}
        navigation={this.props.navigation}
      />
  }

  render() {

    const { style, navigate, events } = this.props

    console.log('render EventsScreen');

    return (
        <View styleName={"vertical"} style={{ flex:1 }}>
          <View>
            {this.renderHeader()}
          </View>
          <View style={{ flex:1 }}>
            <FlatList
                ref={(list) => this.flatList = list}
                //renderHeader={this.renderFilters.bind(this)}
                autoHideHeader={true}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                keyExtractor={item => item.id || item[0] && item[0].id}
                data={events}
                renderItem={({ item, index }) => this.renderRow(item, index)}
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
  itemOneContainer: {
    flex: 1,
    width: (Dimensions.get('window').width / 2 - 40),
  },
  itemOneImage: {
    height: 200,
    width: (Dimensions.get('window').width / 2 - 40),
  },
  itemOneTitle: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 5,
    backgroundColor: 'white',
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: Colors.white,
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
    fontSize: 20,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: Fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
};

// connect the component to the themes
export default  connectStyle('mbm.EventsScreen', styles)(EventsScreen);
