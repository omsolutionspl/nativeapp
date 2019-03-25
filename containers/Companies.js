import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose';

import { getCompanies } from '../reducers/Features/Companies';
import { map } from 'lodash'

import CompaniesScreen from '../screens/CompaniesScreen'

export default connect(
    (state, ownProps) => {

      return {
        companies: getCompanies(state),
        // intentions: [{id:1}, {id:2}], // Apply filtered
        // showPagination: false,
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(CompaniesScreen)