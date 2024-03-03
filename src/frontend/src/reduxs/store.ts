// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { compose, legacy_createStore as createStore, applyMiddleware, Action, combineReducers, Store } from 'redux';
import { thunk } from 'redux-thunk';
import counterReducer from './reducers.ts';
import { categoryAllStateAction, CategoryTypes, Actions, CategoryNumber, RootState } from './actions.ts';

// import { applyMiddleware } from '@reduxjs/toolkit';
// const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const middlewareEnhancer = applyMiddleware(thunk);

// const composeWithDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhancers = composeWithDevTools(middlewareEnhancer);
// debugger
// const action = counterReducer({ ...categoryAllStateAction });
console.warn(`Expected the reducer (counterReducer) to be a function. Type: ${typeof counterReducer}`);

if (typeof counterReducer !== 'function') {
  throw new Error(`The reducer is a function. Type: ${typeof counterReducer}`);
}

/* Adjust the type based on your actual state structure */
let configStore: RootState | undefined;
try {
  if (!(typeof counterReducer as string).includes('function')) {
    throw new Error('The reducer is not a function!');
  }
  /* eslint-disable no-underscore-dangle */
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  /* eslint-enable */
  console.log(`[typeof reducer 0]: ${typeof counterReducer}`);
  const rootReducer = combineReducers({
    categories: { ...counterReducer }
  });
  console.warn('[rootReducer]. Type: ', typeof rootReducer);
  configStore = createStore(rootReducer, composeEnhancers) as RootState;
  console.warn('[configStore]. Type: --------');
} catch (er) {
  console.log(`[typeof reducer]: ${typeof counterReducer}`);
  console.warn(`[store.ts]: Error: ${er?.message}`);
}
export default configStore as RootState;
