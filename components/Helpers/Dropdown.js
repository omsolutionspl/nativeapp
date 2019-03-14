import React, {Component} from 'react';

import {
  Animated,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
  Modal,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native'

// import { Icon } from 'expo';
// import { Text } from '@shoutem/ui/components/Text'

import { View } from '@shoutem/ui/components/View'
import {connectStyle} from "@shoutem/theme/index";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import RowItem from 'react-native-sectioned-multi-select/lib/components/RowItem';

import { Fonts } from '../../constants'
import { isEqual, size, find, filter, map } from 'lodash'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from "../../constants/Colors";

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity


const items = [
  {
    name: "Business Certifications",
    id: 0,
    // icon: icon, // local required file
    children: [{
      name: "ISO 99100",
      id: 10,
    },{
      name: "Women Owned Small Business",
      id: 17,
    },{
      name: "Veteran Owned Small Business",
      id: 13,
    },{
      name: "Banana",
      id: 14,
    },{
      name: "Watermelon",
      id: 15,
    },{
      name: "Kiwi fruit",
      id: 16,
    }]
  },
  {
    name: "Gems",
    id: 1,
    icon: { uri: "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png" }, // web uri
    children: [{
      name: "Quartz",
      id: 20,
    },{
      name: "Zircon",
      id: 21,
    },{
      name: "Sapphire",
      id: 22,
    },{
      name: "Topaz",
      id: 23,
    }]
  },
  {
    name: "Plants",
    id: 2,
    // icon: "filter_vintage", // material icons icon name
    children: [{
      name: "Mother In Law\'s Tongue",
      id: 30,
    },{
      name: "Yucca",
      id: 31,
    },{
      name: "Monsteria",
      id: 32,
    },{
      name: "Palm",
      id: 33,
    }]
  },
]


class ExtendedRowItem extends RowItem  {

  constructor(props) {
    super(props);

    // TODO: Check for initial selection
    this.state = {
      headerValue: new Animated.Value(
          size(this.getSelectedChildren({item: props.item, selectedItems: props.selectedItems})) ? 0 : 100
      )
    }
  }

  getSelectedChildren({ item, selectedItems }) {
    return filter(item.children, item => selectedItems.indexOf(item.id) !== -1)
  }

  componentDidUpdate(prevProps, prevState) {

    // console.log('constructor', this.props.selectedItems, 'items', this.props.items, 'xxx', this.props.selectedItems.includes(this.props.item['id']));

    let __prevSelectionSize = size(this.getSelectedChildren({item: prevProps.item, selectedItems: prevProps.selectedItems}));
    let __currSelectionSize = size(this.getSelectedChildren({item: this.props.item, selectedItems: this.props.selectedItems}));

    if (__prevSelectionSize === 0 && (__prevSelectionSize !== __currSelectionSize)) {
      Animated.timing(                  // Animate over time
          this.state.headerValue,   // The animated value to drive
          {
            toValue: 0,      // Animate to opacity: 1 (opaque)
            duration: 300,   // Make it take a while
          }
      ).start();
    }

    if (__currSelectionSize === 0 && (__prevSelectionSize !== __currSelectionSize)) {
      Animated.timing(                  // Animate over time
          this.state.headerValue,   // The animated value to drive
          {
            toValue: 100,      // Animate to opacity: 1 (opaque)
            duration: 300,     // Make it take a while
          }
      ).start();
    }
  }

  _renderLabel() {

    const {
      item,
      mergedStyles,
      mergedColors,
      itemNumberOfLines,
      selectedItems,
      displayKey,
    } = this.props

    const { headerValue } = this.state

    // const headerValue = Animated.add(
    //     this.state.headerValue,
    //     0
    // );

    const headerScale = headerValue.interpolate({
      inputRange: [0, 58, 100],
      outputRange: [0.8, 0.9, 1],
      extrapolate: 'clamp',
    });

    const headerTranslateX = headerValue.interpolate({
      inputRange: [0, 100],
      outputRange: [-44, 0],
      extrapolate: 'clamp',
    });

    const headerTranslateY = headerValue.interpolate({
      inputRange: [0, 100],
      outputRange: [-15, 0],
      extrapolate: 'clamp',
    });

    const subHeaderOpacity = headerValue.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.1],
      extrapolate: 'clamp',
    });

    let __children = this.getSelectedChildren({ item, selectedItems });

    return <View style={{flex:1}}>
        <Animated.Text
          numberOfLines={itemNumberOfLines}
          style={
            [{
              flex: 1,
              color: item.disabled ? mergedColors.disabled : mergedColors.text,
              transform: [
                { scale: headerScale },
                { translateX: headerTranslateX },
                { translateY: headerTranslateY },
              ]
            },
              mergedStyles.itemText, this._itemSelected(item) && mergedStyles.selectedItemText
            ]}
      >
        {item[displayKey]} ({size(__children)})

      </Animated.Text>

      <Animated.Text
          numberOfLines={1}
          style={
          [
              {
                flex: 1,
                color: item.disabled ? mergedColors.disabled : Colors.lightGray,
                // backgroundColor:'green',
                position:'absolute',
                // transform: [
                //   { scale: headerScale },
                //   { translateX: headerTranslateX },
                //   { translateY: headerTranslateY },
                // ]
                opacity: subHeaderOpacity,
                fontSize: 14,
                fontFamily: Fonts.primarySemiBold,
                marginTop:14
              }
          ]}
          >

        {map(__children, child => <Text>{child.name}, </Text>)}

        </Animated.Text>
    </View>
  }

  render() {
    const {
      item,
      mergedStyles,
      mergedColors,
      uniqueKey,
      subKey,
      showDropDowns,
      readOnlyHeadings,
      selectedIconComponent,
      unselectedIconComponent,
      dropDownToggleIconUpComponent,
      dropDownToggleIconDownComponent,
      selectedItems,
      iconKey
    } = this.props

    const hasDropDown = item[subKey] && item[subKey].length > 0 && showDropDowns

    return (
        <View>
          <View
              key={item[uniqueKey]}
              style={{
                flexDirection: 'row',
                flex: 1,
                backgroundColor: mergedColors.itemBackground,
              }}
          >
            <TouchableOpacity
                disabled={(readOnlyHeadings && !showDropDowns) || item.disabled}
                onPress={this._dropDownOrToggle}
                style={[{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingVertical: 6,
                }, mergedStyles.item, this._itemSelected(item) && mergedStyles.selectedItem]}
            >

              {iconKey && item[iconKey] && <ItemIcon iconKey={iconKey} icon={item[iconKey]} style={mergedStyles.itemIconStyle} />}

              {this._renderLabel()}

              {
                this._itemSelected(item) ?
                    selectedIconComponent ?
                        selectedIconComponent
                        :
                        <Icon
                            name="check"
                            style={{
                              fontSize: 16,
                              color: mergedColors.success,
                              paddingLeft: 10,
                            }}
                        /> :
                    unselectedIconComponent ? unselectedIconComponent: null
              }
            </TouchableOpacity>

            {hasDropDown &&
            <TouchableOpacity
                style={[{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  backgroundColor: 'transparent',
                }, mergedStyles.toggleIcon]}
                onPress={this._toggleDropDown}
            >
              { this._showSubCategoryDropDown() ?
                  <View>
                    { dropDownToggleIconUpComponent ? dropDownToggleIconUpComponent
                        :
                        <Icon
                            name="keyboard-arrow-up"
                            size={22}
                            style={{
                              color: mergedColors.primary,
                            }}
                        />
                    }
                  </View>
                  :
                  <View>
                    { dropDownToggleIconDownComponent ? dropDownToggleIconDownComponent
                        :
                        <Icon
                            name="keyboard-arrow-down"
                            size={22}
                            style={{
                              color: mergedColors.primary,
                            }}
                        />
                    }
                  </View>
              }
            </TouchableOpacity>
            }

          </View>

          { item[subKey] && this._showSubCategoryDropDown() &&
          <FlatList
              keyExtractor={i => `${i[uniqueKey]}`}
              data={item[subKey]}
              extraData={selectedItems}
              ItemSeparatorComponent={this._renderSubSeparator}
              renderItem={this._renderSubItemFlatList}
          />
          }

        </View>
    )
  }
}

