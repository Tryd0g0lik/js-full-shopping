// src\frontend\src\components\pages\Catalog\Main\index.tsx

import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

import { CatalogSearched, HandlerPositionVal, Position } from '@type';

/* Categories */
import { SFetch } from '@service/server.ts';


import Categories from '@site/Categories/index.tsx';
import handlerCategories from '@site/Categories/handlers.ts'
import BigSerachFormFC from '@site/catalog-searcher/bigSearchForm.tsx';
import useSearchedJSX from '@site/catalog-searcher/UseSearched.tsx';

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
  const location = useLocation();
  const [category, setCategory] = useState<HandlerPositionVal>();
  const [valueSearch, setValueSearch] = useState<string | undefined>(undefined);

  /* ------ */
  let inputValue: string | undefined = undefined;
  if ((location?.state?.searchly !== undefined) && (location?.state?.searchly.length > 0)) {

    /* Here getting datas from the search form small of other page. */
    inputValue = location?.state?.searchly as string

  }

  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* Categories - create a request to the server. Loade the category title list  */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.getRrequestOneParamServer(setCategory as typeof useState);

    setValueSearch(inputValue);
  }, [setCategory]);


  let changeTime: NodeJS.Timeout | undefined;
  function hadlerChangeInput(ev: React.ChangeEvent<HTMLInputElement>) {
    // location.state.searchly = undefined
    clearTimeout(changeTime);
    const target = ev.target as HTMLInputElement;

    if ((location?.state !== undefined) && (location.state.searchly !== undefined)) {
      location.state.searchly === undefined
    }
    inputValue = target.value;

    setValueSearch(inputValue)


  }

  /* ------ */
  useEffect(handlerCategories.handlerCategoriesForUseEffect(), [handlerCategories.handlerFilterCategories]);

  /* ------ */
  const catalogSearched = {
    categoryNumber: 1 as CatalogSearched['categoryNumber'],
    inputValue: valueSearch
  }
  let catalog: JSX.Element = useSearchedJSX({ ...catalogSearched })

  const searchForm = {
    search: inputValue
  }

  return (
    <>
      <main className="container">
        <div className="row" >
          <div className="col" >
            {/* Top baner */}
            <BannerFC>
              <Fragment>
                <ImageFC path={Banner} classes='img-fluid' context='К весне готовы!' />
                <HeadFC number={2} classes='banner-header' title='К весне готовы!' />
              </Fragment>
            </BannerFC>
            <section className="catalog" onChange={hadlerChangeInput} > {/* onKeyDown={handlerKeyboardEnter} */}
              <HeadFC number={2} classes='text-center' title='Каталог' />
              {/* Top form search by directory */}
              <Categories order={category as Position[]} />
              <BigSerachFormFC {...searchForm} />

              {catalog}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
