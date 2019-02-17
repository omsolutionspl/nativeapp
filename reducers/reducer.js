
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

export default combineReducers({

  dashboard,
  opportunities,
  events,

  /*
  calendar: CalendarReducer,
  grid: GridReducer,
  charts: ChartsReducer,
  // ## Generator Reducers
  chat: ChatReducer,
  gallery: GalleryReducer,
  */
});
