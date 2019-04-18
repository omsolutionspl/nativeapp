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
    address: {
      
    },
    description: 'Have you ever wanted to target your feature set? Instantly? We realize that if you maximize strategically then you may also facilitate vertically. Quick: do you have a revolutionary strategy for deali'

  },
  {

    name: 'OM SOLUTIONS',
    subtitle: '238210 - Electrical Contractors and Other Wiring Installation Contractors',
    badge: () => <Badge>Investor</Badge>,
    illustration: require('../../assets/images/app/mbm-logo-350-v2.png'),
    website: 'https://mbmapp.com',
    description: 'Have you ever wanted to target your feature set? Instantly? We realize that if you maximize strategically then you may also facilitate vertically. Quick: do you have a revolutionary strategy for deali'

  },
  {

    name: 'Darby Overseas Investments, Ltd',
    subtitle: '238210 - Electrical Contractors and Other Wiring Installation Contractors',
    badge: () => <Badge>Investor</Badge>,
    illustration: {uri: 'https://idbinvest2019-mbmapp-com-mybusinessmatche.netdna-ssl.com/media/filter/m/img/Firm_Logo_Jan_2019-1547854327.jpg'},
    website: 'https://www.darbyoverseas.com/',
    description: 'Darby is a pioneer in emerging markets private equity investing with experience and on-the-ground presence in Asia, Central & Eastern Europe and Latin America.'

  },
  {

    name: 'Export and Investment Center of the Dominican Republic ',
    subtitle: '238210 - Electrical Contractors and Other Wiring Installation Contractors',
    badge: () => <Badge>Investor</Badge>,
    illustration: {uri: 'https://idbinvest2019-mbmapp-com-mybusinessmatche.netdna-ssl.com/media/filter/m/img/LOGO_CEIRD_INGLES01-1550505796.png'},
    website: 'http://www.ceird.gob.do/',
    description: 'A government agency created in 2013 with the explicit purpose of attracting foreign investment and fostering exports, assists foreign investors in their business ventures in the Dominican Republic'

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

