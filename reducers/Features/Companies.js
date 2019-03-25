import {createSelector} from "reselect/lib/index";
import { find } from 'lodash';
import {FILTER_OPPORTUNITIES} from "./Opportunities";


const COMPANIES = [
  {

    name: 'Amazystems',
    subtitle: '238210 - Electrical Contractors and Other Wiring Installation Contractors',
    badge: () => <Badge>Supplier</Badge>,
    illustration: require('../../assets/images/app/content/dap-bg.png'),
    website: 'https://mbmapp.com',
    description: 'Have you ever wanted to target your feature set? Instantly? We realize that if you maximize strategically then you may also facilitate vertically. Quick: do you have a revolutionary strategy for deali'

  },
  {

    name: 'OM SOLUTIONS',
    subtitle: '238210 - Electrical Contractors and Other Wiring Installation Contractors',
    badge: () => <Badge>Investor</Badge>,
    illustration: require('../../assets/images/app/mbm-logo-350-v2.png'),
    website: 'https://mbmapp.com',
    description: 'Have you ever wanted to target your feature set? Instantly? We realize that if you maximize strategically then you may also facilitate vertically. Quick: do you have a revolutionary strategy for deali'

  }
];

const initState = {
  companies: COMPANIES,
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

// selectors
export const getCompanies = createSelector(
    (state) => state.app.companies,
    items => items.companies
)


export const findProfileAttribute = function(attributes, name) {
  return find(attributes, attr => attr.key === name)
}