/**
 * Minified version as inline dropdown component
 *
 */
class ExtendedSectionedMultiSelect extends SectionedMultiSelect {

  _renderItemFlatList = ({ item }) => {

    const { styles, colors } = this.state
    const { searchTerm } = this.state

    return (
        <View>
          <ExtendedRowItem
              item={item}
              mergedStyles={styles}
              mergedColors={colors}
              _itemSelected={this._itemSelected}
              searchTerm={searchTerm}
              _toggleItem={this._toggleItem}
              highlightedChildren={this.state.highlightedChildren}
              {...this.props}
          />
        </View>
    )
  }

  render() {
    const {
      items,
      selectedItems,
      uniqueKey,
      confirmText,
      searchPlaceholderText,
      noResultsComponent,
      loadingComponent,
      loading,
      searchTextFontFamily,
      confirmFontFamily,
      modalAnimationType,
      modalSupportedOrientations,
      hideSearch,
      hideConfirm,
      selectToggleIconComponent,
      cancelIconComponent,
      searchIconComponent,
      showCancelButton,
      hideSelect,
      headerComponent,
      searchAdornment,
      selectLabelNumberOfLines,
      noItemsComponent,
      stickyFooterComponent,
      chipsPosition,
      autoFocus,
      withSearch
    } = this.props

    const {
      searchTerm,
      selector,
      styles,
      colors,
    } = this.state

    const renderItems = searchTerm ? this._filterItems(searchTerm.trim()) : items
    const confirmFont = confirmFontFamily.fontFamily && confirmFontFamily
    const searchTextFont = searchTextFontFamily.fontFamily && searchTextFontFamily

    return (
        <View>

          <View style={styles.container}>

            {headerComponent && headerComponent}

            {!hideSearch &&
            <View style={[{ flexDirection: 'row', paddingVertical: 5 }, styles.searchBar]}>
              <View style={styles.center}>
                {searchIconComponent ?
                    searchIconComponent
                    :
                    <Icon
                        name="search"
                        size={18}
                        style={{ marginHorizontal: 15 }}
                    />}
              </View>
              <TextInput
                  value={this.state.searchTerm}
                  selectionColor={colors.searchSelectionColor}
                  onChangeText={searchTerm => this.setState({ searchTerm })}
                  placeholder={searchPlaceholderText}
                  autoFocus={autoFocus}
                  selectTextOnFocus
                  placeholderTextColor={colors.searchPlaceholderTextColor}
                  underlineColorAndroid="transparent"
                  style={[{
                    flex: 1,
                    fontSize: 17,
                    paddingVertical: 8,
                  },
                    searchTextFont,
                    styles.searchTextInput,
                  ]}
              />
              {searchAdornment && searchAdornment(searchTerm)}
            </View>
            }

            <ScrollView
                keyboardShouldPersistTaps="always"
                style={styles.scrollView}
            >
              <View>
                {loading ?
                    loadingComponent
                    :
                    <View>
                      {!renderItems || !renderItems.length && !searchTerm ? noItemsComponent : null}
                      {items && renderItems && renderItems.length ?
                          <View>
                            <FlatList
                                keyboardShouldPersistTaps="always"
                                removeClippedSubviews
                                initialNumToRender={15}
                                data={renderItems}
                                extraData={selectedItems}
                                keyExtractor={item => `${item[uniqueKey]}`}
                                ItemSeparatorComponent={this._renderSeparator}
                                ListFooterComponent={this._renderFooter}
                                renderItem={this._renderItemFlatList}
                            />
                          </View>
                          :
                          searchTerm ? noResultsComponent : null
                      }
                    </View>
                }
              </View>
            </ScrollView>

            {stickyFooterComponent && stickyFooterComponent}
          </View>

      {/*
      {chipsPosition === 'top' && this._renderChips()}
      {chipsPosition === 'top' && this._customChipsRenderer()}
      {!hideSelect &&
      <TouchableWithoutFeedback onPress={this._toggleSelector} disabled={this.state.selector}>
        <View
            style={[{
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center',
            }, styles.selectToggle]}
        >
          <Text
              numberOfLines={selectLabelNumberOfLines}
              style={[{
                flex: 1,
                fontSize: 16,
                color: colors.selectToggleTextColor,
              }, styles.selectToggleText]}
          >
            {this._getSelectLabel()}
          </Text>
          {selectToggleIconComponent ?
              selectToggleIconComponent
              :
              <Icon
                  size={24}
                  name="keyboard-arrow-down"
                  style={{ color: colors.selectToggleTextColor }}
              />}
        </View>
      </TouchableWithoutFeedback>
      }
      {chipsPosition === 'bottom' && this._customChipsRenderer()}
      {chipsPosition === 'bottom' && this._renderChips()}
      */}

    </View>
    )
  }
}

class Dropdown extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedItems: [],
    }
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  render() {

    const { style, key } = this.props;

    return (
        <View>
          <ExtendedSectionedMultiSelect
              key={key}
              items={items}
              styles={style}
              // single={true}
              hideSearch={true}
              loading={false}
              uniqueKey={'id'}
              subKey='children'
              selectText='Choose some things...'
              showDropDowns={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
          />
        </View>
    );
  }
}

const styles = {
  item: {
    paddingVertical: 20
  },
};

// connect the component to the themes
export default connectStyle('mbm.filters.Dropdown', styles)(Dropdown);
