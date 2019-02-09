import React from 'react';
import {Button, ScrollView, Image, Easing, View, Text, StyleSheet, Platform } from 'react-native';
import { Constants, Permissions, Notifications, Icon } from 'expo';

import FeaturedContent from '../containers/FeaturedContent'
import ActionButtons  from '../components/ActionButtons'
import OpportunitiesScreen from "./OpportunitiesScreen";

import { connectStyle } from '@shoutem/theme';
import CompaniesScreen from "./CompaniesScreen";

class HomeScreen extends React.Component {

  render() {

    const {navigate} = this.props.navigation;

    return (
        <ScrollView>

          <FeaturedContent title={"FEATURED CONTENT"} />

          <ActionButtons title={"DISCOVER"} buttons={[
            {
              label: "Opportunities",
              icon:  "md-analytics", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
              onPress: () => navigate('OpportunitiesScreen', {

              })
            },
            {
              label: "Companies",
              icon: "md-people",
              onPress: () => navigate('CompaniesScreen', {

              })
            },
            {
              label: "Events",
              icon: "md-globe",
              onPress: () => {
                navigate('DetailModal', {
                  url: 'https://mbmapp.com/',
                });
              }
            }
          ]} />

        </ScrollView>
    );
  }
}


const styles = {
  container: {
    flex: 1,
  },
};

// connect the component to the theme
export default connectStyle('mbm.DashboardScreen', styles)(HomeScreen);
