// Dashboard.js

import { createSelector } from 'reselect'

// Actions
const LOAD   = 'MBM/Dashboard/LOAD';
const CREATE = 'MBM/Dashboard/CREATE';

const initState = {
  featured: [
    {
      title: 'Favourites landscapes 1',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
      title: 'Favourites landscapes 2',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitsdsdur',
      illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
      title: 'Favourites landscapes 3',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
      title: 'Favourites landscapes 4',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
      title: 'Favourites landscapes 6',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/l49aYS3l.jpg'
    }
  ],
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
    (state) => state.dashboard,
    items => items.featured
)


// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}