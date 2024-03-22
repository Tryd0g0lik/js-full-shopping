// src\frontend\src\components\pages\Home\Main\index.tsx
import React, { JSX, Fragment, useState, useEffect } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import ImageFC from '@site/Img.tsx';
import ImLoader from '@site/ImgLoader.tsx';
import { PositionFC } from '@site/Positions/index.tsx';
import { SFetch } from '@service/server.ts';
import { HandlerPositionVal, Position } from '@type';
import UseCategoriesFC from '@site/Categories.tsx';

/* REDUX */
import { storeDispatch } from '@reduxs/store.ts';

import changeCategory from '@reduxs/changeCategoryDispatch.ts';
import { Categories } from '@reduxs/interfaces.ts';
import { CatalogFC } from '@site/Catalog';
import LoaderMoreFC from '@site/Loadmore';

// import useCategoryconst 
const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';

const setUserCategory = (intstate: number = 1): void => {
  const state = changeCategory(intstate);
  const categories: Categories = {
    type: 'CATEGORY',
    name: state.name,
    payload: state.payload
  };
  storeDispatch({ ...categories });
};

/* The top-sales from a server request */
/**
 * `src\frontend\src\components\pages\Home\Main\index.tsx`
 *
 * `import { UseMainFC } from './Main/index.tsx';`
 *
 * This  works with a `Redux` funnction
 */
export function UseMainFC(): JSX.Element {
  // /* REDUX tools */
  /* This datas  is a state for the top-sales */
  const [topsales, useTopsales] = useState<HandlerPositionVal>(); // top-sales
  const [category, useCategory] = useState<Position[]>(); // THis a dashbord of ctegories

  /* ------------ */
  useEffect(() => {
    const serverTopSales = new SFetch(url);
    /* create a request to the server | '/top-sales' */
    serverTopSales.requestOneBefore = { 'top-sales': true };
    serverTopSales.getRrequestOneParamServer(useTopsales as typeof useState);
  }, [useTopsales]);

  /* ------------ */
  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server | '/categories' */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.getRrequestOneParamServer(useCategory as typeof useState);
  }, [useCategory]);

  /* ------------ */
  /* There is below a request to server | '/items/?offset=6' and
  * here the is listener for listening a button name 'Загрузить ещё'
  */
  /* There is below a filter categories. It's a category number  | '/categories'  */
  const handlerFilterCategories = (event: MouseEvent): void => {
    event.preventDefault();
    const target = (event.target as HTMLAnchorElement);

    const categoryUSerNumber = Number(target.dataset.category);
    setUserCategory(categoryUSerNumber);
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
            { /* This's a "Top-sales". | '/top-sales' */
              (topsales !== undefined)
                ? (
                  <div className="row">
                    {Array.from(topsales).map((obj) => (
                      <PositionFC key={obj.id} id={obj.id} title={obj.title} price={obj.price} >
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
            < ul className="catalog-categories nav justify-content-center" >
            {/* Category menu. It is based at variable: "category". | '/items/?offset=6'
             It's type Array ("Position[]|undefined") */
              (category !== undefined)
                ? (
                  <UseCategoriesFC {...category} />
                )
                : (
                  < ImLoader />
                )
              }
            </ul>
            { /* -------------- */}
            <CatalogFC />
          </section>
        </div>
      </div>
    </main>
  )
}
