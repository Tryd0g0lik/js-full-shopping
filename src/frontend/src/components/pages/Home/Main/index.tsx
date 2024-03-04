// src\frontend\src\components\pages\Home\Main\index.tsx

import React, { JSX, Fragment, useState, useEffect } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import ImageFC from '@site/Img.tsx';
import ImLoader from '@site/ImgLoader.tsx';
import { PositionFC } from '@site/Positions/index.tsx';
import { SFetch } from '@service/server.ts';
import { HandlerPositionVal } from '@type';
import UseCategoriesFC from '@site/Categories.tsx';
import LoaderMoreFC from '@site/Loadmore';

/* REDUX */
import { connect } from 'react-redux';
import store, { RootDispatch, RooteStore } from '@reduxs/store.ts';

import changeCategory from '@reduxs/changeCategoryDispatch.ts';
import { RootState } from '@reduxs/actions.ts';

const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';
let oldOffset: number = 0;

/* получаем данные из редукс  */
const getUserCategory = (num) => {
  const stateUserCategory = store.getState()
    .counterReducer.categories;
  const category: number = stateUserCategory.payload;
  num = category;
};

const setUserCategory = (dispatch: RootDispatch) => (categoryNumber: number) => {
  try {
    const state = changeCategory(categoryNumber);
    const categories: RootState['categories'] = {
      name: state.name,
      payload: state.payload
    };

    const action = { // !! не трогать
      type: 'CATEGORY',
      ...categories
    };

    dispatch(action);
  } catch (er) {
    console.error('[Home/Main] mapStateToProps: ', err.message);
  }
};
/* The top-sales from a server request */

/**
 * `import { UseMainFC } from './Main/index.tsx';`
 */
