// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { compose, legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import counterReducer from './reducers.ts';
// import { applyMiddleware } from '@reduxjs/toolkit';
// const REACT_APP_REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewareEnhancer = applyMiddleware(thunk);

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const legacyCreateStire = createStore(
  combineReducers({
    categories: counterReducer
  }),
  compose(
    composedEnhancers
  )
);

const configStore = (): typeof legacyCreateStire => {
  return legacyCreateStire;
};
// const configStore = (): void => { };
export default legacyCreateStire;

// let devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__?.();
// if (devToolsExtension !== null) {
//   devToolsExtension = ((devToolsExtension === null) || (devToolsExtension === 0))
//     ? 0
//     : devToolsExtension();
// }
