// Dashboard.js

import { createSelector } from 'reselect'

// Actions
const LOAD   = 'MBM/Dashboard/LOAD';
const CREATE = 'MBM/Dashboard/CREATE';

const initState = {
  featured: {
      featured: [
        {
          title: 'Direct Access Program',
          subtitle: 'Offering unique opportunities for Veteran-Owned Small Businesses (VOSBs) to build partnerships, maximize networking, and gain access to Procurement Decision Makers (PDMs).',
          illustration: require('../../assets/images/app/content/dap-bg.png')
        },
        {
          title: 'Veterans Affairs Medical Center Events (VAMC)',
          subtitle: 'Click here for the schedule of VAMC events',
          illustration: { uri :'https://nvsbe-mbmapp-com-mybusinessmatche.netdna-ssl.com/media/transfer/img/5c633903029c3.jpeg'}

          // https://www.mybusinessmatches.com/home/wp-content/uploads/2019/02/2019-OSDBU-Direct-Access-Program-VAMC-Events-Show-Schedule-as-of-1-31-19-201901310303330591.pdf
        },
        {
          title: 'OPPORTUNITY',
          subtitle: '237310 - Highway, Street, and Bridge Construction',
          illustration: { uri : 'https://s3.amazonaws.com/agency-logos.federalregister.gov/32/medium.png' }
        },
        {
          title: 'Favourites landscapes 4',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: { uri :'https://i.imgur.com/cA8zoGel.jpg'}
        }
    ],
    opportunities: [

    ],
    companies: [

    ]
  },
  mainButtons: []

}

// Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
      // do reducer stuff
    default: return state;
  }
}


export function addAgendaItem(item) {
  return (dispatch, getState) => {
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

// selectors
export const getFeatured = createSelector(
    (state) => state.app.dashboard,
    items => items.featured
)


// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}