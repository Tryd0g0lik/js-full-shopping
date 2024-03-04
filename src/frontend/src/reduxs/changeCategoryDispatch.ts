// src\frontend\src\reduxs\changeCategoryDispatch.ts
import {
  Actions,
  categoryAllStateAction,
  categoryChildStateAction,
  categoryMenStateAction,
  categoryWomanStateAction,
  categoryUnisexStateAction

} from '@reduxs/actions.ts';

// const serCategory - (userNumberAction) => () => {

// }
const changeCategory = (userNumberAction: number): Actions => {
  switch (userNumberAction) {
    case categoryAllStateAction.payload: {
      return { ...categoryAllStateAction };
    }
    case categoryMenStateAction.payload: {
      return { ...categoryMenStateAction };
    }
    case categoryWomanStateAction.payload: {
      return { ...categoryWomanStateAction };
    }
    case categoryUnisexStateAction.payload: {
      return { ...categoryUnisexStateAction };
    }
    case categoryChildStateAction.payload: {
      return { ...categoryChildStateAction };
    }
    default: {
      return { ...categoryAllStateAction };
    }
  }
};

export default changeCategory;
