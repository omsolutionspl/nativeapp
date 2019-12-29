import React from 'react';

import {
  Animated,
  // Modal,
  Alert,
  TouchableHighlight,
  ScrollView,
  Platform,
  Dimensions,
  StyleSheet
} from 'react-native';
import Modal from "react-native-modal";

import { map } from 'lodash';
import { Ionicons } from 'expo';
import { View } from '@shoutem/ui/components/View'
import { Text, Caption, Subtitle } from '@shoutem/ui/components/Text'
import {connectStyle} from "@shoutem/theme/index";
import { SearchBar, CheckBox } from 'react-native-elements';
import Dropdown from '../components/Helpers/Dropdown'

import {Colors, Layout, Fonts } from "../constants";
import NavigationBar from '../components/Helpers/NavigationBar'
import { TouchableOpacity } from '@shoutem/ui/components/TouchableOpacity'


const FilterValueRow = ({ style, header, values, onPress }) => {
  return <View>
    <Subtitle>{header}</Subtitle>
    {map(values, (__value, index) => <View key={`filter_c_${header}_${index}`}>
          <CheckBox
            key={`filter_${header}_${index}`}
            wrapperStyle={style.wrapper}
            containerStyle={style.checkbox}
            title={
              <View styleName={"horizontal"}>
                <Text multiline={true} style={style.rowText}>
                  {__value.label} <Text style={style.rowTextCounter}>({__value.count})</Text>
                </Text>
              </View>
            }
            checked={!__value.checked}
            checkedIcon={<Ionicons
                size={24}
                name={Platform.OS === 'ios' ? "ios-checkbox":"md-star-outline"}
                style={{paddingRight:10}}
            />}
            uncheckedIcon={<Ionicons
                size={24}
                name={'md-square-outline'}
                style={{paddingRight:10}}
            />}
            // checkedColor={Colors.darkBlue}
            // uncheckedColor={Colors.defaultText}
            onPress={() => onPress(__value)}
        />
          {/* Separator */}
        <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              height: StyleSheet.hairlineWidth,
              alignSelf: 'stretch',
              backgroundColor: Colors.horizontalSeparatorBackground,
            }}
        />
    </View>
    )}
  </View>
}

StyledFilterValueRow = connectStyle('mbm.filters.FilterValueRow', {
  wrapper: {
    justifyContent: 'center', // 'flex-start',
    alignItems: 'center', // 'flex-start',
  }
})(FilterValueRow);

class FilterBar extends React.Component {

  state = {
    checked: false,
    backdropOpacity: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filtersModalVisible === false && this.props.filtersModalVisible === true) {
      Animated.timing(                  // Animate over time
          this.state.backdropOpacity,   // The animated value to drive
          {
            toValue: 100,              // Animate to opacity: 1 (opaque)
            duration: 500,            // Make it take a while
            useNativeDriver: true,
          },
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

    const {
      style,
      totalFound,
      toggleSearchModal,
      filtersModalVisible
    } = this.props;

    return <Modal

        style={{
          padding:0,
          margin:0,
          // marginTop:50,
          // marginTop:200,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,

        }}
        useNativeDriver={true} //
        animationIn={'fadeIn'} // slideInUp
        animationOut={'fadeOut'}
        //  deviceHeight={120}
        // deviceHeight={Layout.window.height - 100}
        onBackdropPress={() =>toggleSearchModal()}
        isVisible={filtersModalVisible}
    >

      {this._renderNavigationBar()}


          <View style={{
            marginTop: 200,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            flex: 1,
            backgroundColor: Colors.tabBar,
            flexDirection: 'column',

          }}>
            <View style={{
              flex:1,
            }}>

              <ScrollView
                  style={{
                    backgroundColor: Colors.topNavBarColor,
                    borderTopLeftRadius:5,
                    borderTopRightRadius:5,
                    flex:1,
                    margin:0,
                    padding:0
                  }}
                >

                <View style={style.section}>
                  <StyledFilterValueRow
                      style={style}
                      header={"Socio-Economic Category"}
                      values={[
                        {
                          label:"Service Disabled Veteran Owned",
                          count: 123,
                          checked: false,
                        },
                        {
                          label:"Historically Underutilized Business Zone",
                          count: 91,
                          checked: true
                        },
                        {
                          label:"Veteran Owned Small Business",
                          count: 17,
                          checked: false
                        }
                      ]}
                      checked={!this.state.checked}
                      onPress={() => this.setState({checked: this.state.checked})}
                  />
                </View>

                <View style={style.section}>
                  <StyledFilterValueRow
                      style={style}
                      header={"Business Certifications"}
                      values={[
                        {
                          label: "PMP (Project Management Professional)",
                          count: 11,
                          checked: this.state.checked
                        },
                      ]}
                      onPress={(item) => this.setState({checked: !this.state.checked})}
                  />
                </View>

                <View style={style.section}>
                  <Dropdown

                    key={'country'}

                  />
                </View>

                <View style={style.section}>
                  <StyledFilterValueRow
                      style={style}
                      header={"New filter out"}
                      values={[
                        {
                          label: "PMP (Project Management Professional)",
                          count: 11,
                          checked: this.state.checked
                        },
                      ]}
                      onPress={(item) => this.setState({checked: !this.state.checked})}
                  />
                </View>

              </ScrollView>

            </View>


            <TouchableHighlight
                style={style.filterShowButtonContainer}
                onPress={() => {
                  // Redux
                  toggleSearchModal();
                }}>
              <Text
                  style={{
                    fontSize:18,
                    fontFamily: Fonts.primaryBold
                  }}
              > Show ({totalFound}) Results
              </Text>
            </TouchableHighlight>

          </View>
        {/*</Animated.View>*/}
      </Modal>
  }

  _handleSearch(val) {

    const {
      searchText,
      setSearchText,
      search
    } = this.props;

    setSearchText(val) // local state


    search(searchText, {}); // dispatch redux
  }

  _renderNavigationBar() {

    const {
      navigation,
      searchText,
      isLoading
    } = this.props;

    return <NavigationBar
        styleName={"filters"}

        leftComponent={<Ionicons
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
            onChangeText={(val) => this._handleSearch(val)}
            showLoading={isLoading}
            value={searchText}
        />}

    />
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
    } = this.props;

    return <View styleName={styleName}>

      {this._renderNavigationBar()}

      {this._renderModal()}

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
              <Ionicons
                  size={24}
                  name={"md-star-outline"}
                  style={[style.icon]}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              toggleSearchModal()
            }}>
              <Ionicons
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
  filterShowButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    borderTopWidth:1,
    paddingVertical:12,
    borderTopColor: Colors.darkBlue,
    paddingBottom: Platform.OS === 'ios' ? (Layout.isIphoneX ? 40: 20) : 0,

  },
  background: {
    backgroundColor: Colors.topNavSearchBackgroundColor
  }
}

// connect the component to the theme
export default connectStyle('mbm.filters.FiltersBar', styles)(FilterBar);
