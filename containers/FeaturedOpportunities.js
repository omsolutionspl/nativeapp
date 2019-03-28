import React from 'react';
import { connect } from 'react-redux';
import { getFeatured } from '../reducers/Features/Dashboard';
import { getOpportunities } from '../reducers/Features/Opportunities';

import FeaturedContent from '../components/FeaturedContent'

export default connect(
    (state, ownProps) => {

      let _featured = getOpportunities(state);

      _featured.push({
        placeholder: true,
        type: "refine_search",
        header: `Can't find profiles?`,
        buttons: [
          {
            label: 'Refine your search!',
            icon:  'md-analytics', //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
            onPress: () => ownProps.navigation.navigate('OpportunitiesScreen', {

            })
          },
        ]
      });

      return {
        featured: _featured,
        layout: 'stack',
        autoplay: false,
        loop: false,
        layoutCardOffset: 18,
        renderAs: 'opportunities',
        showPagination: false
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(FeaturedContent)