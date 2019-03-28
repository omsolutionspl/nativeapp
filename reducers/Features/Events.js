import {createSelector} from "reselect/lib/index";
import { find } from 'lodash';
import {FILTER_OPPORTUNITIES} from "./Opportunities";



const EVENTS = [{
  id: "o1",
  //brand: 'Citizen',
  title: 'Direct Access Program',
  subtitle: 'Limited Edition',
  date: 'MARCH 14, 2019',
  badge: 'NEW',
  badgeColor: '#3cd39f',
  image: 'https://nvsbe-mbmapp-com-mybusinessmatche.netdna-ssl.com/media/transfer/img/5c1844eb659a3.jpeg',
  url: 'https://dapevents.mbmapp.com/'
}, {
  id: "o2",
  //brand: 'Weeknight',
  title: 'ProBuilder Connect 2019',
  subtitle: 'Miami Beach, Florida',
  date: 'MARCH 14, 2019',
  image: 'https://cdn-mbmapp-com-mybusinessmatche.netdna-ssl.com/media/transfer/img/5c76cd68956b1.jpeg',
  url: 'https://probuilderconnect2019.mbmapp.com/'
},{
  id: "o3",
  //brand: 'Citizen',
  title: 'Medical Surgical Prime Vendor (MSPV) 2.0',
  subtitle: 'Limited Edition',
  date: 'MARCH 14, 2019',
  badge: 'NEW',
  badgeColor: 'green',
  image: 'https://reactnativestarter.com/demo/images/pexels-photo-173427.jpg',
  url: 'https://probuilderconnect2019.mbmapp.com/'
}];

const initState = {
  events: EVENTS,
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
export const getEvents = createSelector(
    (state) => state.app.events,
    items => items.events
)


export const findProfileAttribute = function(attributes, name) {
  return find(attributes, attr => attr.key === name)
}

