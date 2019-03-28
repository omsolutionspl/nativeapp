import React, {Component, PureComponent} from "react";
import moment from 'moment';
import { ScrollView, Easing, Platform } from 'react-native';
import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import { Tile } from '@shoutem/ui/components/Tile'
import { Row } from '@shoutem/ui/components/Row'
import { Overlay } from '@shoutem/ui/components/Overlay'
import { Divider } from '@shoutem/ui/components/Divider'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import NavigationBar from '../components/Helpers/NavigationBar'

import { ParallaxImage } from 'react-native-snap-carousel';

import OpportunityHeader from '../components/OpportunityHeader'
import ContactBlock from '../components/ContactBlock'

import { Fonts, Colors, Layout } from '../constants';

import { map, filter, pickBy } from 'lodash';

import {connectStyle} from "@shoutem/theme/index";
import {FILTER_FORECASTS, FILTER_MATCHES, FILTER_OPPORTUNITIES} from "../reducers/Features/Opportunities";
import GridRow, { ITEM_ROW, IMAGE_ROW } from '../components/GridRow'

import { renderImageOverlay } from '../components/utils/gradients'
import { Badge, ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor } from '../components/'


class EventBlock extends PureComponent {

  constructor(props) {
    super(props);
  }

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

  render() {

    const { style, styleName, navigation, item, item: { name, type, description, illustration }, buttons } = this.props

    return <View>

      <GridRow
          item={item}
          onPress={() =>  alert('x')}
          navigation={navigation}
      />

      {/*buttons.length ?
      <ButtonsGroup
          smaller
          styleName={'darkBlue bottomRounded'}
          buttons={buttons}
      /> : null*/}
    </View>
  }
}

const styles = {
  content: {

  }
};

// connect the component to the theme
export default connectStyle('mbm.common.EventBlock', styles)(EventBlock);
