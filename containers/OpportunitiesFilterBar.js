import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose';

import { getCurrentTab, changeTab } from '../reducers/Features/Opportunities';

import { FiltersBar } from '../components/'

export default compose(
    connect(
      (state, ownProps) => {
        return {
          filters: {

          },
        }
      },
      (dispatch, ownProps) => {
        return {
          onUpdate: () => console.log('onUpdate'),
        }
      }
  )
)(FiltersBar)