import React from 'react';
import { connect } from 'react-redux';
import { getFeatured } from '../reducers/Features/Dashboard';
import { getOpportunities } from '../reducers/Features/Opportunities';

import FeaturedContent from '../components/FeaturedContent'

export default connect(
    (state, ownProps) => {
      return {
        featured: {
          featured: getFeatured(state)['featured'],
          opportunities: getOpportunities(state),
          companies: getOpportunities(state),
        },
        showPagination: false
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(FeaturedContent)