export function UseMainFC(): JSX.Element {
  // /* REDUX tools */
  /* This datas  is a state for the top-sales */
  const [filterCategories, useFilter] = useState(1);
  const [topsales, useTopsales] = useState<HandlerPositionVal>();
  const [category, useCategory] = useState<HandlerPositionVal>();
  const [positions, usePositions] = useState<HandlerPositionVal>();
  useEffect(() => {
    const serverTopSales = new SFetch(url);
    /* create a request to the server | '/top-sales' */
    serverTopSales.requestOneBefore = { 'top-sales': true };
    serverTopSales.requestOneParamAsync(useTopsales);
  }, [useTopsales]);

  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server | '/categories' */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.requestOneParamAsync(useCategory);
  }, [useCategory]);

  /* There is below a request to server | '/items/?offset=6' and
  * here the is listener for listening a button name 'Загрузить ещё'
  */

  useEffect(() => {
    const serverPositions = new SFetch(url);
    /* create a request to the server | '/items/?offset=6' */
    serverPositions.requestOneBefore = { offset: 6 };
    serverPositions.requestOneParamAsync(usePositions);
    /* ------------ */
    const hablerLoaderMore = (event: MouseEvent): void => {
      event.preventDefault();
      oldOffset += 6;
      serverPositions.requestOneBefore = { offset: oldOffset };
      serverPositions.requestOneParamAsync(usePositions);
    };

    const buttontextCenter = document.querySelector('.catalog .btn-outline-primary');
    if (buttontextCenter !== undefined) {
      (buttontextCenter as HTMLElement).addEventListener('click', hablerLoaderMore);
    }
    return (): void => {
      /* object will be removed */
      if ((buttontextCenter !== undefined) && (buttontextCenter !== null)) {
        (buttontextCenter as HTMLElement).removeEventListener('click', hablerLoaderMore);
      }

      oldOffset = 0;
    };
  }, [usePositions]);

  /* There is below a filter categories. | '/categories'  */
  const handlerFilterCategories = (event: MouseEvent) => {
    event.preventDefault();
    const target = (event.target as HTMLAnchorElement);

    const categoryUSerNumber = Number(target.dataset.category);
    useFilter(categoryUSerNumber);
    /* отправляем данные в redux */
    setUserCategory(store.dispatch)(categoryUSerNumber);
  };

  const handlerCaegoriesForUseEffect = (): () => void => {
    const navCategories = Array.from(document.querySelectorAll('.catalog-categories.nav.justify-content-center .nav-item'));

    for (let i = 0; i < navCategories.length; i++) {
      (navCategories[i] as HTMLLIElement).addEventListener('click', handlerFilterCategories);
    }

    return () => {
      /* object will be removed */
      for (let i = 0; i < navCategories.length; i++) {
        (navCategories[i] as HTMLLIElement).removeEventListener('click', handlerFilterCategories);
      }
    };
  };
  useEffect(handlerCaegoriesForUseEffect, [handlerFilterCategories]);

  console.warn('[newCategoryTest]: ', filterCategories);
  return (

    <main className="container">
      <div className="row">
        <div className="col">
          <Fragment>
            <ImageFC path={Banner} classes="img-fluid" context="К весне готовы!" />
            <HeadFC number={2} classes='banner-header' title='К весне готовы!' />
          </Fragment>
          <section className="top-sales">
            <HeadFC number={2} classes='text-center' title='Хиты продаж!' />
            { /* This's a "Top-sales". | '/top-sales'
            It's based at varieble: "topsales: Position[]|undefined" */
              (topsales !== undefined)
                ? (
                  <div className="row">
                    {Array.from(topsales).map((obj) => (
                      <PositionFC key={obj.id} title={obj.title} price={obj.price} >
                        <ImageFC path={
                          ((obj.images !== undefined) &&
                            (obj.images.length > 0))
                            ? obj.images[0]
                            : '#'
                        } classes='card-img-top img-fluid' context={obj.title} />
                      </PositionFC>
                    ))
                    }
                  </div>
                )
                : < ImLoader />
            }
          </section>
          <section className="catalog">
            <HeadFC number={2} classes='text-center' title='Каталог' />
            {/* Category menu. It is based at variavle: "category". | '/items/?offset=6'
             It's type Array ("Position[]|undefined") */
              (category !== undefined)
                ? (
                  <UseCategoriesFC {...category} />
                )
                : (
                  < ImLoader />
                )
            }
            { /* -------------- */}
            <div className="row">
              {/* This is simply positions. It is based  at variables: 'filter:number' */}
              {

                (positions !== undefined)
                  ? (
                    Array.from(positions).map((obj) => (
                      /* filterCategories */

                      (filterCategories === Number(obj.category))
                        ? (/* Here is category after  filtering */
                          <PositionFC key={obj.id} category={obj.category} title={obj.title} price={obj.price}>
                            <Fragment>
                              <ImageFC path={
                                ((obj.images !== undefined) &&
                                  (obj.images.length > 0))
                                  ? obj.images[0]
                                  : '#'
                              } classes='card-img-top img-fluid' context={obj.title} />
                            </Fragment>
                          </PositionFC>
                        )
                        : (filterCategories === 1) // 
                          ? (
                            <PositionFC key={obj.id} category={obj.category} title={obj.title} price={obj.price}>
                              <Fragment>
                                <ImageFC path={
                                  ((obj.images !== undefined) &&
                                    (obj.images.length > 0))
                                    ? obj.images[0]
                                    : '#'
                                } classes='card-img-top img-fluid' context={obj.title} />
                              </Fragment>
                            </PositionFC>
                          )
                          : null
                    ))
                  )
                  : < ImLoader />
              }
            </div>
            {/* Here is a button for will be loaded more the poitions */}
            <LoaderMoreFC />
          </section>
        </div>
      </div>
    </main>
  );
}

/* The global state including  in this props */
// const subscriber = store.subscribe(getUserCategory(filterCategories));
/* will be include */

// export default connect()(
//   /* the onecom ponent included */
//   UseMainFC
// );
