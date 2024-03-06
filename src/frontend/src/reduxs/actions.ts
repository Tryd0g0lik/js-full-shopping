// src\frontend\src\reduxs\actions.ts

import { CategoryAllAction, CategoryChildAction, CategoryMenAction, CategoryTypes, CategoryWomanAction, CateryUnisexAction } from './interfaces.ts';

/* --------------- */
// https://redux-toolkit.js.org/api/createAction

export const categoryAllStateAction: CategoryAllAction = {
  name: CategoryTypes.ALL_CATEGORY_VALUE,
  payload: 1
};

export const categoryMenStateAction: CategoryMenAction = {
  name: CategoryTypes.MEN_CATEGORY_VALUE,
  payload: 12
};

export const categoryWomanStateAction: CategoryWomanAction = {
  name: CategoryTypes.WOMAN_CATEGORY_VALUE,
  payload: 13
};

export const categoryUnisexStateAction: CateryUnisexAction = {
  name: CategoryTypes.UNISEX_CATECORY_VALUE,
  payload: 14
};

export const categoryChildStateAction: CategoryChildAction = {
  name: CategoryTypes.CHILD_CATEGORY_VALUE,
  payload: 15
};

export const poitionsCatalog = {
  positions: []
};
