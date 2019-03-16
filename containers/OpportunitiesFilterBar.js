import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose';

import { getCurrentTab, changeTab, toggleSearchModal, isFiltersModalOpen, getFilters, search } from '../reducers/Features/Opportunities';

import { FiltersBar } from '../components/'
import { Colors } from '../constants/'

import Toast from 'react-native-root-toast';

export default compose(
    connect(
      (state, ownProps) => {

        let _filters = getFilters(state);
        return {
          totalFound: 1812,
          filtersModalVisible: isFiltersModalOpen(state),
          searchText: _filters.searchText,
          isLoading: _filters.loading
        }
      },
      (dispatch, ownProps) => {
        return {
          toggleSearchModal: () => dispatch(toggleSearchModal()),
          onFavoriteFilter: () => alert('favorite'),
          search: (text, query) => {
            dispatch(search(text, query))

            // tmp toastr

            // Add a Toast on screen.
            /*
            let toast = Toast.show('Found new results!', {
              duration: Toast.durations.SHORT,
              position: 70,
              shadow: false,
              animation: true,
              hideOnPress: true,
              delay: 500,
              // shadowColor: Colors.veryDarkGreen,
              backgroundColor: Colors.darkGreen,
              textColor: Colors.white,
              onShow: () => {
                // calls on toast\`s appear animation start
              },
              onShown: () => {
                // calls on toast\`s appear animation end.
              },
              onHide: () => {
                // calls on toast\`s hide animation start.
              },
              onHidden: () => {
                // calls on toast\`s hide animation end.
              }
            });

            // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
            // setTimeout(function () {
            //   Toast.hide(toast);
            // }, 2000);
            */

          },
          onUpdate: () => console.log('onUpdate'),
        }
      }
  ),
  withState('searchText', 'setSearchText', ''),
)(FiltersBar)