import React, { Component } from 'react';
import {Platform, ScrollView, SafeAreaView} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'

import {colors} from "../constants/styles/Carousel";
import {itemWidth, sliderWidth} from "../constants/styles/SliderEntry";

import { View } from '@shoutem/ui/components/View'
import { Text, Heading } from '@shoutem/ui/components/Text'
import { Button } from './index'

import { connectStyle } from '@shoutem/theme';

import SliderEntry from '../components/SliderEntry';
import OpportunityBlock from '../containers/OpportunityBlock' // TODO: make it Pure
import CompanyBlock from '../components/CompanyBlock'
import Badge from "./Badge";

class FeaturedContent extends Component {

  _renderItem ({item, index}, parallaxProps) {

    const { renderAs } = this.props

    switch(renderAs) {

      case 'company':

        return <CompanyBlock

            item={{

              name: 'Amazystems',
              subtitle: '238210 - Electrical Contractors and Other Wiring Installation Contractors',
              badge: () => <Badge>Supplier</Badge>,
              illustration: require('../assets/images/app/content/dap-bg.png'),
              website: 'https://mbmapp.com',
              description: 'Have you ever wanted to target your feature set? Instantly? We realize that if you maximize strategically then you may also facilitate vertically. Quick: do you have a revolutionary strategy for deali'

            }}

            styleName={"card"}
            parallax={true}
            parallaxProps={parallaxProps}

        />

        break;

      case 'opportunities':
        return (
            <OpportunityBlock
                item={item}
                index={index}
                mode={'card'}

                // listingReg={this.flatList} // for scroll maintain after collapsable
                navigation={this.props.navigation}
            />
        );
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

    const {
      name,
      featured,
      onMore,
      showPagination,
      title,
      layout,
      layoutCardOffset,
      autoplay,
      loop,
      styleName } = this.props

    let data = featured
    
    // console.log('autopla', autoplay)

    return (
        <View styleName={styleName}>
          <View styleName={"horizontal space-between"} style={{ padding: 8}}>
            <View styleName={"horizontal"}>
              <Heading>{title}</Heading>
            </View>
            {onMore &&
              <View styleName={"horizontal h-end"}>
                <Button
                    clear
                    small
                    loading={false}
                    caption={"Discover More"}
                    onPress={onMore}
                />
              </View>
            }
          </View>
          <Carousel
              ref={c => this._slider1Ref = c}
              data={data}
              renderItem={this._renderItem.bind(this)}
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
              loop={loop !== undefined ? loop : true}
              loopClonesPerSide={2}
              autoplay={autoplay !== undefined ? autoplay : true}
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
