// src\frontend\src\components\pages\Cart\Main\index.tsx
import React, { JSX, Fragment } from 'react';
import Banner from '@Img/banner.jpg';
import HeadFC from '@Attribute/Headers.tsx';
import BannerFC from '@Attribute/Baners.tsx';
import ImageFC from '@Attribute/Img.tsx';

/* Teble */
import TableFc from '@Attribute/table/index.tsx';
/* Levels from a form */
import { Form } from 'react-router-dom';
// import

/**
 * `CMFC` - it value is:
 *
 * `C` - `cart`
 * `M` - `main`
 * `F` - `function`
 * `C` - `components`
 * @returns html
 */
export function CMFC(): JSX.Element { // the parh main of cart.html
  const thead = [
    ['col', '#'], ['col', 'Название'],
    ['col', 'Размер'], ['col', 'Кол - во'],
    ['col', 'Стоимость'], ['col', 'Итого'],
    ['col', 'Действия']];
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            {/** Баннер (top) - К весне готовы */}
            <BannerFC>
              <Fragment>
                <ImageFC path={Banner} classes="img-fluid" context="К весне готовы!" />
                <HeadFC number={2} classes='banner-header' title='К весне готовы!' />
              </Fragment>
            </BannerFC>
            <section className="cart">
              {/* Корзина  - заголовок & таблица */}
              <HeadFC number={2} classes='text-center' title='Корзина' />
              <TableFc headers={thead} />

            </section>
            <section className="order">
              <HeadFC number={2} classes='text-center' title='Оформить заказ' />
              <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>

                <form className="card-body">
                  <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input className="form-control" id="phone" placeholder="Ваш телефон" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input className="form-control" id="address" placeholder="Адрес доставки" />
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="agreement" />
                    <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                  </div>
                  <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
