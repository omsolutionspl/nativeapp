import React, { Component } from 'react';
import {Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import SliderEntry from '../components/SliderEntry';
import {colors} from "../constants/styles/Carousel";
import {itemWidth, sliderWidth} from "../constants/styles/SliderEntry";
import styles from "../constants/styles/Carousel";
import dashboardStyles from "../constants/styles/Dashboard"

export default class FeaturedContent extends Component {

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
        />
    );
  }

  render() {

    const { featured, showPagination } = this.props

    return (
        <View>
          <View style={dashboardStyles.header}>
            <Text style={dashboardStyles.headerText}>
              Featured content
            </Text>
          </View>
          <Carousel
              ref={c => this._slider1Ref = c}
              data={featured}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              //containerCustomStyle={styles.slider}
              //contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
          />

          {showPagination ?
          <Pagination
              dotsLength={featured.length}
              activeDotIndex={0}
              // containerStyle={styles.paginationContainer}
              dotColor={'rgba(255, 255, 255, 0.98)'}
              // dotStyle={styles.paginationDot}
              inactiveDotColor={colors.black}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this._slider1Ref}
              tappableDots={!!this._slider1Ref}
          />
          : null}

        </View>
    );
  }
}