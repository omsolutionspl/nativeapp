import React, {Component, PureComponent} from "react";
import moment from 'moment';
import { Icon, LinearGradient, Linking } from 'expo';
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
import { NavigationBar } from '@shoutem/ui/components/NavigationBar'


import OpportunityHeader from '../components/OpportunityHeader'
import ContactBlock from '../components/ContactBlock'

import { Fonts, Colors, Layout } from '../constants';

import { map, filter, pickBy } from 'lodash';

import {connectStyle} from "@shoutem/theme/index";
import {FILTER_FORECASTS, FILTER_MATCHES, FILTER_OPPORTUNITIES} from "../reducers/Features/Opportunities";
import GridRow, { ITEM_ROW, IMAGE_ROW } from '../components/GridRow'


import { renderImageOverlay } from '../components/utils/gradients'
import ProfileHeader  from '../components/ProfileHeader'
import QuickInfo  from '../components/QuickInfo'
import { Badge, ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor } from '../components/'


class OpportunityBlock extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      extended: props.mode === 'tile' // for fallback
    }
  }

  isExtended() {
    return this.state.extended // this.props.mode === 'tile'
  }

  shouldExtend() {
    const { item } = this.props;
    return item.attributes && item.attributes.length > 0;
  }

  getWebsite() {
    return this.props.item.description.link || null;
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

    const { item, item: { type, description } } = this.props

    let mode = this.getMode();
    let __now = moment();
    let deadline;
    if (item.deadline) {
      deadline = moment(item.deadline);
    }

    console.log('render OppBlock @ ', mode, item.id); // TODO: Slow on modal

    if (mode === 'row' || mode === 'tile')
      return <GridRow
          onPress={this.props.handleClickBlock.bind(this)}
          type={ITEM_ROW}
          item={{
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
          }
          } />

    // Full
    return <View styleName={"vertical"}>

      <ImageBackground
          // styleName="large"
          source={{ uri: item.images[0].url, flex:1 }}>

        {renderImageOverlay({ from: Colors.gradientFrom, to: Colors.gradientTo, opacity: 0.8})}

        <OpportunityHeader>
          <View styleName={'vertical content'}>
            <Title>{item.category.name}</Title>
            <View>
              <Subtitle numberOfLines={2}>{item.type}</Subtitle>
              <Caption>{item.description['dot_procurement_category'] || null}</Caption>
            </View>
          </View>
        </OpportunityHeader>
      </ImageBackground>

      <View styleName={"content-section"}>
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.profileGradientStart, Colors.profileGradientEnd]}
            style={{flexDirection: 'row'}}
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

        <ScrollView>

          <AttributeRow styleName="vertical">
            <Title>
              {item.company.agency}
            </Title>
          </AttributeRow>

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

        </ScrollView>

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
    </View>
  }
}

const styles = {
};

// connect the component to the theme
export default connectStyle('mbm.common.OpportunityBlock', styles)(OpportunityBlock);
