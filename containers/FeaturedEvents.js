import React from 'react';
import { connect } from 'react-redux';

import { getEvents } from '../reducers/Features/Events';

import FeaturedContent from '../components/FeaturedContent'

export default connect(
    (state, ownProps) => {
      return {
        featured: getEvents(state),
        layout: 'stack', // 'tinder'
        autoplay: false,
        loop:false,
        layoutCardOffset: 18,
        renderAs: 'event',
        showPagination: false
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(FeaturedContent)