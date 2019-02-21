import React from 'react';
import { connect } from 'react-redux';

// import { getRenderMode, getOpportunities, seeDetails } from '../reducers/Features/EventsScreen';
import { map } from 'lodash'

import EventsScreen from '../screens/EventsScreen'

export default connect(
    (state, ownProps) => {

      return {
        events: [{
          id: "o1",
          brand: 'Citizen',
          title: 'CITIZEN ECO-DRIVE',
          subtitle: 'Limited Edition',
          price: '$129.99',
          badge: 'NEW',
          badgeColor: '#3cd39f',
          image: 'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
        }, {
          id: "o2",
          brand: 'Weeknight',
          title: 'NEXT-LEVEL WEAR',
          subtitle: 'Office, prom or special parties is all dressed up',
          price: '$29.99',
          priceFrom: true,
          image: 'https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg',
        },{
          id: "o3",
          brand: 'Citizen',
          title: 'CITIZEN ECO-DRIVE',
          subtitle: 'Limited Edition',
          price: '$129.99',
          badge: 'NEW',
          badgeColor: 'green',
          image: 'https://reactnativestarter.com/demo/images/pexels-photo-173427.jpg',
        }, {
          id: "o4",
          brand: 'Weeknight',
          title: 'NEXT-LEVEL WEAR',
          subtitle: 'Office, prom or special parties is all dressed up',
          price: '$29.99',
          priceFrom: true,
          image: 'https://reactnativestarter.com/demo/images/pexels-photo-175696.jpg',
        }]
        // intentions: getOpportunities(state), // Apply filtered
        // showPagination: false,
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(EventsScreen)