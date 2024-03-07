// src\frontend\src\reduxs\reducers.ts

import { categoryAllStateAction } from '../../actions.ts';
import { Categories } from '../../interfaces.ts';

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
