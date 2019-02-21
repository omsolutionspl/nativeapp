import React, {Component, PureComponent} from "react";
import moment from 'moment';
import { ScrollView, Easing } from 'react-native';
import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'
import { View } from '@shoutem/ui/components/View'
import { Text, Title, Subtitle, Caption, Heading } from '@shoutem/ui/components/Text'
import { Tile } from '@shoutem/ui/components/Tile'
import { Row } from '@shoutem/ui/components/Row'
import { Icon } from '@shoutem/ui/components/Icon'
import { Overlay } from '@shoutem/ui/components/Overlay'
import { Divider } from '@shoutem/ui/components/Divider'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import { Button } from '@shoutem/ui/components/Button'
// import { Badge } from 'native-base'
import { Badge } from '../components';
import GoBackBtn  from '../components/Helpers/GoBackBtn'

import ButtonsGroup from '../components/ButtonsGroup'
import AttributeRow from '../components/AttributeRow'
import OpportunityHeader from '../components/OpportunityHeader'

import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import Layout from '../constants/Layout'

import { map } from 'lodash';

import {connectStyle} from "@shoutem/theme/index";
import {FILTER_FORECASTS, FILTER_MATCHES, FILTER_OPPORTUNITIES} from "../reducers/Features/Opportunities";
import GridRow, { ITEM_ROW, IMAGE_ROW } from '../components/GridRow'

