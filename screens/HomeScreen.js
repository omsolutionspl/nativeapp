import React from 'react';
import {
	Button, ScrollView,
	Image, Easing, View, Text,
	Platform,
	Animated
} from 'react-native';
import { Constants, Notifications } from 'expo';
import { Permissions } from 'expo-permissions';

import FeaturedContent from '../containers/FeaturedContent';
import FeaturedOpportunities from '../containers/FeaturedOpportunities';
import FeaturedCompanies from '../containers/FeaturedCompanies';
import FeaturedEvents from '../containers/FeaturedEvents';
import ButtonsGroup  from '../components/ButtonsGroup';
import OpportunitiesScreen from './OpportunitiesScreen';

import { connectStyle } from '@shoutem/theme';
import CompaniesScreen from './CompaniesScreen';
import EventsScreen from '../containers/Events';
import {Layout} from "../constants";

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? (Layout.isIphoneX ? 300 : 280) : 280; //
const HEADER_MIN_HEIGHT = (Platform.OS === 'ios' && Layout.isIphoneX) ? 270 : 250; // Layout.NAVIGATION_HEADER_HEIGHT; // Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
          // iOS has negative initial scroll value because content inset...
          0 // Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      )
    };
  }

	render() {

		const {navigate} = this.props.navigation;

    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
        this.state.scrollY,
        0 //Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );

		return (

				// TODO: Fix becausse This Animated.ScrollView does not work on android.
				<Animated.ScrollView

						// style={{marginBottom:16}}
						stickyHeaderIndices={[1]}
            scrollEventThrottle={20}

						onScroll={Animated.event(
								[{
									nativeEvent: {
										contentOffset: { y: this.state.scrollY }
									}
								}],
								{ useNativeDriver: true },
						)}
						contentInset={{
							/**
							 * A value that scroll view can be pulled down instead of sticking top,
							 * so it can be pulled down through all expanded header
							 */
						 // top: HEADER_MAX_HEIGHT,
						}}
						contentOffset={{

							/**
							 * Pull the content to be visible under the header
							 */
						 // y: -HEADER_MAX_HEIGHT,
						}}
				>

        <FeaturedContent
            styleName={'medium'}
            name={'featured'}
            title={'FEATURED'}
        />


				<ButtonsGroup
						title={'DISCOVER'}
						styleName={'stacked darkBlue'}
						// animatedScrollValue={scrollY} // TODO: Enable animation
						buttons={[
							{
								label: 'Opportunities',
								icon:  'md-analytics', //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
								onPress: () => navigate('OpportunitiesScreen', {

								})
							},
							{
								label: 'Companies',
								icon: 'md-people',
								onPress: () => navigate('CompaniesScreen', {

								})
							},
							{
								label: 'Events',
								icon: 'md-globe',
								onPress: () => {
									navigate('EventsScreen', {
										// url: 'https://mbmapp.com/',
									});
								}
							}
						]}
				/>

				<FeaturedOpportunities
					name={'opportunities'}
					title={'YOUR OPPORTUNITIES'}
					navigation={this.props.navigation}
					onMore={() => navigate('OpportunitiesScreen', {

					})}
				/>

				<FeaturedCompanies
					name={'companies'}
					title={'RELEVANT COMPANIES'}
					navigation={this.props.navigation}
					onMore={() => navigate('CompaniesScreen', {

					})}
				/>

				<FeaturedEvents
					name={'events'}
					title={'EVENTS'}
					navigation={this.props.navigation}
					onMore={() => {
						navigate('EventsScreen', {

						})
					}}
				/>

			</Animated.ScrollView>
		);
	}
}

const styles = {

};

// connect the component to the theme
export default connectStyle('mbm.DashboardScreen', styles)(HomeScreen);
