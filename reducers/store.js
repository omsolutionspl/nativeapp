/**
 * Main redux store
 */
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import middleware from './middleware';
import reducer from './reducer';
import navReducer from './navigation';
import authReducer from './auth';

// const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  app: reducer,
  nav: navReducer,
  auth: authReducer,
});

const enhancers = [
  applyMiddleware(...middleware),
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
const composeEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
    appReducer,
    enhancer
);

/*
persistStore(store, {
  storage: AsyncStorage,
  blacklist: ['training'],
});
*/

export default store;
