// src\frontend\src\reduxs\Reducers\index.ts

import counterReducer from './category/reducers.ts';
import catalogReducer from './catalog/reducers.ts';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  category: counterReducer,
  catalog: catalogReducer
});
