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
  // debugger
  action = (action === undefined)
    ? categoryAllStateAction
    : action;
  // try {
  // debugger
  switch (action.type) {
    // case CategoryTypes.ALL_CATEGORY_VALUE: {
    case ('CATEGORY'): {
      const allState = {
        // ...state,
        ...action // .payload = action.payload
      };
      return allState;
    }

    // // case CategoryTypes.CHILD_CATEGORY_VALUE: {
    // case (state.name as CategoryTypes.CHILD_CATEGORY_VALUE): {
    //   const childState = {
    //     ...state,
    //     categories: state = action // .payload = action.payload
    //   };
    //   return childState;
    // }

    // // case CategoryTypes.MEN_CATEGORY_VALUE: {
    // case (state.name as CategoryTypes.MEN_CATEGORY_VALUE): {
    //   const menState = {
    //     ...state,
    //     categories: state = action // .payload = action.payload
    //   };
    //   return menState;
    // }

    // case (state.name as CategoryTypes.WOMAN_CATEGORY_VALUE): {
    //   const womanState = {
    //     ...state,
    //     categories: state = action // .payload = action.payload
    //   };
    //   return womanState;
    // }

    // case (state.name as CategoryTypes.UNISEX_CATECORY_VALUE): {
    //   const unisexState = {
    //     ...state,
    //     categories: state = action // .payload = action.payload
    //   };
    //   return unisexState;
    // }

    default: {
      // state = action;
      return { categories: state };
    }
  }
  // } catch (er) {
  //   console.warn('[reducers.ts]: Error', err?.message);
  // }
  // return { categories: state };
};

export default counterReducer;
