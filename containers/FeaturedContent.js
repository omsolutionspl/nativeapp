import React from 'react';
import { connect } from 'react-redux';
import { getFeatured } from '../reducers/Features/Dashboard';

import FeaturedContent from '../components/FeaturedContent'

export default connect(
    (state, ownProps) => {
      return {
        featured: getFeatured(state),
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(FeaturedContent)