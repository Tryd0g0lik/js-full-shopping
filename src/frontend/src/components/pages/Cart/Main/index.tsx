// src\frontend\src\components\pages\Cart\Main\index.tsx

import React, { JSX, Fragment, useState, useCallback } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

/* Teble */
import CartFc from '@site/card-orders/index.tsx';
/* Levels from a form */
import FormFC from '@site/Forms/index.tsx';
import InputsFC from '@site/Forms/Imputs.tsx';
import LabelFC from '@site/Forms/Lebel.tsx';
import ButtonFC from '@site/Forms/Button.tsx';

import { DispatcherStorage } from '@service/postman';
import { Position } from '@type';

import useAddCard from '@service/card/add';
const dispatch = new DispatcherStorage();
function oldStatePositions(): Position[] {
  const adding = useAddCard();
  return adding[0].order as Position[];
}

/**
 * Inside the CartMainFC component we have a 'handlerDeleter' handler . There is a function to remove from the cart. 
 * That DELETE ,  a simple user see on athe cart page. A Delete button will appear.
 * It's handler for a 'CartFc' child component 
 * 
 * src\frontend\src\components\pages\Header\index.tsx
 * The state orders in a page header change into the 'page/Header/HeaderFC' component
 * * The state orders in a page header will be change. We has  a three varios: 
 * - page loading;
 *  or
 * - the mouse click event was recived. It's if a click by the button 'Удалить' (from is a the page cart).
 * @returns JSX.Element
 */
export function CartMainFC(): JSX.Element {
  const [orders, setOrders] = useState<Position[]>(() => oldStatePositions());
  const handlerDeleter = useCallback((ev: React.MouseEvent) => {
    ev.preventDefault();
    const indexLine = (ev.target as HTMLElement);
    if ((indexLine.tagName.includes('BUTTON')) && (indexLine.innerText.includes('Удалить'))) {
      const n: number = Number(indexLine.dataset.index);
      dispatch.deleteOneOfLocalStorage('order', n);

      const dataObj = dispatch.getOfLocalStorage('order');
      const datas = (dataObj as { data: { order: Array<Position[]> } }).data.order as Position[];
      setOrders([...datas]);
    }

  }, []);
  const remov = { order: orders }

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
            <section onClick={(e: React.MouseEvent) => { handlerDeleter(e) }} className="cart">
              {/* Корзина  - заголовок & таблица */}
              <HeadFC number={2} classes='text-center' title='Корзина' />
              <CartFc {...remov} />              
              {/* <CardMemo {...orders} /> */}
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
