import React from 'react';
import {Button, ScrollView, Image, Easing, View, Text, StyleSheet, Platform } from 'react-native';
import { Constants, Permissions, Notifications, Icon } from 'expo';

import FeaturedContent from '../containers/FeaturedContent'
import ButtonsGroup  from '../components/ButtonsGroup'
import OpportunitiesScreen from "./OpportunitiesScreen";

import { connectStyle } from '@shoutem/theme';
import CompaniesScreen from "./CompaniesScreen";

class HomeScreen extends React.Component {

  render() {

    const {navigate} = this.props.navigation;

    return (
        <ScrollView>

          <FeaturedContent title={"FEATURED CONTENT"} />

          <ButtonsGroup title={"DISCOVER"} styleName={"stacked"} buttons={[
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
              label: "Eventing",
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

};

// connect the component to the theme
export default connectStyle('mbm.DashboardScreen', styles)(HomeScreen);
