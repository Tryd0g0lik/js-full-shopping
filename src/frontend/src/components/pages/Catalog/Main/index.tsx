// src\frontend\src\components\pages\Catalog\Main\index.tsx

import React, { ChangeEvent, Fragment, KeyboardEvent, useEffect, useId, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

/* Categories / Position */
import { HandlerPositionVal, Position } from '@type';

/* Positions */
import { positionsArr } from '../../Loaded/Main/db.ts';

/* Categories */
import { SFetch } from '@service/server.ts';


import searching from '@site/catalog-searcher/doSearch.ts';
import { CatalogFC } from '@site/Catalog/index.tsx';
import Categories from '@site/Categories/index.tsx';
import handlerCategories from '@site/Categories/handlers.ts'
import BigSerachFormFC from '@site/catalog-searcher/bigSearchForm.tsx';

const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';

let oldPhraseSerch: string | undefined = '';
function useSearched(prop: {
  valueInput: string | undefined
  positionarr: Position[] | undefined
}): JSX.Element {

  const positionarr = ((prop.valueInput !== undefined) && (prop.valueInput.length > 0))
    ? searching(prop.valueInput, (prop.positionarr !== undefined) ? prop.positionarr : [])
    : (prop.positionarr !== undefined) ? prop.positionarr : [];

  return <CatalogFC {...positionarr as Position[]} />
}
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
  // const [catalog, setCatalog] = useState<Position[]>(Array.from(positionsArr).slice(0));
  const [valueSearch, setValueSearch] = useState<string | undefined>(undefined);

  /* ------------------- */
  let valueInput: string | undefined = undefined;
  if ((location?.state?.searchly !== undefined) && (location?.state?.searchly.length > 0)) {
    valueInput = location?.state?.searchly as string
    // 
  }

  let positionarr: Position[] = Array.from(positionsArr).slice(0);

  let catalog: JSX.Element = useSearched({ valueInput, positionarr });
  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.getRrequestOneParamServer(setCategory as typeof useState);

    setValueSearch(valueInput);
    // positionarr = ((valueInput !== undefined) && (valueInput.length > 0))
    //   ? searching(valueInput, positionarr)
    //   : positionarr;

    catalog = useSearched({ valueInput, positionarr })
    // setCatalog(positionarr);
  }, [setCategory]);


  let changeTime: NodeJS.Timeout | undefined;
  const hadlerChangeInput: React.FormEventHandler = (ev: React.ChangeEvent) => {

    location.state.searchly = undefined
    clearTimeout(changeTime);
    const target = ev.target as HTMLInputElement;

    if ((location?.state !== undefined) && (location.state.searchly !== undefined)) {
      location.state.searchly === undefined
    }
    valueInput = target.value;
    setValueSearch(valueInput);
    // changeTime = setTimeout(() => {
    //   positionarr = ((valueInput !== undefined) && (valueInput.length > 0))
    //     ? searching(target.value, positionarr)
    //     : positionarr;
    // debugger
    // console.log(`[positionarr]: ${positionarr}`);
    // setCatalog(positionarr);
    // valueInput = target.value;
    debugger
    catalog = useSearched({ valueInput, positionarr })
    // }, 700);
  }

  /* -------------------- */
  useEffect(handlerCategories.handlerCategoriesForUseEffect(), [handlerCategories.handlerFilterCategories]);

  /* ------------ */
  const searchForm = {

    search: valueInput
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
