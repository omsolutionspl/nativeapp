import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';

/*
import { combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import axios from 'axios';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const AppWithNavigationState = connect((state) => ({
  state: state.nav,
}))(createReduxContainer(AppNavigator));
*/

// define store middlewares as an array
export default [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware,

  // applyMiddleware(promiseMiddleware),
  // applyMiddleware(middleware),//
  // , applyMiddleware(axiosMiddleware(client)));
];
