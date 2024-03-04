// src\frontend\src\reduxs\actions.ts
export enum CategoryTypes {
  ALL_CATEGORY_VALUE = 'ALL_CATEGORY_VALUE',
  MEN_CATEGORY_VALUE = 'MEN_CATEGORY_VALUE',
  WOMAN_CATEGORY_VALUE = 'WOMAN_CATEGORY_VALUE',
  UNISEX_CATECORY_VALUE = 'UNISEX_CATECORY_VALUE',
  CHILD_CATEGORY_VALUE = 'CHILD_CATEGORY_VALUE'
}
export enum CategoryNumber {
  ALL_CATEGORY_VALUE = 1,
  MEN_CATEGORY_VALUE = 12,
  WOMAN_CATEGORY_VALUE = 13,
  UNISEX_CATECORY_VALUE = 14,
  CHILD_CATEGORY_VALUE = 15
}

export interface RootState {
  categories: {
    name: CategoryTypes.ALL_CATEGORY_VALUE |
    CategoryTypes.CHILD_CATEGORY_VALUE |
    CategoryTypes.MEN_CATEGORY_VALUE |
    CategoryTypes.UNISEX_CATECORY_VALUE |
    CategoryTypes.WOMAN_CATEGORY_VALUE
    payload: CategoryNumber.ALL_CATEGORY_VALUE |
    CategoryNumber.CHILD_CATEGORY_VALUE |
    CategoryNumber.MEN_CATEGORY_VALUE |
    CategoryNumber.UNISEX_CATECORY_VALUE |
    CategoryNumber.WOMAN_CATEGORY_VALUE
  }
}

// const FILTER_CATEGORY = 'FILTER_CATEGORY';
interface Basicnum {
  payload: CategoryNumber.ALL_CATEGORY_VALUE |
  CategoryNumber.CHILD_CATEGORY_VALUE |
  CategoryNumber.MEN_CATEGORY_VALUE |
  CategoryNumber.UNISEX_CATECORY_VALUE |
  CategoryNumber.WOMAN_CATEGORY_VALUE
}

export interface CategoryAllAction extends Basicnum {
  name: CategoryTypes.ALL_CATEGORY_VALUE
}

export interface CategoryMenAction extends Basicnum {
  name: CategoryTypes.MEN_CATEGORY_VALUE
}

export interface CategoryWomanAction extends Basicnum {
  name: CategoryTypes.WOMAN_CATEGORY_VALUE
}

export interface CateryUnisexAction extends Basicnum {
  name: CategoryTypes.UNISEX_CATECORY_VALUE
}

export interface CategoryChildAction extends Basicnum {
  name: CategoryTypes.CHILD_CATEGORY_VALUE
}

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

export type Actions = CategoryAllAction
  | CategoryChildAction | CategoryMenAction
  | CategoryWomanAction | CateryUnisexAction;
