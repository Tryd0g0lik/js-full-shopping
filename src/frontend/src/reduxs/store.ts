// src\frontend\src\reduxs\store.ts

// https://redux.js.org/tutorials/quick-start#create-a-redux-store
// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { compose, legacy_createStore, combineReducers } from 'redux';
import counterReducer from './reducers.ts';
// const REACT_APP_REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const legacyCreateStire = legacy_createStore(
  combineReducers({
    reducer: {
      categories: counterReducer
    }
  }),
  compose(
    composeEnhancers
  )
);

const configStore = (): typeof legacyCreateStire => {
  return legacyCreateStire;
};

export default configStore;

// let devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__?.();
// if (devToolsExtension !== null) {
//   devToolsExtension = ((devToolsExtension === null) || (devToolsExtension === 0))
//     ? 0
//     : devToolsExtension();
// }

// // const responce = configureStore(reducer);
// const responce = createSlice({
//   name: 'categories',
//   initialState: defaultState,
//   reducers: {
//     changeCategory: rewriteCategory,

//     deleteCategory: (state, action) => {
//       // will be change a state
//     }
//   }
// });
// export const configStore = responce;

// const reducer = (action: Action, state: typeof defaultState = defaultState): typeof defaultState | typeof action => {
//   switch (action.type) {
//     case ActionTypes.FILTER_CATEGORY: {
//       const newState = {
//         ...state,
//         categories: state.category = action.counter
//       };
//       return newState;
//     }

//     default: {
//       return state;
//     }
//   }
// };
