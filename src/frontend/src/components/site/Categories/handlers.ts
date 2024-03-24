/* REDUX */
import { storeDispatch } from '@reduxs/store.ts';
import changeCategory from '@reduxs/changeCategoryDispatch.ts';
import { Categories } from '@reduxs/interfaces.ts';

/* ------ Redux ------ */
const setUserCategory = (intstate: number = 1): void => {
  const state = changeCategory(intstate);
  const categories: Categories = {
    type: 'CATEGORY',
    name: state.name,
    payload: state.payload
  };


  storeDispatch({ ...categories });
};


/**
 * through a redux (setUserCategory) he working
 * There is below a filter categories. It's a category number  | '/categories'  */
const handlerFilterCategories = (event: MouseEvent): void => {

  event.preventDefault();
  const target = (event.target as HTMLAnchorElement);

  const categoryUSerNumber = Number(target.dataset.category);
  /* ------ */
  const navCategories = Array.from(document.querySelectorAll('.catalog-categories.nav.justify-content-center .nav-item a'));
  navCategories.forEach((item) => {
    (item as HTMLElement).classList.remove('active')
  });
  (target as HTMLElement).classList.add('active');

  setUserCategory(categoryUSerNumber);

};

/* Thi's a handler for the change event/ It's listener for '<input value>' of seach form */
const handlerCategoriesForUseEffect = (): () => void => {
  const navCategories = Array.from(document.querySelectorAll('.catalog-categories.nav.justify-content-center .nav-item'));

  for (let i = 0; i < navCategories.length; i++) {
    (navCategories[i] as HTMLLIElement).addEventListener('click', handlerFilterCategories);
  }

  return () => {
    for (let i = 0; i < navCategories.length; i++) {
      (navCategories[i] as HTMLLIElement).removeEventListener('click', handlerFilterCategories);
    }
  };
};


export default { handlerCategoriesForUseEffect, handlerFilterCategories }
