import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import {
  ImageBackground,
  ListView,
  Tile,
  Title,
  Subtitle,
  Overlay,
  Screen
} from '@shoutem/ui';

import { NavigationBar } from '@shoutem/ui/navigation';

import { Text } from '@shoutem/ui/components/Text'

/*
class ModalExample extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>
    );
  }
}
*/

export default class AnimationsExample extends Component {
  getRestaurant() {
    return {
      name: "Gaspar Brasserie",
      address: "185 Sutter St, San Francisco, CA 94109",
      url: "gasparbrasserie.com",
      image: { "url": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
      mail: "info@gasparbrasserie.com"
    };
  }

  renderRow(restaurant) {
    return   <ImageBackground styleName="large-banner" source={{ uri: restaurant.image &&
      restaurant.image.url ? restaurant.image.url : undefined  }}>
      <Tile>
        <Title>{restaurant.name}</Title>
        <Subtitle>{restaurant.address}</Subtitle>
      </Tile>
    </ImageBackground>
  }

  render() {
    const restaurant = this.getRestaurant();
    // const driver = new ScrollDriver();
    return (

        <ScrollView>
          <ListView
              data={[restaurant]}
              renderRow={restaurant => this.renderRow(restaurant)}
          />
        </ScrollView>


        /*
        <ScrollView {...driver.scrollViewProps}>
          <Text>Hey RL</Text>
          <ZoomIn
              driver={driver}
              inputRange={[100,150]}
              maxFactor={1.5}
          >
          <Text>
            Gaspar is a delightful French restaur is a delightful French restaur is a delightful French restau
            r is a delightful French restaur is a delightful French restaur is a delightful French restaur is a delightful French restau
            r is a delightful French restaur is a delightful French restaur is a delightful French restaur is a delightful French restau
            r is a delightful French restaur is a delightful French restaur is a delightful French restaur is a delightful French restau
          </Text>
          </ZoomIn>
        </ScrollView>

        <ScrollView {...driver.scrollViewProps}>
          <HeroHeader driver={driver}>
            <ImageBackground
                styleName="large-banner"
                source={{ uri: restaurant.image.url }}
                key={restaurant.name}
            >
              <Tile>
                <Parallax driver={driver} scrollSpeed={1.2} header>
                  <FadeIn inputRange={[-20, 0]} driver={driver}>
                    <FadeOut inputRange={[100, 150]} driver={driver}>
                      <Title>{restaurant.name}</Title>
                      <Subtitle>{restaurant.address}</Subtitle>
                    </FadeOut>
                  </FadeIn>
                </Parallax>
              </Tile>
            </ImageBackground>
          </HeroHeader>
          <View
              styleName="content"
              style={{
                backgroundColor: 'white',
                height: 700,
                padding: 15,
              }}
          >
            <Text>
              Gaspar is a delightful French restaurant in
              San Francisco\’s Financial District that is inspired by the romantic,
              bustling Paris of old. Located near famed Union Square, our richly-designed
              interiors make you feel as if you are truly in Paris and provide the perfect
              setting for enjoying our exquisite classic and modern French fare such as Duck
              Leg Confit and always popular Steak Frites. Gaspar offers two stories of dining
              in addition to full bars both upstairs and downstairs and an exclusive room
              reserved to hold the largest selection of Cognac in San Francisco.
              In addition to our all day menu, we offer live jazz music on Saturdays.
            </Text>
          </View>
        </ScrollView>
        */
    );
  }
}