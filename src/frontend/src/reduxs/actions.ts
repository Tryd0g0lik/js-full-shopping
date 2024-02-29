export enum ActionTypes {
  SET_CATEGORY_VALUE = 'SET_CATEGORY_VALUE',
  RESET_CATEGORY_VALUE = 'RESET_CATEGORY_VALUE',
  ALL_CATEGORY_VALUE = 'ALL_CATEGORY_VALUE',
  MEN_CATEGORY_VALUE = 'MEN_CATEGORY_VALUE',
  WOMAN_CATEGORY_VALUE = 'WOMAN_CATEGORY_VALUE',
  UNISEX_CATECORY_VALUE = 'UNISEX_CATECORY_VALUE',
  CHILD_CATEGORY_VALUE = 'CHILD_CATEGORY_VALUE'
}
// const FILTER_CATEGORY = 'FILTER_CATEGORY';
interface Basicnum {
  payload: number
}
export interface ChangeCategoryAction extends Basicnum {
  type: ActionTypes.SET_CATEGORY_VALUE
}

export interface CategoryAllAction extends Basicnum {
  type: ActionTypes.ALL_CATEGORY_VALUE
}

export interface CategoryMenAction extends Basicnum {
  type: ActionTypes.MEN_CATEGORY_VALUE
}

export interface CategoryWomanAction extends Basicnum {
  type: ActionTypes.WOMAN_CATEGORY_VALUE
}

export interface CateryUnisexAction extends Basicnum {
  type: ActionTypes.UNISEX_CATECORY_VALUE
}

export interface CategoryChildAction extends Basicnum {
  type: ActionTypes.CHILD_CATEGORY_VALUE
}

export interface ResetStateAction {
  type: ActionTypes.RESET_CATEGORY_VALUE
}

/* --------------- */
// https://redux-toolkit.js.org/api/createAction

export const defaultStateAction = {
  name: ActionTypes.SET_CATEGORY_VALUE,
  payload: 0
};

export const categoryAllStateAction = {
  name: ActionTypes.ALL_CATEGORY_VALUE,
  payload: 1
};

export const categoryMenStateAction = {
  name: ActionTypes.MEN_CATEGORY_VALUE,
  payload: 12
};

export const categoryWomanStateAction = {
  name: ActionTypes.WOMAN_CATEGORY_VALUE,
  payload: 13
};

export const categoryUnisexStateAction = {
  name: ActionTypes.UNISEX_CATECORY_VALUE,
  payload: 14
};

export const categoryChildStateAction = {
  name: ActionTypes.CHILD_CATEGORY_VALUE,
  payload: 15
};

export type Actions = ChangeCategoryAction
  | ResetStateAction | CategoryAllAction
  | CategoryChildAction | CategoryMenAction
  | CategoryWomanAction | CateryUnisexAction;
