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
import { GridRow } from '../components'

const ITEM_HEIGHT = 120

class EventsScreen extends Component {
  static navigationOptions = {
    title: 'EVENTS',
  };

  state = {
    activeSections: [],
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {activeSections: []}
  }

  renderHeader() {
    return null;
  }

  renderRow(event, index, mode) {
    return <GridRow item={event} />
  }

  render() {

    const { style, navigate, events } = this.props

    console.log('render EventsScreen');

    return (
        <View styleName={"vertical"} style={styles.container}>
          <View>
            {this.renderHeader()}
          </View>
          <View style={{marginBottom: 78}}>
            <FlatList
                ref={(list) => this.flatList = list}
                //renderHeader={this.renderFilters.bind(this)}
                autoHideHeader={true}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                keyExtractor={item => item.id || item[0] && item[0].id}
                // getItemLayout={(data, index) => (
                //     {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                // )}
                data={events}
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
  itemOneContainer: {
    flex: 1,
    width: (Dimensions.get('window').width / 2 - 40),
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
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
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#4f1920',
    opacity: 0.5,
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