// src\frontend\src\reduxs\reducers.ts

import { Actions, CategoryTypes, ChangeCategoryAction, RootState, categoryAllStateAction } from './actions.ts';

/**
 * `src\frontend\src\reduxs\reducers.ts`
 *
 *  https://redux-toolkit.js.org/api/createReducer
 * or
 * https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice
 * */
const counterReducer = (action, state: Actions = categoryAllStateAction): RootState => {
  // will be change a state or default value returns
  action = (action === undefined)
    ? categoryAllStateAction
    : action;

  switch (action.type) {
    case ('CATEGORY'): {
      const allState = {
        ...action
      };
      return allState;
    }

    default: {
      return { categories: state };
    }
  }
};

export default counterReducer;
