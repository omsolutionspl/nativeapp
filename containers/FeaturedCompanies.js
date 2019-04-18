import React from 'react';
import { connect } from 'react-redux';
import { getFeatured } from '../reducers/Features/Dashboard';
import { getCompanies } from '../reducers/Features/Companies';

import FeaturedContent from '../components/FeaturedContent'
import {getOpportunities} from "../reducers/Features/Opportunities";

export default connect(
    (state, ownProps) => {

      let _featured = getCompanies(state);

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
        layout: 'stack', // 'tinder'
        autoplay: false,
        loop: false,
        layoutCardOffset: 18,
        renderAs: 'company',
        showPagination: false
      }
    },
    (dispatch, ownProps) => {
      return {
        onUpdate: () => console.log('onUpdate'),
      }
    }
)(FeaturedContent)