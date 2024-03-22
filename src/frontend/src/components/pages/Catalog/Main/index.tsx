// src\frontend\src\components\pages\Catalog\Main\index.tsx

import React, { ChangeEvent, Fragment, KeyboardEvent, useEffect, useId, useState } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

/* Categories / Position */
import { HandlerPositionVal, Position } from '@type';

/* Positions */
import { PositionFC } from '@site/Positions/index.tsx';

import { positionsArr } from '../../Loaded/Main/db.ts';

/* Categories */
import UseCategoriesFC from '@site/Categories/index.tsx';
import { SFetch } from '@service/server.ts';
import LoaderMoreFC from '@site/Loadmore.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import searching from '@site/catalog-searcher/doSearch.ts';
import { CatalogFC } from '@site/Catalog/index.tsx';
const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';

const usePositionCatalog = () => {


  // setCatalog(positionarr);
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
  const [catalog, setCatalog] = useState<Position[]>(Array.from(positionsArr).slice(0));
  const [valSearch, setSearch] = useState<string | undefined>(undefined);
  /* ------------------- */
  let valueInput: string | undefined = undefined;
  if ((location?.state?.searchly !== undefined) && (location?.state?.searchly.length > 0)) {
    valueInput = location?.state?.searchly as string
    // 
  }

  let positionarr: Position[] = Array.from(positionsArr).slice(0);

  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.getRrequestOneParamServer(setCategory as typeof useState);

    setSearch(valueInput);
    positionarr = ((valueInput !== undefined) && (valueInput.length > 0))
      ? searching(valueInput, positionarr)
      : positionarr;


    setCatalog(positionarr);
  }, [setCategory]);



  let changeTime: NodeJS.Timeout | undefined;
  const hadlerChangeInput = (ev: React.ChangeEvent) => {

    location.state.searchly = undefined
    clearTimeout(changeTime);
    const target = ev.target as HTMLInputElement;

    if ((location?.state !== undefined) && (location.state.searchly !== undefined)) {
      location.state.searchly === undefined
    }
    valueInput = target.value;
    setSearch(valueInput);
    changeTime = setTimeout(() => {
      positionarr = ((valueInput !== undefined) && (valueInput.length > 0))
        ? searching(valueInput, positionarr)
        : positionarr;


      setCatalog(positionarr);
    }, 700);
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
            <section className="catalog" > {/* onKeyDown={handlerKeyboardEnter} */}
              <HeadFC number={2} classes='text-center' title='Каталог' />
              {/* Top form search by directory */}
              < ul className="catalog-categories nav justify-content-center" >
              {
                (category !== undefined)
                  ? (
                    <UseCategoriesFC {...category} />
                  )
                  : (
                    <></>
                  )
              }
              </ul>
              <CatalogFC />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
