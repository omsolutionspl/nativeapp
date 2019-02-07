import React from 'react';
import {Button, ScrollView, Image, View, Text, StyleSheet, Platform } from 'react-native';
import { Constants, Permissions, Notifications } from 'expo';
import Carousel from 'react-native-snap-carousel';
import CarouselExamples from '../components/CarouselExamples'
import FeaturedContent from '../containers/FeaturedContent'
import ActionButtons  from '../components/ActionButtons'


export default class HomeScreen extends React.Component {

  componentDidMount() {
    this._notificationSubscription = Notifications.addListener(
        this._handleNotification
    );
  }

  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
          <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
  }

  render() {
    return (
        <ScrollView style={styles.contentContainer}>
          {/*
          <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details (Drawer)aa"
                onPress={() => {

                  this.props.navigation.navigate('WebPage', {
                    url: 'https://mbmapp.com/',
                  });
                }}
            />
          </View>
          */}
          <View>
            <FeaturedContent />
          </View>
          <View style={styles.container}>
            <ActionButtons buttons={[
              {
                title: "Scan Business Card",
                icon:  "md-scan", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
                onPress: () => console.log('pressed')
              },
              {
                title: "Enter DUNS",
                icon: "ion-md-analytics",
                onPress: () => console.log('pressed')
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
    justifyContent: 'center'
  },
});
