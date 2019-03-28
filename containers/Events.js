import React from 'react';
import { connect } from 'react-redux';

// import { getRenderMode, getOpportunities, seeDetails } from '../reducers/Features/EventsScreen';
import { map } from 'lodash'

import EventsScreen from '../screens/EventsScreen'
import { compose, lifecycle, withState } from 'recompose';
import SystemWebScreen from "../screens/SystemWebScreen";
import { getEvents } from "../reducers/Features/Events";


export default compose(
    connect(
        (state, ownProps) => {
          return {
            events: getEvents(state),
            // showPagination: false,
          }
        },
        (dispatch, ownProps) => {
          return {
            onSelect: (event) => ownProps.navigation.navigate('SystemWebScreen', {
              url: event.url
            }),
            onUpdate: () => console.log('onUpdate'),
          }
        }
    )
)(EventsScreen)