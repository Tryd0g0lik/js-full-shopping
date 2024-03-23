// src\frontend\src\components\pages\Catalog\Main\index.tsx

import React, { ChangeEvent, Fragment, KeyboardEvent, useEffect, useId, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

/* Categories / Position */
import { CatalogSearched, HandlerPositionVal, Position } from '@type';

/* Positions */
import { positionsArr } from '../../Loaded/Main/db.ts';

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
  let categoryNumber: CatalogSearched['categoryNumber'] = 1;
  /* ------------------- */
  let inputValue: string | undefined = undefined;
  if ((location?.state?.searchly !== undefined) && (location?.state?.searchly.length > 0)) {
    inputValue = location?.state?.searchly as string
    // 
  }

  // let categories: Position[] = (category !== undefined) ? category as Position[] : []// Array.from(positionsArr).slice(0);
  // debugger
  let catalog: JSX.Element = useSearchedJSX({ categoryNumber, inputValue });
  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.getRrequestOneParamServer(setCategory as typeof useState);

    // setValueSearch(inputValue);
    // positionarr = ((valueInput !== undefined) && (valueInput.length > 0))
    //   ? searching(valueInput, positionarr)
    //   : positionarr;

    // catalog = useSearchedJSX({ categoryNumber, inputValue, positions });
    // setCatalog(positionarr);
  }, [setCategory]);


  let changeTime: NodeJS.Timeout | undefined;
  function hadlerChangeInput(ev: React.ChangeEvent<HTMLInputElement>) {

    location.state.searchly = undefined
    clearTimeout(changeTime);
    const target = ev.target as HTMLInputElement;

    if ((location?.state !== undefined) && (location.state.searchly !== undefined)) {
      location.state.searchly === undefined
    }
    inputValue = target.value;
    // setValueSearch(inputValue);
    // changeTime = setTimeout(() => {
    //   positionarr = ((valueInput !== undefined) && (valueInput.length > 0))
    //     ? searching(target.value, positionarr)
    //     : positionarr;
    // debugger
    // console.log(`[positionarr]: ${positionarr}`);
    // setCatalog(positionarr);
    // valueInput = target.value;
    // debugger
    setValueSearch(inputValue)
    inputValue = undefined
    // }, 700);
  }

  /* -------------------- */
  useEffect(handlerCategories.handlerCategoriesForUseEffect(), [handlerCategories.handlerFilterCategories]);

  /* ------------ */
  const catalogSearched = {
    categoryNumber: 1 as CatalogSearched['categoryNumber'],
    inputValue: valueSearch
  }
  catalog = useSearchedJSX({ ...catalogSearched })

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
