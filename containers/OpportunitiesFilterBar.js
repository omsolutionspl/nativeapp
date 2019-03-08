import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose';

import { getCurrentTab, changeTab, toggleSearchModal, isFiltersModalOpen } from '../reducers/Features/Opportunities';

import { FiltersBar } from '../components/'

export default compose(
    connect(
      (state, ownProps) => {
        return {
          totalFound: 1812,
          filtersModalVisible: isFiltersModalOpen(state),
          filters: {

          },
        }
      },
      (dispatch, ownProps) => {
        return {
          toggleSearchModal: () => dispatch(toggleSearchModal()),
          onFavoriteFilter: () => alert('favorite'),
          onUpdate: () => console.log('onUpdate'),
        }
      }
  ),
  withState('searchText', 'setSearchText', ''),
)(FiltersBar)