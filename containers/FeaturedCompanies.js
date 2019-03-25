import React from 'react';
import { connect } from 'react-redux';
import { getFeatured } from '../reducers/Features/Dashboard';
import { getCompanies } from '../reducers/Features/Companies';

import FeaturedContent from '../components/FeaturedContent'

export default connect(
    (state, ownProps) => {
      return {
        featured: getCompanies(state),
        layout: 'stack', // 'tinder'
        autoplay: false,
        layoutCardOffset: 18,
        renderAs: 'company',
        showPagination: false
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(FeaturedContent)