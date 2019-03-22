import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';

import baseStyles from '../constants/styles/SliderEntry';
import {connectStyle} from "@shoutem/theme";

import { Fonts } from '../constants'

class SliderEntry extends Component {

  get image ()
  {
    const { data: { illustration }, parallax, parallaxProps, even } = this.props;
    return parallax ? (
        <ParallaxImage
            source={illustration}
            containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
            style={styles.image}
            parallaxFactor={0.35}
            showSpinner={true}
            spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
            {...parallaxProps}
        />
    ) : (
        <Image
            source={{ uri: illustration }}
            style={styles.image}
        />
    );
  }

  render () {
    const { style, data: { title, subtitle, description, website }, even, extended } = this.props;

    const uppercaseTitle = title ? (
        <Text
            style={[
              styles.title,
              even ? styles.titleEven : {},
              extended && style.biggerTitle
            ]}
            numberOfLines={2}
        >
          { title.toUpperCase() }
        </Text>
    ) : false;

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.slideInnerContainer}
            onPress={() => { alert(`You've clicked '${title}'`); }}
        >
          <View style={styles.shadow} />
          <View style={[
              styles.imageContainer,
              even ? styles.imageContainerEven : {},
              ]}>
            { this.image }
            <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
          </View>
          <View style={[
              styles.textContainer,
              even ? styles.textContainerEven : {},
            ]}>
            {uppercaseTitle}

            <Text style={[
                styles.subtitle,
                even ? styles.subtitleEven : {},
                extended && style.biggerSubtitle
            ]} numberOfLines={2}>
              {subtitle}
            </Text>
          </View>

          {description ?
          <View style={[
            styles.textContainer,
            even ? styles.textContainerEven : {},
          ]}>
            <Text numberOfLines={2}>{description}</Text>

            <Text style={[
              styles.website,
            ]} numberOfLines={1}>
              {website}
            </Text>
          </View>
          : null}

        </TouchableOpacity>
    );
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
  }
};


// connect the component to the theme
export default connectStyle('mbm.grid.SliderEntry', styles)(SliderEntry);
