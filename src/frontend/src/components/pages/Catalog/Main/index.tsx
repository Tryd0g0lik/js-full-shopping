// src\frontend\src\components\pages\Catalog\Main\index.tsx

import React, { Fragment, useEffect, useId, useState } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

import FormFC from '@site/Forms/index.tsx';
import InputsFC from '@site/Forms/Imputs.tsx';
import ButtonFC from '@site/Forms/Button.tsx';

/* Categories / Position */
import { HandlerPositionVal } from '@type';

/* Positions */
import { PositionFC } from '@site/Positions/index.tsx';

import { positionsArr } from './db.ts';

/* Categories */
import UseCategoriesFC from '@site/Categories.tsx';
import { SFetch } from '@service/server.ts';
import LoaderMoreFC from '@site/Loadmore.tsx';
const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';

/**
 * src\frontend\src\components\pages\Catalog\Main\index.tsx
 *
 * `import { DMainFC } from './Main/index.tsx';`
 *
 * `DMainFC` - it value is:
 *
 * `D` - a 'catalog' is replace on `directory`
 * `F` - `function`
 * `C` - `components`
 * @returns html
 */
// export function DMainFC({ categories }: Categories): JSX.Element {
export function DMainFC(): JSX.Element {
  // const arr = { ...categories };
  const [category, useCategory] = useState<HandlerPositionVal>();
  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.requestOneParamAsync(useCategory);
  }, [useCategory]);
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            {/* Top baner */}
            <BannerFC>
              <Fragment>
                <ImageFC path={Banner} classes='img-fluid' context='К весне готовы!' />
                <HeadFC number={2} classes='banner-header' title='К весне готовы!' />
              </Fragment>
            </BannerFC>
            <section className="catalog">
              <HeadFC number={2} classes='text-center' title='Каталог' />
              {/* Top form search by directory */}
              <FormFC classes='catalog-search-form form-inline'>
                <InputsFC classes="form-control" placeholder="Поиск" />
              </FormFC>
              {/* This categories is located under the catalog's search form */}
              {
                (category !== undefined)
                  ? (
                    <UseCategoriesFC {...category} />
                  )
                  : (
                    <></>
                  )
              }
              <div className="row">
                {/* This is positions by a page 'Категории' */}
                {
                  Array.from(positionsArr).map((obj) => (
                    <PositionFC key={useId()} category={obj.category} title={obj.title} price={obj.price}>
                      <ImageFC path={obj.images[0]} classes='card-img-top img-fluid' context={obj.title} />
                    </PositionFC>
                  ))
                }
              </div>
              <LoaderMoreFC />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
