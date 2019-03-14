import React from 'react';
import { connect } from 'react-redux';

// import { getRenderMode, getOpportunities, seeDetails } from '../reducers/Features/EventsScreen';
import { map } from 'lodash'

import EventsScreen from '../screens/EventsScreen'
import { compose, lifecycle, withState } from 'recompose';
import SystemWebScreen from "../screens/SystemWebScreen";


export default compose(
    connect(
        (state, ownProps) => {
          return {
            events: [{
              id: "o1",
              //brand: 'Citizen',
              title: 'Direct Access Program',
              subtitle: 'Limited Edition',
              date: 'MARCH 14, 2019',
              badge: 'NEW',
              badgeColor: '#3cd39f',
              image: 'https://nvsbe-mbmapp-com-mybusinessmatche.netdna-ssl.com/media/transfer/img/5c1844eb659a3.jpeg',
              url: 'https://dapevents.mbmapp.com/'
            }, {
              id: "o2",
              //brand: 'Weeknight',
              title: 'ProBuilder Connect 2019',
              subtitle: 'Miami Beach, Florida',
              date: 'MARCH 14, 2019',
              image: 'https://cdn-mbmapp-com-mybusinessmatche.netdna-ssl.com/media/transfer/img/5c76cd68956b1.jpeg',
              url: 'https://probuilderconnect2019.mbmapp.com/'
            },{
              id: "o3",
              //brand: 'Citizen',
              title: 'Medical Surgical Prime Vendor (MSPV) 2.0',
              subtitle: 'Limited Edition',
              date: 'MARCH 14, 2019',
              badge: 'NEW',
              badgeColor: 'green',
              image: 'https://reactnativestarter.com/demo/images/pexels-photo-173427.jpg',
              url: 'https://probuilderconnect2019.mbmapp.com/'
            }]

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