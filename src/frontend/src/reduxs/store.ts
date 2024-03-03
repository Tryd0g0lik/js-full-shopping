// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { compose, legacy_createStore as createStore, applyMiddleware, Action, combineReducers, Store } from 'redux';
import counterReducer from './reducers.ts';
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* eslint-enable */
console.log('[rootReducer]. test: ', 1);
const rootReducer = combineReducers({
  counterReducer
});

console.log('[rootReducer]. test: ', 2);
const store = createStore(
  rootReducer,
  composeEnhancers
);
console.log('[rootReducer]. test: ', 2.1);
export type RooteStore = typeof store;
export type RootStateCategory = ReturnType<typeof store.getState>;
export type RootDispatch = ReturnType<typeof store.dispatch>;

console.log('[rootReducer]. test: ', 3, store.getState());
try {
  console.log(store.getState());
  console.warn('[configStore]. Type: --------');
} catch (er) {
  console.warn(`[store.ts]: Error: ${er?.message}`);
}
export default store; // configStore as RootState;
