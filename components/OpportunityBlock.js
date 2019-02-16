import React, {Component, PureComponent} from "react";
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

import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';
import Layout from '../constants/Layout'

import { map } from 'lodash';

import {connectStyle} from "@shoutem/theme/index";

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
    const { item } = this.props

    return item.name ?
      <View styleName={"vertical"}>
        <Text>{item.name}</Text>
        <Title>{item.name}</Title>
        <Subtitle>{item.category.name}</Subtitle>
      </View>
      :
      <View>
        <Title>{item.category.name}</Title>
      </View>
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

    const { item, mode } = this.props

    let even = 0;

    console.log('render OppBlock @ ', mode, item.id); // TODO: Slow on modal

    return (

          <View>

          {mode === 'row' || mode === 'tile' ?
          <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={this.handleClickBlock.bind(this)}>
          <Row>

            <Image
                styleName="small rounded-corners top"
                source={{ uri: item.image.url }} />

            <View>
              <View styleName="vertical">
                <Subtitle numberOfLines={2}>{item.name ? item.name : item.category.name}</Subtitle>

                {this.isExtended() && item.type ?
                <Row style={{padding:0}}>
                  <Badge styleName={'success'} style={{fontSize: 11, marginTop:2, marginBottom: 2}}>
                    {item.type}
                  </Badge>
                </Row>
                :null}

                <View styleName="vertical space-between">
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Deadline: </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
                </View>

              </View>

              {this.isExtended() ?

                  item.attributes?
                  <View styleName="attributes vertical full-width">
                    <Caption>Params:</Caption>
                    <Caption styleName="multiline">
                      {map(item.attributes, a => a.label).join(', ')}
                    </Caption>
                  </View>
                  :null

              : null}

            </View>

            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
          </TouchableOpacity>
          :null}
          
          {mode === 'full' ? // full view
          <View>
            <Tile>

              {/* Only on modal this should appear */}
              <View style={{
                flex:1,
                flexDirection: 'row',
                position:'absolute',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                zIndex: 998
              }}>
                <Button styleName="clear" style={{
                  flex:1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  backgroundColor: "transparent",
                  zIndex: 999
                }} onPress={this.props.onModalClose}>
                  <Icon style={{color:"#fff", marginTop:12}} name="close" />
                </Button>
              </View>

              <ImageBackground styleName="large-banner" source={{ uri: item.image.url }}>
                <Overlay styleName="fill-parent image-overlay">
                  {this.renderHeaderRow()}
                </Overlay>
              </ImageBackground>
              <View styleName="vertical stretch space-between">
                <Badge styleName={'success box horizontal h-center'} style={{fontSize:20}}>
                  {item.type}
                </Badge>
              </View>

            </Tile>

            <ScrollView>
              <Row>
                <View styleName="vertical stretch space-between">

                  <View>

                    <Row>

                      <Button styleName="secondary rounded">
                        <Text> GO TO DASH</Text>
                      </Button>
                    </Row>

                    <Heading style={{marginTop:12}}>{item.company.name}</Heading>

                    <View styleName="horizontal h-start">
                      <Caption>Value: </Caption>
                      <Caption>$1,000,000</Caption>
                    </View>
                    <View styleName="horizontal h-start">
                      <Caption>LAST </Caption>
                      <Caption>{item.deadline || ''}</Caption>
                    </View>
                    <View styleName="horizontal h-start">
                      <Caption>LAST </Caption>
                      <Caption>{item.deadline || ''}</Caption>
                    </View>
                    <View styleName="horizontal h-start">
                      <Caption>LAST </Caption>
                      <Caption>{item.deadline || ''}</Caption>
                    </View>
                    <View styleName="horizontal h-start">
                      <Caption>LAST </Caption>
                      <Caption>{item.deadline || ''}</Caption>
                    </View>
                    <View styleName="horizontal h-start">
                      <Caption>LAST </Caption>
                      <Caption>{item.deadline || ''}</Caption>
                    </View>

                    <Button onPress={() => this.props.navigation.navigate('Root', {})}>
                      <Text> GO TO DASH</Text>
                    </Button>

                  </View>
                </View>
              </Row>

            </ScrollView>
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
