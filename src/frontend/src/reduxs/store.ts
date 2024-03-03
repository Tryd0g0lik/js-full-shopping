// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { compose, legacy_createStore as createStore, applyMiddleware, Action, combineReducers, Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import counterReducer from './reducers.ts';
import { categoryAllStateAction, CategoryTypes, Actions, CategoryNumber, RootState } from './actions.ts';

// import { applyMiddleware } from '@reduxjs/toolkit';
// const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.warn(`Expected the reducer (counterReducer) to be a function. Type: ${typeof counterReducer}`);

/* Adjust the type based on your actual state structure */
let configStore: RootState | undefined;

/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* eslint-enable */
// debugger
// const categoryUser = {
//   ...counterReducer
// };
console.log('[rootReducer]. test: ', 1);
const rootReducer = combineReducers({
  reducer: { categories: counterReducer }
});
// console.warn('[rootReducer]. Type: ', typeof r\ootReducer);
// debugger

console.log('[rootReducer]. test: ', 2);
const store = createStore(
  rootReducer,
  composeEnhancers
);
console.log('[rootReducer]. test: ', 2.1);
// const store = configureStore({
//   rootReducer
// });
export type RootStateCategory = ReturnType<typeof store.getState>;
console.log('[rootReducer]. test: ', 3, store.getState());
// console.log(store);
try {
  // store.dispatch({ categories: { ...categoryAllStateAction } });
  console.log(store.getState());
  console.warn('[configStore]. Type: --------');
} catch (er) {
  console.warn(`[store.ts]: Error: ${er?.message}`);
}
export default store; // configStore as RootState;
