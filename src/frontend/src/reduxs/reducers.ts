// src\frontend\src\reduxs\reducers.ts

import { categoryAllStateAction } from './actions.ts';
import { Actions, Categories, CategoryNumber, CategoryTypes, RootState } from './interfaces.ts';

/**
 * `src\frontend\src\reduxs\reducers.ts`
 *
 *  https://redux-toolkit.js.org/api/createReducer
 * or
 * https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice
 * */
const counterReducer = (action: Categories, state: Categories = {
  type: 'CATEGORY',
  ...categoryAllStateAction
}): RootState['categories'] => {
  // will be change a state or default value returns
  action = (action === undefined)
    ? categoryAllStateAction
    : state;
  switch (action.type) {
    case ('CATEGORY'): {
      // const allState = {
      //   ...action
      // };
      state.payload = action.payload;
      state.name = action.name;
      return {
        // ...allState
        type: 'CATEGORY',
        name: state.name,
        payload: state.payload
      };
    }

    default: {
      return {
        type: 'CATEGORY',
        name: state.name,
        payload: state.payload
      };
    }
  }
};
export default counterReducer;
