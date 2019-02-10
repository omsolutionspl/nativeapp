// Dashboard.js

import { createSelector } from 'reselect'
import update from 'react-addons-update';
import _ from 'lodash'

// Actions
const LOAD   = 'MBM/Opportunities/LOAD';
const CREATE = 'MBM/Opportunities/CREATE';
const SET_DETAILED = 'MBM/Opportunities/SET_DETAILED';
const SHOW = 'MBM/Opportunities/SHOW';

const initState = {
  opps: [
    {
      "id": "opp1",
      "name": "CONSOLIDATED SECURITY COOPERATION REQUIREMENTS",
      "category": {
        "id": 2070,
        "name": "541690 - Other Scientific and Technical Consulting Services"
      },
      "attributes": [{
        "id": 1107,
        "name": "s03",
        "label": "8 (a)"
      }, {
        "id": 1117,
        "name": "s13",
        "label": "Historically Underutilized Business Zone "
      }, {
        "id": 1122,
        "name": "s18",
        "label": "Small Disadvantaged  Business"
      }, {
        "id": 1125,
        "name": "s21",
        "label": "Service Disabled Veteran Owned  Small  Business"
      }, {
        "id": 1126,
        "name": "s22",
        "label": "Veteran Owned Small Business"
      }, {
        "id": 1129,
        "name": "s25",
        "label": "Woman-Owned Small Business (WOSB)"
      }],
      "company": {
        "name": "NASA",
        "address": "185 Sutter St, San Francisco, CA 94109",
      },

      "website": "https://www.theconsultinglead.com",
      "post_date": "2018-11-20",
      "deadline": "in 10 months",
      "agency": "Department of the Army",
      "type": "Sources Sought",
      "image": {"url": "https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"},
    },
    {
      "id":"opp2",
      "name": "Teseing here ok",
      "category": {
        "id": 2070,
        "name": "541690 - Other Scientific and Technical Consulting Services"
      },
      "post_date": "2018-11-20",
      "deadline": "in 10 months",
      "type": "Presolicitation",
      "company": {
        "name": "NASA",
        "address": "185 Sutter St, San Francisco, CA 94109",
      },
      "agency": "Department of the Army",
      "image": {"url": "https://s3.amazonaws.com/agency-logos.federalregister.gov/32/medium.png"},
    },
    {
      "id":"opp3",
      "name": "Kyoto Amber Upper East",
      "category": {
        "id": 2070,
        "name": "541690 - Other Scientific and Technical Consulting Services"
      },
      "post_date": "2018-11-20",
      "deadline": "in 10 months",
      "type": "Presolicitation",
      "company": {
        "name": "NASA",
        "address": "185 Sutter St, San Francisco, CA 94109",
      },
      "agency": "Department of the Army",
      "image": {"url": "https://s3.amazonaws.com/agency-logos.federalregister.gov/32/medium.png"},
    },
    {
      "id":"opp4",
      "name": "Sushi Academy",
      "category": {
        "id": 2070,
        "name": "541690 - Other Scientific and Technical Consulting Services"
      },
      "post_date": "2018-11-20",
      "deadline": "in 10 months",
      "type": "Presolicitation",
      "company": {
        "name": "NASA",
        "address": "185 Sutter St, San Francisco, CA 94109",
      },
      "image": {"url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg"},
    }
  ],
  filter: false,
  selectedId: null,
  detailed: [],
}

// Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {

    case SET_DETAILED:
      return update(state, {
        detailed: { $set: [action.id] } // _.xor(state.detailed, ) }
      });
      break;

    case SHOW:
      return update(state, {
        selectedId: { $set: action.id }
      });
      break;

      // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function seeDetails(opp, navigation, forceModal) {
  return (dispatch, getState) => {

    let _isDetailed = getDetailed(getState()).indexOf(opp.id) !== -1;

    if (forceModal || _isDetailed) {

      dispatch({
        type: SHOW,
        id: opp.id
      });

      navigation.navigate('OpportunityDetailModal', {
        opp: opp,
      });
    }
    else
    {
      dispatch({
        type: SET_DETAILED,
        id: opp.id
      });
    }
  };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

// selectors
export const getOpportunities = createSelector(
    (state) => state.app.opportunities,
    items => items.opps
)

export const getDetailed = createSelector(
    (state) => state.app.opportunities,
    items => items.detailed
)

export const getSelectedId = createSelector(
    (state) => state.app.opportunities,
    state => state.selectedId
)

export const getRenderMode = createSelector(
    (state) => state.app.opportunities,
    state => state.render
)

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}