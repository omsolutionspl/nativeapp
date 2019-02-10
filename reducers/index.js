import { combineReducers } from 'redux'

import dashboard from './Features/Dashboard'
import opportunities from './Features/Opportunities'
import events from './Features/Events'

const rootReducer = combineReducers({
  dashboard,
  opportunities,
  events,
})

export default rootReducer

