// src\frontend\src\components\pages\Home\Main\index.tsx

import React, { JSX, Fragment, useState, useEffect, useId } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import ImageFC from '@site/Img.tsx';
import ImLoader from '@site/ImgLoader.tsx';
import { SFetch } from '@service/server.ts';
import { Position } from '@type';
const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';
const server = new SFetch(url);
/**
 * `import { MainFC } from './Main/index.tsx';`
 */
export function useMainFC(): JSX.Element {
  const [positions, usePositions] = useState<undefined | Position[]>();
  useEffect(() => {
  /* create a request to the server */

    server.requestOneBefore = { 'top-sales': true };
    server.requestOneParamAsync(usePositions);
  }, [usePositions]);

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
            {
              (positions !== undefined)
                ? (
                  Array.from(positions).map((obj) => (
                    <>
                      {obj.price}
                    </>
                  ))
                )
                : < ImLoader />
            }
          </section>
          <section className="catalog">
            <HeadFC number={2} classes='text-center' title='Каталог' />
            <ImLoader />
          </section>
        </div>
      </div>
    </main>
  );
}
