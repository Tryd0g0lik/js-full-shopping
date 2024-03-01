// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { compose, legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './reducers.ts';
// const REACT_APP_REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const legacyCreateStire = createStore(
  combineReducers({
    categories: counterReducer
  }),
  compose(
    composeEnhancers
  )
);

const configStore = (): typeof legacyCreateStire => {
  return legacyCreateStire;
};
// const configStore = (): void => { };
export default configStore;

// let devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__?.();
// if (devToolsExtension !== null) {
//   devToolsExtension = ((devToolsExtension === null) || (devToolsExtension === 0))
//     ? 0
//     : devToolsExtension();
// }
