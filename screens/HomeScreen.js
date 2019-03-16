import React from 'react';
import {Button, ScrollView, Image, Easing, View, Text, StyleSheet, Platform } from 'react-native';
import { Constants, Permissions, Notifications, Icon } from 'expo';

import FeaturedContent from '../containers/FeaturedContent'
import FeaturedOpportunities from '../containers/FeaturedOpportunities'
import ButtonsGroup  from '../components/ButtonsGroup'
import OpportunitiesScreen from "./OpportunitiesScreen";

import { connectStyle } from '@shoutem/theme';
import CompaniesScreen from "./CompaniesScreen";
import EventsScreen from "../containers/Events";


class HomeScreen extends React.Component {
  render() {

    const {navigate} = this.props.navigation;

    return (
        <ScrollView>

          <FeaturedContent name={'featured'} title={"FEATURED"} />

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
              label: "Events",
              icon: "md-globe",
              onPress: () => {
                navigate('EventsScreen', {
                  // url: 'https://mbmapp.com/',
                });
              }
            }
          ]} />

          <FeaturedOpportunities
              name={'opportunities'}
              title={"YOUR OPPORTUNITIES"}
              navigation={this.props.navigation}
          />

          <FeaturedContent
              name={'companies'}
              layout={'tinder'}
              layoutCardOffset={`18`}
              title={"RELEVANT COMPANIESS"}
          />

        </ScrollView>
    );
  }
}

const styles = {

};

// connect the component to the theme
export default connectStyle('mbm.DashboardScreen', styles)(HomeScreen);
