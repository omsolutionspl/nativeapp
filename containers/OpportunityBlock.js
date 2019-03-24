import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { getRenderMode, getOpportunities, getDetailed, getSelectedId, seeDetails } from '../reducers/Features/Opportunities';
import { map } from 'lodash'

import { GridRow } from '../components'
import { Colors } from '../constants'
import { ITEM_ROW, IMAGE_ROW } from '../components/GridRow'
import OpportunityBlock from '../components/OpportunityBlock'
import OpportunityBlock2 from '../components/OpportunityBlock2'

// TODO: make it Pure insteead of reducer's

export default connect(
    (state, ownProps) => {


      let _item = ownProps.navigation.state.params.opp || ownProps.item; // TODO: fix
      let _mode = ownProps.navigation.state.params.mode || ownProps.mode; // TODO: fix

      console.log('x', _mode);

      return {
        item: _item,
        type: _mode,
        mode: _mode || (getDetailed(state).indexOf(_item.id) === -1 ? 'row' : 'tile')
      }
    },
    (dispatch, ownProps) => {

      let _item = ownProps.navigation.state.params.opp || ownProps.item; // TODO: fix

      return {
        handleClickBlock: () => {
          dispatch(seeDetails(_item))
          ownProps.navigation.navigate('Opportunity', { // 'OpportunityDetailModal', {
            opp: _item, // TODO: provide ID instead of object ///
            mode: "full"
          })
        },
        // onModalClose: () => ownProps.navigation.goBack(),
        // openModal: () => ownProps.navigation.navigate('OpportunityDetailModal', {
        //   opp: ownProps.item, // TODO: id to filter out all list
        // })
      }
    }
)(OpportunityBlock2)