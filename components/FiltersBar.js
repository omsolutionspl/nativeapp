import React from 'react';

import { Animated, Modal, Alert, TouchableHighlight, Platform } from 'react-native';
import { Icon } from 'expo';
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";
import { SearchBar, Overlay } from 'react-native-elements';

import {Colors, Layout } from "../constants";
import NavigationBar from '../components/Helpers/NavigationBar'
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity'

class FilterBar extends React.Component {

  state = {
    backdropOpacity: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filtersModalVisible === false && this.props.filtersModalVisible === true) {
      Animated.timing(                  // Animate over time
          this.state.backdropOpacity,   // The animated value to drive
          {
            toValue: 10,              // Animate to opacity: 1 (opaque)
            duration: 400,            // Make it take a while
          }
      ).start();                        // Starts the animation
    }

    if (prevProps.filtersModalVisible === true && this.props.filtersModalVisible === false) {

      // Reset opacity
      this.setState({
        backdropOpacity: new Animated.Value(0)
      });
    }
  }

  _renderModal() {

    const { toggleSearchModal, filtersModalVisible } = this.props



    return <Modal
          animationType="slide"
          transparent={true}
          visible={filtersModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.', 'Message');
          }}>

        <Animated.View style={{
          flex:1 ,
          backgroundColor: this.state.backdropOpacity.interpolate({
            inputRange: [0, 10],
            outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']
          }),
          marginTop: Layout.NAVIGATION_HEADER_HEIGHT + (Platform.OS !== 'ios' ? -Layout.STATUS_BAR_HEIGHT : 0),
        }}>

          <View style={{
            marginTop: 200,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            flex: 1,
            backgroundColor:'white',
            flexDirection: 'column',

          }}>
            <View style={{
              padding: 20
            }}>

              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>

              <TouchableHighlight
                  onPress={() => {
                    toggleSearchModal();
                  }}>
                <Text>Show (312) Results</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Animated.View>
      </Modal>
  }

  render() {
    const {
      style,
      styleName,
      navigation,
      totalFound,
      toggleSearchModal,
      onFavoriteFilter,
      filtersModalVisible,
      searchText,
      setSearchText
    } = this.props

    return <View styleName={styleName}>


      {this._renderModal()}

      <NavigationBar
          styleName={"filters"}

          leftComponent={<Icon.Ionicons
              name={'md-arrow-back'}
              size={26}
              style={{ marginLeft: 16, marginTop: 2 }}
              onPress={() => navigation.goBack()}
              color={Colors.defaultText}
          />}

          centerComponent={<SearchBar
              lightTheme={true}
              inputStyle={{
                fontSize:14,
                backgroundColor: Colors.topNavSearchBackgroundColor
              }}
              containerStyle={{
                backgroundColor: 'transparent',
                borderTopColor: Colors.topNavBarColor,
                borderBottomColor: Colors.topNavBarColor
              }}
              inputContainerStyle={{ backgroundColor: Colors.topNavSearchBackgroundColor }}
              leftIconContainerStyle={{ backgroundColor: Colors.topNavSearchBackgroundColor }}
              rightIconContainerStyle={{ backgroundColor: Colors.topNavSearchBackgroundColor }}
              placeholder="What are you looking for?"
              onChangeText={(val) => setSearchText(val)}
              showLoading={false}
              value={searchText}
          />}

      />

      <View styleName={'horizontal space-between v-center'} style={{
        padding: 10,
        borderBottomWidth:0.5,
        borderBottomColor: "gray"
      }}>
          <View style={style.results}>
              <Text>Found ({totalFound}) Results</Text>
          </View>
          <View style={style.icons} styleName={'horizontal h-end'}>
            <TouchableOpacity onPress={onFavoriteFilter}>
              <Icon.Ionicons
                  size={24}
                  name={"md-star-outline"}
                  style={[style.icon]}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              toggleSearchModal()
            }}>
              <Icon.Ionicons
                  size={24}
                  name={"md-options"}
                  style={[style.icon]}
              />
            </TouchableOpacity>
          </View>
      </View>
    </View>
  }
}

const styles = {
  background: {
    backgroundColor: Colors.topNavSearchBackgroundColor
  }
}

// connect the component to the theme
export default connectStyle('mbm.common.FiltersBar', styles)(FilterBar);
