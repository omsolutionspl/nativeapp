
import { combineReducers } from 'redux';

/*
import CalendarReducer from './calendar';
import GridReducer from './grid';
import ChartsReducer from './charts';
// ## Generator Reducer Imports
import ChatReducer from './chat';
import GalleryReducer from './gallery';
*/

import dashboard from './Features/Dashboard'
import opportunities from './Features/Opportunities'
import events from './Features/Events'
import chat from './Features/Chat'
import agenda from './Features/Agenda'
import companies from './Features/Companies'

export default combineReducers({

  dashboard,
  opportunities,
  events,
  chat,
  agenda,
  companies

  /*
  grid: GridReducer,
  charts: ChartsReducer,
  // ## Generator Reducers
  gallery: GalleryReducer,
  */
});
