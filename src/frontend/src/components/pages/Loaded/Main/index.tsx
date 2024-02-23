import React, { JSX } from 'react';
import Banner from '@Img/banner.jpg';
import SandalsMyer from '@Img/products/sandals_myer.jpg';
import SandalsKeira from '@Img/products/sandals_keira.jpg';
import SuperheroSneakers from '@Img/products/superhero_sneakers.jpg';

/* Categories */
import { Categories } from '@Root';
import LiFC from '@Attribute/Li.tsx';
import AncorFC from '@Attribute/Ancor';

/* Positions */
import { PositionFC } from '@Pages/Catalog/Positions/index.tsx';
import { positionsArr } from './db.ts';
import ImageFC from '@Attribute/Img.tsx';

/* Forms */
import ButtonFC from '@Attribute/Forms/Button.tsx';

export function LMain({ categories }: Categories): JSX.Element {
  const arr = Array.from(positionsArr);
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
                arr.map((obj) => (
                  <>
                    <PositionFC title={obj.title} price={String(obj.price)}>
                      <ImageFC path={obj.images[0]} classes='card-img-top img-fluid' context={obj.title} />
                    </PositionFC>
                  </>
                ))
              }
              {/* <div className="col-4">
                <div className="card catalog-item-card">
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
                <div className="card catalog-item-card">
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
                    className="card-img-top img-fluid" alt="Босоножки MYER" />
                  <div className="card-body">
                    <p className="card-text">Босоножки MYER</p>
                    <p className="card-text">34 000 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
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
                <div className="card catalog-item-card">
                  <img src={SuperheroSneakers}
                    className="card-img-top img-fluid" alt="Супергеройские кеды" />
                  <div className="card-body">
                    <p className="card-text">Супергеройские кеды</p>
                    <p className="card-text">1 400 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
