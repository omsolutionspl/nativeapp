import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { getRenderMode, getOpportunities, getDetailed, getSelectedId, seeDetails } from '../reducers/Features/Opportunities';
import { map } from 'lodash'

import { GridRow } from '../components'
import { Colors } from '../constants'
import { ITEM_ROW, IMAGE_ROW } from '../components/GridRow'
import OpportunityBlock from '../components/OpportunityBlock'
// TODO : Test

export default connect(
    (state, ownProps) => {

      return {
        item: ownProps.item,
        type: ownProps.mode || ITEM_ROW,
        mode: ownProps.mode || (getDetailed(state).indexOf(ownProps.item.id) === -1 ? 'row' : 'tile')
      }
    },
    (dispatch, ownProps) => {
      return {
        handleClickBlock: () => {
          dispatch(seeDetails(ownProps.item))
          ownProps.navigation.navigate('OpportunityDetailModal', {
            opp: ownProps.item, // TODO: provide ID instead of object ///
          })
        },
        // onModalClose: () => ownProps.navigation.goBack(),
        // openModal: () => ownProps.navigation.navigate('OpportunityDetailModal', {
        //   opp: ownProps.item, // TODO: id to filter out all list
        // })
      }
    }
)(OpportunityBlock)