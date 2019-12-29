import React, { Component } from 'react';
import {
  Animated,
  Platform,
  RefreshControl,
} from 'react-native';
import {connectStyle} from "@shoutem/theme/index";

import moment from 'moment';

import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import { Overlay } from '@shoutem/ui/components/Overlay'
import { Tile } from '@shoutem/ui/components/Tile'
import { Row } from '@shoutem/ui/components/Row'
import { Divider } from '@shoutem/ui/components/Divider'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import NavigationBar from '../components/Helpers/NavigationBar'
import { ROOT_NAV_NAME } from '../constants/Navigation'


import OpportunityHeader from '../components/OpportunityHeader'
import ContactBlock from '../components/ContactBlock'

import { Fonts, Colors, Layout } from '../constants';

import { map, filter, pickBy } from 'lodash';

import {FILTER_FORECASTS, FILTER_MATCHES, FILTER_OPPORTUNITIES} from "../reducers/Features/Opportunities";
import GridRow, { ITEM_ROW, IMAGE_ROW } from '../components/GridRow'

import { renderImageOverlay } from '../components/utils/gradients'
import ProfileHeader  from '../components/ProfileHeader'
import QuickInfo  from '../components/QuickInfo'
import {Badge, ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor, Button as RNButton} from '../components/'

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? (Layout.isIphoneX ? 300 : 280) : 280; //
const HEADER_MIN_HEIGHT = (Platform.OS === 'ios' && Layout.isIphoneX) ? 250 : 220; // Layout.NAVIGATION_HEADER_HEIGHT; // Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

/**
 * https://medium.com/appandflow/react-native-scrollview-animated-header-10a18cb9469e
 *
 */
class OpportunityBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
          // iOS has negative initial scroll value because content inset...
          Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      )
    };
  }

  renderDescriptionList(skipAttributes) {

    if ( ! skipAttributes) skipAttributes = [
      'description', 'title', 'link', 'dot_procurement_category'
    ];

    let ___list = this.props.item.description;

    return map(pickBy(___list, (item, key) => skipAttributes.indexOf(key) === -1), function(value, key) {
      return <View
          styleName={'horizontal space-between v-start'}
          style={{flex:1}}
          key={key}>

        <View style={{flex:1}}>
          <Text styleName={'multiline'} style={{fontFamily:Fonts.primaryBold}}>{key}:</Text>
        </View>
        <View style={{flex:1}}>
          <Text styleName={'multiline'} style={{fontFamily:Fonts.primaryRegular}}>{value}</Text>
        </View>
      </View>
    });

  }

  getMode() {
    return this.props.mode || 'full';
  }

  render() {

    const { navigation, style, item, item: { type, description } } = this.props

    let mode  = this.getMode();
    let imageAsBackground = mode === 'card'
    let __now = moment();
    let deadline;

    if (item.deadline) {
      deadline = moment(item.deadline);
    }

    // TODO: Map data for different view
    let _item = {
      brand: item.type,
      title: item.category.name,
      subtitle: item.description['dot_procurement_category'] || null,
      detailInfo: item.description['estimated_value'] || null,
      badge: Math.floor(Math.random() * 10) % 2 ? {
        label: 'Short deadline',
        type: "danger"
      } : {
        label: 'Fully applicable',
        type: "success"
      },
      image: item.images[0].url,
      deadline: deadline,
    };

    // console.log('render OppBlock @ ', mode, item.id); // TODO: Slow on modal

    if (mode === 'card')
    {
      if (item.company.agency) {
        // _item['brand'] = item.company.agency;
      }
    }

    if (mode === 'row' || mode === 'tile' || mode === 'card')
      return <View>
          <GridRow
            imageAsBackground
            // overlay={{ from: Colors.primaryLight, to: Colors.darkBlue, opacity: 1}}
            onPress={this.props.handleClickBlock.bind(this)}
            navigation={this.props.navigation}
            type={mode}
            styleName={`${mode}`}
            item={_item}
            buttons={mode !== 'card' ? [] : [
              // {
              //   label: 'Favorite',
              //   icon:  'md-star-outline', //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
              //   onPress: () => alert("Favorited")
              // },
              {
                label: 'Let\'s Connect',
                icon: 'md-chatboxes',
                onPress: () => navigation.navigate('Chats', {

                })
              },
              {
                label: 'Schedule a meeting',
                icon: 'md-calendar',
                onPress: () => {
                  navigation.navigate('EventsScreen', {
                    // url: 'https://mbmapp.com/',
                  });
                }
              }
            ]}
        />

      </View>

    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
        this.state.scrollY,
        Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    const backgroundTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 30],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 3, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.7],
      extrapolate: 'clamp',
    });

    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 3, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 30],
      extrapolate: 'clamp',
    });

    const titleTranslateY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 3, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -36],
      extrapolate: 'clamp',
    });

    // Small logo animations
    const logoOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 1],
      extrapolate: 'clamp',
    });

    const logoTranslateX = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [-100, 0],
      extrapolate: 'clamp',
    });


    const __opacity = new Animated.Value(0.3);
    console.log('logoOpp', __opacity, logoOpacity);

    return (
        <View styleName={"vertical"}>

          {/* MAIN CONTENT SECTION **/}
          <Animated.ScrollView
              style={{ flex: 1 }}
              scrollEventThrottle={1}
              onScroll={Animated.event(
                  [{
                    nativeEvent: {
                      contentOffset: { y: this.state.scrollY }
                    }
                  }],
                  { useNativeDriver: true },
              )}
              contentInset={{
                /**
                 * A value that scroll view can be pulled down instead of sticking top,
                 * so it can be pulled down through all expanded header
                 */
                top: HEADER_MAX_HEIGHT,
              }}
              contentOffset={{

                /**
                 * Pull the content to be visible under the header
                 */
                y: -HEADER_MAX_HEIGHT,
              }}
          >

            <View style={style.scrollViewContent}>

              {item.company.agency ?
              <AttributeRow styleName="vertical">
                <Title>
                  {item.company.agency}
                </Title>
              </AttributeRow>
              : null}

              <AttributeRow styleName="vertical">
                {this.renderDescriptionList()}
              </AttributeRow>

              <AttributeRow styleName="vertical" header={null}>
                <Text styleName="multiline">
                  {item.description.description}
                </Text>
              </AttributeRow>

              <AttributeRow styleName="vertical" header={"Contact"}>
                <ContactBlock
                    person={item.contact.person}
                    phone={item.contact.phone}
                    mail={item.contact.mail}
                />
              </AttributeRow>

            </View>
          </Animated.ScrollView>


          <Animated.View
              pointerEvents="none"
              style={[
                style.header,
                { transform: [{ translateY: headerTranslate }] },
              ]}
          >

            <Animated.Image
                style={[
                  style.backgroundImage,
                  {
                    opacity: imageOpacity,
                    transform: [
                        { translateY: backgroundTranslate }
                      ],
                  },
                ]}
                source={{ uri: item.images[0].url }}
            />

            {/* renderImageOverlay({ from: Colors.gradientFrom, to: Colors.gradientTo, opacity: 0.8}) */}

            <Overlay styleName="fill-parent image-overlay" />

            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.profileGradientStart, Colors.profileGradientEnd]}
                style={{flexDirection: 'row', marginTop: HEADER_MAX_HEIGHT - 52}}
            >

              <QuickInfo>
                <Text>Deadline</Text>
                <Caption>{__now.to(deadline)}</Caption>
              </QuickInfo>

              <QuickInfo>
                <Text>Estimated value</Text>
                <Caption>{item.description.estimated_value}</Caption>
              </QuickInfo>

            </LinearGradient>


          </Animated.View>

          <Animated.View
              style={[
                style.logoContainer,
                {
                  opacity: 1, // logoOpacity, // __opacity
                  transform: [
                    { translateX: logoTranslateX },
                    // { translateY: imageTranslateY }
                  ],
                },
              ]}
          >
            <Image
                styleName={'small'}
                source={{ uri: item.images[0].url }}
            />
          </Animated.View>

          <View styleName={"horizontal"} style={style.navigation}>
            <View style={style.componentsContainer}>
              <View style={style.leftComponent}>
                <Ionicons
                    name={'md-arrow-back'}
                    size={26}
                    style={{ marginLeft: 16, color: 'white' }}
                    onPress={() => navigation.goBack()}
                    color={Colors.defaultText}
                />
              </View>
              <View style={style.centerComponent}><Text></Text></View>
              <View style={style.rightComponent}>
                <Ionicons
                    name={Platform.OS === 'ios' ? 'ios-star-outline': 'md-star-outline'}
                    size={28}
                    style={{ marginRight: 16, color: 'white' }}
                    onPress={() => alert("Favorited")}
                    color={Colors.defaultText}
                />
              </View>
            </View>
          </View>


          <Animated.View
              style={[
                style.bar,
                {
                  transform: [
                    { scale: titleScale },
                    { translateX: titleTranslate },
                    { translateY: titleTranslateY },
                  ],
                },
              ]}
          >

            <OpportunityHeader>
              <View styleName={'vertical content'}>
                <Title>{item.category.name}</Title>
                <View>
                  <Subtitle numberOfLines={2}>{item.type}</Subtitle>
                  <Caption>{item.description['dot_procurement_category'] || null}</Caption>
                </View>
              </View>
            </OpportunityHeader>

          </Animated.View>

          <ButtonsGroup styleName={"stacked bottom"} bottom={true} buttons={[
            {
              label: "Let's Connect!",
              active: false,
              icon: Platform.OS === 'ios' ? 'md-chatbubbles' : 'md-chatbubbles',
              onPress: () => this.props.navigation.navigate('DetailModal', {

              })
            },
            {
              label: "Get Quote",
              active:  false,
              icon:  "md-calendar", ////
              onPress: () => this.props.navigation.navigate('DetailModal', {

              })
            }
          ]} />

        </View>
    );
  }
}

const style = {
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.topNavBarColor, // 'green', // 'white',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    marginTop: 0 // Layout.NAVIGATION_HEADER_HEIGHT, // navigation bar size
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover', // 'cover'
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left:0,
    opacity:0,
    right: -100, // initial position
    paddingLeft:15,
    marginTop: 20 + 40 + (Layout.isIphoneX ? 24 : 0), // navigation bar size Layout.NAVIGATION_HEADER_HEIGHT +
  },
  bar: {
    backgroundColor: 'transparent', // 'red'
    // marginTop: Layout.STATUS_BAR_HEIGHT,
    // height: HEADER_MIN_HEIGHT + 10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    paddingTop:0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    marginTop: 15 + 40 - 2 + (Layout.isIphoneX ? 24 : 0), // navigation bar size Layout.NAVIGATION_HEADER_HEIGHT +
  },

  navigation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex:1,
    backgroundColor:'transparent',
    // justifyContent: '',
    // alignItems: '',
    marginTop: Layout.STATUS_BAR_HEIGHT + 12
  },

  componentsContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },

  leftComponent: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },

  centerComponent: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 0,
  },

  rightComponent: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },

  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0 // paddingTop: HEADER_MAX_HEIGHT // Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  }
}

// connect the component to the theme
export default connectStyle('mbm.common.OpportunityBlock', style)(OpportunityBlock);
