import React, {Component, PureComponent} from "react";
import moment from 'moment';
import { ScrollView, Easing, Platform } from 'react-native';
import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import { Tile } from '@shoutem/ui/components/Tile'
import { Divider } from '@shoutem/ui/components/Divider'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import NavigationBar from '../components/Helpers/NavigationBar'

import { ParallaxImage } from 'react-native-snap-carousel';

import baseStyles from '../constants/styles/SliderEntry';
import OpportunityHeader from '../components/OpportunityHeader'
import ContactBlock from '../components/ContactBlock'

import { Fonts, Colors, Layout } from '../constants';

import { map, filter, pickBy } from 'lodash';

import {connectStyle} from "@shoutem/theme/index";
import {FILTER_FORECASTS, FILTER_MATCHES, FILTER_OPPORTUNITIES} from "../reducers/Features/Opportunities";
import GridRow, { ITEM_ROW, IMAGE_ROW } from '../components/GridRow'

import { renderImageOverlay } from '../components/utils/gradients'
import { Badge, ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor } from '../components/'


class CompanyBlock extends PureComponent {

  constructor(props) {
    super(props);
  }

  get image ()
  {
    const { style, item: { illustration }, parallax, parallaxProps, even } = this.props;

    return parallax ? (
        <ParallaxImage
            source={illustration}
           containerStyle={[
                style.imageContainer,
                even ? style.imageContainerEven : {},
                { height:110, width: '100%' }
            ]}
            style={style.image}
            parallaxFactor={0.15}
            showSpinner={true}
            spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
            {...parallaxProps}
        />
    ) : (
        <Image
            source={illustration}
            style={style.image}
        />
    );
  }

  render() {

    const { style, styleName, navigation, item, item: { name, type, description, illustration, website }, buttons } = this.props

      return <View>
        <Tile styleName={styleName}>

          { this.image }
          {/*
          <ImageBackground
              // styleName="medium"
              source={illustration}
              style={{flex:1, height:90, width: '100%'}}
          >

          </ImageBackground>
          */}

          <Divider styleName={"line"} style={{color:"#e3e3e3", backgroundColor: "#e3e3e3"}}/>

          <View styleName="content">
            <Title numberOfLines={2}>{name}</Title>
            <Text numberOfLines={2}>{description}</Text>
            <View styleName="horizontal space-between">
              <Caption numberOfLines={1}>{website}</Caption>
              <Caption>15:34</Caption>
            </View>
          </View>

        </Tile>

        {buttons.length ?
        <ButtonsGroup
            smaller
            styleName={'darkBlue bottomRounded'}
            buttons={buttons}
        /> : null}

      </View>
  }
}

const styles = {
  ...baseStyles,
  biggerTitle: {
    fontSize:20,
    fontFamily: Fonts.defaultText
  },
  biggerSubtitle: {
    fontSize:16
  },
  website: {
    fontSize:11
  },
  image: {
    flex:1,
    // resizeMode: 'cover',
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
};

// connect the component to the theme
export default connectStyle('mbm.common.CompanyBlock', styles)(CompanyBlock);
