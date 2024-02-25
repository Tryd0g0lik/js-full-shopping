// src\frontend\src\components\pages\Home\Main\index.tsx

import React, { JSX, Fragment } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import ImageFC from '@site/Img.tsx';
import ImLoader from '@site/ImgLoader.tsx';
import { SFetch } from '@service/server.ts';
const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;

/**
 * `import { MainFC } from './Main/index.tsx';`
 */
export function MainFC(): JSX.Element {
  const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api/items';
	/* create a request to the server */
  const server = new SFetch(url);
  server.requestOneBefore = { offset: 58 };
  server.requestOneParamAsync();

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
            <ImLoader />
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
