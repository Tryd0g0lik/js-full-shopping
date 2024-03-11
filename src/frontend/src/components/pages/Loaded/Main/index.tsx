import React, { JSX } from 'react';
import Banner from '@img/banner.jpg';
import SandalsMyer from '@img/products/sandals_myer.jpg';
import SandalsKeira from '@img/products/sandals_keira.jpg';
import SuperheroSneakers from '@img/products/superhero_sneakers.jpg';

/* Categories */
import { Categories } from '@type';
import LiFC from '@site/Li.tsx';
import AncorFC from '@site/Ancor';

/* Positions */
import { PositionFC } from '@site/Positions/index.tsx';
import { positionsArr } from './db.ts';
import ImageFC from '@site/Img.tsx';

/* Forms */
import ButtonFC from '@site/Forms/Button.tsx';
import DivFC from '@site/Div.tsx';
import LoaderMoreFC from '@site/Loadmore.tsx';

export function LMain({ categories }: Categories): JSX.Element {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src={Banner} className="img-fluid" alt="К весне готовы!" />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <img src={SandalsMyer}
                    className="card-img-top img-fluid" alt="Босоножки MYER" />
                  <div className="card-body">
                    <p className="card-text">Босоножки MYER</p>
                    <p className="card-text">34 000 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src={SandalsKeira}
                    className="card-img-top img-fluid" alt="Босоножки Keira" />
                  <div className="card-body">
                    <p className="card-text">Босоножки Keira</p>
                    <p className="card-text">7 600 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
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
          </section>
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <ul className="catalog-categories nav justify-content-center">
              {/* this a categories dashbord */}
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
                Array.from(positionsArr).map((obj) => (
                  <>
                    <PositionFC id={obj.id} title={obj.title} price={obj.price}>
                      <ImageFC path={obj.images[0]} classes='card-img-top img-fluid' context={obj.title} />
                    </PositionFC>
                  </>
                ))
              }
            </div>
            <LoaderMoreFC />
          </section>
        </div>
      </div>
    </main>
  );
}