class OpportunityBlock extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      extended: props.mode === 'tile' // for fallback
      // oppModalVisible: props.oppModalVisible,
      // collapsed: props.mode === 'row'
    }
  }

  /*
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.mode === 'row' && this.props.mode === 'tile') {
      // this.props.listingReg.scrollToIndex({  // Scrolssl reference TO THE TOP
      //   index: this.props.index,
      //   animated: true
      // })

      this.props.listingReg.scrollToOffset({  // Scroll reference TO THE TOP
        offset: (this.props.index * 120),
        animated: true
      })
    }
  }
  */


  /*
   <View styleName="horizontal space-between">
     <View styleName="vertical v-center h-start">
       <Subtitle>Requirements met:</Subtitle>
       <Caption>1 hour ago</Caption>
       <Caption>15:34</Caption>
     </View>
     <View styleName="vertical v-center h-start">
       <Subtitle>Requirements not met:</Subtitle>
       <Caption>1 hour ago</Caption>
       <Caption>15:34</Caption>
     </View>
   </View>
   */

  isExtended() {
    return this.state.extended // this.props.mode === 'tile'
  }

  shouldExtend() {
    const { item } = this.props;
    return item.attributes && item.attributes.length > 0;
  }

  renderHeaderRow()
  {
    const { item: { category, description: { title }} } = this.props

    return title ?
        <OpportunityHeader styleName={"vertical"}>
          <Title>{title}</Title>
          <Subtitle>{category.name}</Subtitle>

          <View styleName={"horizontal"}>
            <Button styleName="rounded light" onPress={() => alert('btn 1')}>
              <Text>FAVORITE</Text>
            </Button>

            <Button styleName="rounded light secondary" onPress={() => alert('btn 1')}>
              <Text>LET'S CONNECT</Text>
            </Button>
          </View>
        </OpportunityHeader>
        :
        <OpportunityHeader>
          <Title>{category.name}</Title>
        </OpportunityHeader>

  }

  handleClickBlock(e) {

    // this.props.listingReg.scrollToIndex({  // Scroll reference TO THE TOP
    //   index: this.props.index,
    //   animated: true
    // })

    this.props.handleClickBlock(e); // Redux change

    this.setState({
      extended: true
    });

    // let __offset = (this.props.index * 220);
    //
    // console.log('scroll data:', __offset, Layout.window.height, __offset > Layout.window.height);
    //
    // if (__offset > Layout.window.height) {
    //   this.props.listingReg.scrollToEnd();
    // }
    // else
    // {
    //   this.props.listingReg.scrollToOffset({  // Scroll reference TO THE TOP
    //     offset: (this.props.index * 160),
    //     animated: true
    //   })
    // }

    if (this.isExtended() || ! this.shouldExtend())
    {
        this.props.openModal();
    }

    /*
    if (this.state.mode === 'tile') {
      this.props.navigation.navigate('OpportunityDetailModal', {
        opp: this.props.item,
      });
    }

    this.setState({
      mode: 'tile',
      collapsed: false
    })
   */
  }

  render() {

    const { item, item: { type, description }, mode } = this.props

    let even = 0;

    let __now = moment();
    let deadline;
    if (item.deadline) {
      deadline = moment(item.deadline);
    }

    console.log('render OppBlock @ ', mode, item.id); // TODO: Slow on modal

    return (

          <View>

          {mode === 'row' || mode === 'tile' ?
          <GridRow
            onPress={this.props.handleClickBlock.bind(this)}
            type={ITEM_ROW}
            item={{

              brand: item.type,
              title: item.category.name,
              subtitle: item.description['dot_procurement_category'] || null,
              detailInfo: item.description['dot_estimated_value'] || null,
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
          :null}
          
          {mode === 'full' ? // full view
          <View>
            <Tile>

              {/* Only on modal this should appear */}
              <GoBackBtn {...this.props} />

              <ImageBackground styleName="large-banner" source={{ uri: item.images[0].url }}>
                <Overlay styleName="fill-parent image-overlay">
                  {this.renderHeaderRow()}
                </Overlay>
              </ImageBackground>
            </Tile>

            <ScrollView style={{height:440}}>
              <Row>
                <View styleName="">
                    <Heading>{item.company.name}</Heading>
                    <Title style={{paddingLeft:0}}>{item.company.agency}</Title>

                    <Badge styleName={'success box horizontal h-center'} style={{fontSize:14}}>
                      {item.type}
                    </Badge>

                    <View styleName="horizontal">
                      <Caption>Estimated Value: </Caption>
                      <Caption>$10 million-$20 million </Caption>
                    </View>

                    {deadline ?
                    <View styleName="horizontal h-start">
                      <Caption>Deadline: </Caption>
                      <Caption>{__now.to(deadline)}</Caption>
                    </View>
                    :null}

                  <Divider styleName="line" />

                    <AttributeRow styleName="vertical" header={"Description"}>
                      <Text styleName="multiline">
                        {item.description.description}
                      </Text>
                    </AttributeRow>

                    <View styleName="vertical attribute">
                      <View styleName="horizontal space-between">
                        <Subtitle>Description:</Subtitle>
                      </View>
                      <Text styleName="multiline">
                        {item.description.description}
                      </Text>
                    </View>

                    {/*
                    <Row>
                      <Icon name="share" />
                      <View styleName="vertical">
                        <View styleName="horizontal space-between">
                          <Subtitle>Dustin Malone</Subtitle>
                          <Caption>20 minutes ago</Caption>
                        </View>
                        <Text styleName="multiline">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High.</Text>
                      </View>
                    </Row>
                    */}

                    <Button styleName="filled rounded" onPress={() => this.props.navigation.navigate('Root', {})}>
                      <Text> GO TO DASH</Text>
                    </Button>

                    <Divider styleName="section-header">
                      <Caption>PRODUCT NAME</Caption>
                      <Caption>PRICE</Caption>
                    </Divider>

                    <View styleName="horizontal space-between">
                      <Subtitle>Deadline: </Subtitle>
                      <Subtitle>{item.deadline || ''}</Subtitle>
                    </View>
                </View>
              </Row>

            </ScrollView>

            <ButtonsGroup styleName={"stacked"} buttons={[
              {
                label: "Opportunities",
                active:  false,
                icon:  "md-analytics", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
                onPress: () => alert(1)
              },
              {
                label: "Forecasts",
                active: false,
                icon: "md-people",
                onPress: () => alert(2)
              },
              {
                label: "Matches",
                active: false,
                icon: "md-globe",
                onPress: () => alert(3)
              }

            ]} />

          </View>
          :null}
          </View>
    );
  }

}

const styles = {
};

// connect the component to the theme
export default connectStyle('mbm.common.OpportunityBlock', styles)(OpportunityBlock);
