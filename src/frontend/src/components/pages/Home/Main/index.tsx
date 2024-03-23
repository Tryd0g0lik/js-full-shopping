// src\frontend\src\components\pages\Home\Main\index.tsx
import React, { JSX, Fragment, useState, useEffect } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import ImageFC from '@site/Img.tsx';
import ImLoader from '@site/ImgLoader.tsx';
import { PositionFC } from '@site/Positions/index.tsx';
import { SFetch } from '@service/server.ts';
import { CatalogSearched, HandlerPositionVal, Position } from '@type';
import Categories from '@site/Categories/index.tsx';


import { CatalogFC } from '@site/Catalog/index.tsx';
import handlerCategories from '@site/Categories/handlers.ts'
import useCategory from '@site/Categories/useStateCategory';
import useSearchedJSX from '@site/catalog-searcher/UseSearched';
// import useCategoryconst 

const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';
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
  const [category, setCategory] = useState<HandlerPositionVal>();

  useEffect(() => {
    const serverTopSales = new SFetch(url);
    /* create a request to the server | '/top-sales' */
    serverTopSales.requestOneBefore = { 'top-sales': true };
    serverTopSales.getRrequestOneParamServer(useTopsales as typeof useState);
  }, [useTopsales]);
  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* Categories - create a request to the server. Loade the category title list  */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.getRrequestOneParamServer(setCategory as typeof useState);

  }, [setCategory]);

  /* ------------ */
  useEffect(handlerCategories.handlerCategoriesForUseEffect(), [handlerCategories.handlerFilterCategories]);
  // const category = useCategory();
  const catalogSearched: CatalogSearched = {
    categoryNumber: 1 as CatalogSearched['categoryNumber'],
    inputValue: undefined
  }

  let catalog: JSX.Element = useSearchedJSX({ ...catalogSearched })
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
            <Categories order={category as Position[]} />
            { /* -------------- */}
            {catalog}
          </section>
        </div>
      </div>
    </main>
  )
}

