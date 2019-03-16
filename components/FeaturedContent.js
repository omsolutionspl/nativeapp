import React, { Component } from 'react';
import {Platform, ScrollView, SafeAreaView} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'
import SliderEntry from '../components/SliderEntry';
import {colors} from "../constants/styles/Carousel";
import {itemWidth, sliderWidth} from "../constants/styles/SliderEntry";

import { View } from '@shoutem/ui/components/View'
import { Text, Heading } from '@shoutem/ui/components/Text'
import { Button } from './index'

import { connectStyle } from '@shoutem/theme';


import OpportunityBlock from '../containers/OpportunityBlock'

class FeaturedContent extends Component {

  _renderItemWithParallax ({item, index}, parallaxProps) {

    console.log('1',this.props.navigation);
    switch(this.props.renderType) {
      case 'opportunity':
        return (
            <OpportunityBlock
                item={item}
                index={index}
                mode={'row'}
                // listingReg={this.flatList} // for scroll maintain after collapsable
               navigation={this.props.navigation}
            />
        )
      break;
    }

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

    const { name, featured, showPagination, title, layout, layoutCardOffset, styleName } = this.props

    // console.log('featued content render', layout, layoutCardOffset);

    let data = featured[name];
    
    console.log(name, data)

    return (
        <View styleName={styleName}>
          <View styleName={"horizontal space-between"} style={{ padding: 8}}>
            <View styleName={"horizontal"}>
              <Heading>{title}</Heading>
            </View>
            <View styleName={"horizontal h-end"}>
              <Button
                  primary
                  rounded
                  small
                  loading={false}
                  style={{  }}
                  caption={"Discover"}
                  onPress={() => alert('pressed')}
              />
            </View>
          </View>
          <Carousel
              ref={c => this._slider1Ref = c}
              data={data}
              renderItem={this._renderItemWithParallax.bind(this)}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={0}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              layout={layout || 'default'}
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
              dotsLength={data.length}
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

const styles = {
  container: {
    flex: 1,
  },
};


// connect the component to the theme
export default connectStyle('mbm.dashboard.FeaturedContent', styles)(FeaturedContent);
