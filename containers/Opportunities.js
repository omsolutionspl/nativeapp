import React from 'react';
import { connect } from 'react-redux';

import { getRenderMode, getOpportunities, seeDetails, getCurrentTab, changeTab, isFiltersModalOpen } from '../reducers/Features/Opportunities';
import { map } from 'lodash'

import OpportunitiesListingScreen from '../screens/OpportunitiesScreen'

export default connect(
    (state, ownProps) => {
      return {
        intentions: getOpportunities(state), // Apply filtered
        currentTab: getCurrentTab(state),
        showPagination: false,
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
        onTabSwitch: (filter) => dispatch(changeTab(filter))
      }
    }
)(OpportunitiesListingScreen)