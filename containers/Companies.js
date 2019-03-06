import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose';

import { getRenderMode, getOpportunities, seeDetails } from '../reducers/Features/Opportunities';
import { map } from 'lodash'

import CompaniesScreen from '../screens/CompaniesScreen'


export default connect(
    (state, ownProps) => {

      return {
        companies: ["a", "b"],
        intentions: getOpportunities(state), // Apply filtered
        // showPagination: false,
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(CompaniesScreen)