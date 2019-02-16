import React from 'react';
import { connect } from 'react-redux';

import { getRenderMode, getOpportunities, getDetailed, getSelectedId, seeDetails } from '../reducers/Features/Opportunities';
import { map } from 'lodash'

import OpportunityBlock from '../components/OpportunityBlock'


export default connect(
    (state, ownProps) => {
      return {
        item: ownProps.item,
        mode: ownProps.mode || (getDetailed(state).indexOf(ownProps.item.id) === -1 ? 'row' : 'tile')
      }
    },
    (dispatch, ownProps) => {
      return {
        handleClickBlock: () => dispatch(seeDetails(ownProps.item)),
        onModalClose: () => ownProps.navigation.goBack(),
        openModal: () => ownProps.navigation.navigate('OpportunityDetailModal', {
          opp: ownProps.item,
        })
      }
    }
)(OpportunityBlock)