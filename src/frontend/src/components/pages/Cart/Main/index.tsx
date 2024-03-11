// src\frontend\src\components\pages\Cart\Main\index.tsx

import React, { JSX, Fragment, useState, useEffect } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

/* Teble */
import CardFc from '@site/card-orders/index.tsx';
/* Levels from a form */
import FormFC from '@site/Forms/index.tsx';
import InputsFC from '@site/Forms/Imputs.tsx';
import LabelFC from '@site/Forms/Lebel.tsx';
import ButtonFC from '@site/Forms/Button.tsx';

import { DispatcherStorage } from '@service/postmane.ts';
import { Position } from '@type';
/**
 * @returns html
 */
export function CartMainFC(): JSX.Element { // the parh main of cart.html
  const [orders, setOrders] = useState<Position[]>([]);
  const newPositions: React.SetStateAction<Position[]> | { id: number; order: Record<string, any>; }[] = [];
  const dispatcher = new DispatcherStorage();
  const result = dispatcher.getOfLocalStorage('order');
  let indOrder = 0;
  if (result !== null) {
    for (let i = 0; i < (result as Position[]).length; i++) {
      console.log('result[i]: ', result[i]);
      newPositions.push({
        id: indOrder += 1,
        order: result[i].positions[0]
      });
    }
  }
  const test = newPositions.slice();
  console.log('TEST: ', test);
  useEffect(() => {
    setOrders(newPositions);
  }, [setOrders]);
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
              <CardFc prop={orders} />

            </section>
            <section className="order">
              {/* Оформить заказ */}
              <HeadFC number={2} classes='text-center' title='Оформить заказ' />
              <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                <FormFC classes='card-body'>
                  <Fragment>
                    <div className="form-group">
                      <LabelFC htmlfor='phone' context='Телефон' />
                      <InputsFC classes='form-control' ind="phone" placeholder="Ваш телефон" />
                    </div>
                    <div className="form-group">
                      <LabelFC htmlfor="address" context='Адрес доставки' />
                      <InputsFC classes='form-control' ind="address" placeholder="Адрес доставки" />
                    </div>
                    <div className="form-group form-check">
                      <InputsFC classes='form-check-input' types='checkbox' ind="agreement" />
                      <LabelFC classes='form-check-label' htmlfor="agreement" context='Согласен с правилами доставки' />
                    </div>
                    <ButtonFC classes='btn btn-outline-secondary' context='Оформить' />
                  </Fragment>
                </FormFC>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
