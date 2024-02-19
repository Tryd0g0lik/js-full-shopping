// src\frontend\src\components\pages\Catalog\Main\index.tsx

import React, { Fragment } from 'react';
import Banner from '@Img/banner.jpg';
import SandalsMyer from '@Img/products/sandals_myer.jpg';
import SuperheroSneakers from '@Img/products/superhero_sneakers.jpg';
import SandalsKeira from '@Img/products/sandals_keira.jpg';
import HeadFC from '@Attribute/Headers.tsx';
import BannerFC from '@Attribute/Baners.tsx';
import ImageFC from '@Attribute/Img.tsx';

import FormFC from '@Attribute/Forms/index.tsx';
import { InputsFC } from '@Attribute/Forms/Imputs.tsx';

import LiFC from '@Attribute/Li.tsx';
import AncorFC from '@Attribute/Ancor';
/**
 * `import { DMainFC } from './Main/index.tsx';`
 *
 * `DMainFC` - it value is:
 *
 * `D` - a 'catalog' is replace on `directory`
 * `F` - `function`
 * `C` - `components`
 * @returns html
 */
export function DMainFC(props: string[]): JSX.Element {
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
              <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Все</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Женская обувь</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Мужская обувь</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Обувь унисекс</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Детская обувь</a>
                </li>
              </ul>
              <div className="row">
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsMyer}
                      className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos; MYER &apos;</p>
                      <p className="card-text">34 000 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsKeira}
                      className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos; Keira &apos;</p>
                      <p className="card-text">7 600 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SuperheroSneakers}
                      className="card-img-top img-fluid" alt="Супергеройские кеды" />
                    <div className="card-body">
                      <p className="card-text">Супергеройские кеды</p>
                      <p className="card-text">1 400 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsMyer}
                      className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos; MYER &apos;</p>
                      <p className="card-text">34 000 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsKeira}
                      className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos;Keira &apos; </p>
                      <p className="card-text">7 600 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SuperheroSneakers}
                      className="card-img-top img-fluid" alt="Супергеройские кеды" />
                    <div className="card-body">
                      <p className="card-text">Супергеройские кеды</p>
                      <p className="card-text">1 400 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
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
