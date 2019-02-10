import React, {Component} from "react";
import { ScrollView } from 'react-native';
import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'
import { View } from '@shoutem/ui/components/View'
import { Text, Title, Subtitle, Caption } from '@shoutem/ui/components/Text'
import { Tile } from '@shoutem/ui/components/Tile'
import { Row } from '@shoutem/ui/components/Row'
import { Icon } from '@shoutem/ui/components/Icon'
import { Overlay } from '@shoutem/ui/components/Overlay'
import { Divider } from '@shoutem/ui/components/Divider'
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import { Button } from '@shoutem/ui/components/Button'

import { map } from 'lodash';

import {connectStyle} from "@shoutem/theme/index";

class OpportunityBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

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

  renderHeaderRow()
  {
    const { item } = this.props

    return item.name ?
      <View>
        <Title>{item.name}</Title>
        <Subtitle>{item.category.name}</Subtitle>
        <Caption>{item.company.name}</Caption>
      </View>
      :
      <View>
        <Title>{item.category.name}</Title>}
        <Caption>{item.company.name}</Caption>
      </View>
  }

  render() {

    const { item, mode } = this.props

    let even = 0;


    console.log('render OppBlock'); // TOOD: Slow on modal

    return (


          <View>
          {mode === 'tile' ?
              <TouchableOpacity
                  activeOpacity={1}
                  style={styles.slideInnerContainer}
                  onPress={this.props.handleClickBlock}
              >
              <Tile>
              <ImageBackground
                  styleName="large-banner"
                  source={{ uri: item.image.url }}
              >
                <Overlay styleName="fill-parent image-overlay">
                  {this.renderHeaderRow()}
                </Overlay>
              </ImageBackground>
              <View styleName="content">

                {item.attributes?
                <View styleName="vertical full-width">

                  {/*
                  <Caption>
                    Lorem ipsudsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda
                    Lorem ipsudsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda
                    Lorem ipsudsa kasd jkasdl asda Lorem ipsudsdsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda Lorem ipsudsa kasd jkasdl asda
                  </Caption>
                  */}

                  <Row>
                    <View styleName="vertical">
                      <Subtitle>Params:</Subtitle>
                      <Text styleName="multiline">
                        {map(item.attributes, a => a.label).join(', ')}
                      </Text>
                    </View>
                  </Row>

                  <Divider styleName={"line"} />
                </View>
                :null}

                <Row>
                  <View styleName="vertical space-between">
                    <View styleName="horizontal h-start">
                      <Subtitle>Value: </Subtitle>
                      <Text styleName="multiline">$1,000,000</Text>
                    </View>
                    <View styleName="horizontal h-start">
                      <Subtitle>Deadline: </Subtitle>
                      <Text styleName="multiline">{item.deadline || ''}</Text>
                    </View>

                  </View>
                </Row>

                <Divider styleName={"line"} />

              </View>
          </Tile>
              </TouchableOpacity>: null}

          {mode === 'row' ?
              <TouchableOpacity
                  activeOpacity={1}
                  style={styles.slideInnerContainer}
                  onPress={this.props.handleClickBlock}
              >
          <Row>
            <Image
                styleName="small rounded-corners"
                source={{ uri: item.image.url }}
            />
            <View styleName="vertical stretch space-between">
              <Subtitle>{item.name ? item.name : item.category.name}</Subtitle>

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

            <Icon styleName="disclosure" name="right-arrow" />

          </Row>
              </TouchableOpacity>
          :null}

          {mode === 'modal' ?

          <View>
            <Tile>
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
              }} onPress={() => this.props.navigation.goBack()}>
                <Icon
                    style={{color:"white", marginTop:12}}
                    name="close"
                />
              </Button>
              </View>

              <ImageBackground styleName="large-banner" source={{ uri: item.image.url }}>
                <Overlay styleName="fill-parent image-overlay">
                  {this.renderHeaderRow()}
                </Overlay>
              </ImageBackground>
            </Tile>

            <ScrollView>
            <Row>
              <Image
                  styleName="small rounded-corners"
                  source={{ uri: item.image.url }}
              />
              <View styleName="vertical stretch space-between">
                <Subtitle>{item.name ? item.name : item.category.name}</Subtitle>

                <View styleName="vertical space-between">

                  <Button onPress={() => this.props.navigation.navigate('Root', {})}>
                    <Text> GO TO DASH</Text>
                  </Button>


                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Deadline: </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Deadline: </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Deadline: </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Deadline: </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Deadline: </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Deadline: </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>Value: </Caption>
                    <Caption>$1,000,000</Caption>
                  </View>
                  <View styleName="horizontal h-start">
                    <Caption>LAST </Caption>
                    <Caption>{item.deadline || ''}</Caption>
                  </View>
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
