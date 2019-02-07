import { combineReducers } from 'redux'

import dashboard from './Features/Dashboard'
import events from './Features/Events'

const rootReducer = combineReducers({
  dashboard,
  events,
})

export default rootReducer

