// src\frontend\src\reduxs\reducers.ts

import { Actions, ActionTypes, defaultStateAction, ChangeCategoryAction } from './actions.ts';

/**
 * `src\frontend\src\reduxs\reducers.ts`
 *
 *  https://redux-toolkit.js.org/api/createReducer
 * or
 * https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice
 * */
const counterReducer = (action: Actions, state: typeof defaultStateAction = defaultStateAction): typeof defaultStateAction => {
  // will be change a state or default value returns
  // debugger
  switch (action.name) {
    case ActionTypes.SET_CATEGORY_VALUE: {
      const newState = {
        ...state,
        /* changs the 'category' at 'action.payload' */
        userCategory: state.payload = action.payload as ChangeCategoryAction['payload']
      };

      return newState;
    }

    case ActionTypes.ALL_CATEGORY_VALUE: {
      const allState = {
        ...state,
        userCategory: state.payload = action.payload
      };
      return allState;
    }

    case ActionTypes.CHILD_CATEGORY_VALUE: {
      const childState = {
        ...state,
        userCategory: state.payload = action.payload
      };
      return childState;
    }

    case ActionTypes.MEN_CATEGORY_VALUE: {
      const menState = {
        ...state,
        userCategory: state.payload = action.payload
      };
      return menState;
    }

    case ActionTypes.WOMAN_CATEGORY_VALUE: {
      const womanState = {
        ...state,
        userCategory: state.payload = action.payload
      };
      return womanState;
    }

    case ActionTypes.UNISEX_CATECORY_VALUE: {
      const unisexState = {
        ...state,
        userCategory: state.payload = action.payload
      };
      return unisexState;
    }

    default: {
      return state;
    }
  }
};

export default counterReducer;
