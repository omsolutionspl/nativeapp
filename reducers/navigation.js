import { NavigationActions } from 'react-navigation';
import includes from 'lodash/includes';

import MainNavigator from '../navigation/MainNavigator';

// TODO: (RN) Check
export default function NavigatorReducer(state, action) {
  // Initial state
  if (!state) {
    return MainNavigator.router.getStateForAction(action, state);
  }

  // Is this a navigation action that we should act upon?
  if (includes(NavigationActions, action.type)) {
    return MainNavigator.router.getStateForAction(action, state);
  }

  return state;
}
