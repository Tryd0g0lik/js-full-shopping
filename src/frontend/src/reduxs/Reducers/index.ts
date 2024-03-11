// src\frontend\src\reduxs\Reducers\index.ts

import counterReducer from './category/reducers.ts';
import catalogReducer from './catalog/reducers.ts';
import { combineReducers } from 'redux';
import orderReducer from './order/reducerc.ts';

export const rootReducer = combineReducers({
  order: orderReducer,
  category: counterReducer,
  catalog: catalogReducer
});
