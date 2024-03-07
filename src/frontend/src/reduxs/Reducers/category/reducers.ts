// src\frontend\src\reduxs\reducers.ts

import { categoryAllStateAction } from '../../actions.ts';
import { Actions, Categories, CategoryAllAction, CategoryNumber, CategoryTypes, CATEGORY, RootState, CATALOG } from '../../interfaces.ts';

// const state: Categories = {
//   type: 'CATEGORY',
//   name: categoryAllStateAction.name,
//   payload: categoryAllStateAction.payload
// };
// console.log(`[state.name]: ${state.name}`);
// console.log(`[sate.payload]: ${state.payload}`);
/**
 * `src\frontend\src\reduxs\reducers.ts`
 *
 *  https://redux-toolkit.js.org/api/createReducer
 * or
 * https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice
 *
 * */
function counterReducer(state: Categories = {
  type: 'CATEGORY',
  name: categoryAllStateAction.name,
  payload: categoryAllStateAction.payload
}, action: Categories): Categories {
  if ((action.type !== undefined) && ((action.type as string).includes('CATEGORY'))) {
    state.name = action.name;
    state.payload = action.payload;
    return {
      type: 'CATEGORY',
      name: state.name,
      payload: state.payload
    };
  } else {
    return state;
  }
}

export default counterReducer;
