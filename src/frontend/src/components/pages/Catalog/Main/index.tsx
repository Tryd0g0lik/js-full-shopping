// src\frontend\src\components\pages\Catalog\Main\index.tsx

import React, { Fragment } from 'react';
import Banner from '@Img/banner.jpg';
import HeadFC from '@Attribute/Headers.tsx';
import BannerFC from '@Attribute/Baners.tsx';
import ImageFC from '@Attribute/Img.tsx';

import FormFC from '@Attribute/Forms/index.tsx';
import { InputsFC } from '@Attribute/Forms/Imputs.tsx';

import { Categories } from '@Root';
import LiFC from '@Attribute/Li.tsx';
import AncorFC from '@Attribute/Ancor';

import { PositionFC } from '../Positions/index.tsx';
import { positionsArr } from './db.ts';
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
export function DMainFC({ categories }: Categories): JSX.Element {
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
              <ul className="catalog-categories nav justify-content-center">
                {
                  Array.from(categories).map((obj) => (
                    <>
                      <LiFC key={String(obj.id)} classes='nav-item'>
                        <AncorFC classes='nav-link' path='#' context={obj.title} />
                      </LiFC>
                    </>
                  ))
                }
              </ul>
              <div className="row">
                {/* This is positions by a page 'Категории' */}
                {
                  positionsArr.map((obj) => (
                    <>
                      <PositionFC title={obj.title} price={String(obj.price)}>
                        <ImageFC path={obj.images[0]} classes='card-img-top img-fluid' context={obj.title} />
                      </PositionFC>
                    </>
                  ))
                }
              </div>
              <div className="text-center">
                <button className="btn btn-outline-primary">Загрузить ещё</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
