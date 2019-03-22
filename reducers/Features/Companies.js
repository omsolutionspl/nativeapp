import {createSelector} from "reselect/lib/index";
import { find } from 'lodash';
import {FILTER_OPPORTUNITIES} from "./Opportunities";


const initState = {
  // opps: OPPORTUNITIES,
  filters: {
   // tab: FILTER_OPPORTUNITIES,
    searchText: '',
    modalOpen: false,
    loading: false
  },
  selectedId: null,
  detailed: [],
}

// Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {

  }

  return state;
}

export const findProfileAttribute = function(attributes, name) {
  return find(attributes, attr => attr.key === name)
}

