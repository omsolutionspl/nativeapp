import React from 'react';
import {Button, ScrollView, Image, Easing, View, Text, StyleSheet, Platform } from 'react-native';
import { Constants, Permissions, Notifications, Icon } from 'expo';

// import Carousel from 'react-native-snap-carousel';
// import CarouselExamples from '../components/CarouselExamples'
// import AnimationsExample from '../components/AnimationsExample'
import FeaturedContent from '../containers/FeaturedContent'
import ActionButtons  from '../components/ActionButtons'
import { NavigationBar } from '@shoutem/ui/components/NavigationBar'

import { TimingDriver, FadeIn } from '@shoutem/animation';
import DetailScreen from "./DetailScreen";
import SystemWebScreen from "./SystemWebScreen";

export default class HomeScreen extends React.Component {

  render() {

    const {navigate} = this.props.navigation;

    return (
        <ScrollView style={styles.contentContainer}>

          <View>
            <FeaturedContent />
          </View>

          <View style={styles.container}>
            <ActionButtons buttons={[
              {
                label: "Scan Business Card",
                icon:  "md-scan", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
                onPress: () => navigate('DetailScreen', {
                  url: 'https://mbmapp.com/',
                })
              },
              {
                label: "Enter WEB",
                icon: "ion-md-analytics",
                onPress: () => {
                  navigate('DetailModal', {
                    url: 'https://mbmapp.com/',
                   });
                }
              },
              {
                label: "Matches",
                icon: "ion-md-analytics",
                onPress: () => {
                  navigate('SystemWebScreen', {
                    url: 'https://mbmapp.com/',
                  });
                }
              }
            ]}/>
          </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
