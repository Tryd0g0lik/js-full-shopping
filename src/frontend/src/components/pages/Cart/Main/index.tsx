// src\frontend\src\components\pages\Cart\Main\index.tsx

import React, { JSX, useMemo, Fragment, useState, useEffect, useCallback, useDeferredValue, useRef } from 'react';
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
import useOrderDelete from '@service/card/delete';
import useAddCard from '@service/card/add';
export const TypeUseState = typeof useState;


/**
 * @returns html
 */
export function CartMainFC(): JSX.Element { // the parh main of cart.html
  const [orders, setOrders] = useState<Position[]>([]);
  const [remov, setRemov] = useState<Position[] | undefined>([]);
  // const addCall = useMemo(() => useAddCard(), []);
  // const delCall = useMemo(() => useOrderDelete(), []);


  // let orders: Position[] = [];

  // CardMemo(): ({ prop }: {
  //   prop: Position[];
  // }) => JSX.Element
  const addCall = useAddCard();
  // const delCall = useOrderDelete();
  console.log("Greeting was rendered at [useMemo]", new Date().toLocaleTimeString());
  const CardMemo = useMemo((): Position[] => {

    // console.log("Greeting was rendered at [addCall]", addCall, new Date().toLocaleTimeString());

    // console.log("Greeting was rendered at [delCall]", addCall, new Date().toLocaleTimeString());

    if ((Array.isArray(addCall)) && (
      (addCall.length === 1) && (
        (remov !== undefined) && ((remov as Position[]).length === 0)
      )
    ) ||
      (
        (remov !== undefined) && (((addCall as Position[]).length - (remov as Position[]).length) === 1)
      )) {
      // debugger
      const result = (remov !== undefined) ? remov : addCall;
      // setOrders(result as unknown as Position[]);
      return result as unknown as Position[];
    } else {
      console.log("Greeting was rendered at [TEST]", new Date().toLocaleTimeString());
      // debugger
      // setOrders(addCall);
      return addCall
    }

  }, []);
  function handlerDeleter(ev: MouseEvent): Position[] | undefined {
    const newPositions: Position[] | { order: any; }[] = [];
    ev.stopPropagation();
    const indexLine = (ev.target as HTMLElement);
    if (indexLine === undefined) {
      return
    }
    const n: number = Number(indexLine.dataset.index);
    const dispatch = new DispatcherStorage();
    dispatch.deleteOneOfLocalStorage('order', n);
    const dataObj = dispatch.getOfLocalStorage('order');
  // if ((dataObj as Array<Record<string, unknown>>).data === undefined) {
  //   return;
  // }
    // debugger
    for (let i = 0; i < ((dataObj as Array<Record<string, unknown>>).data).length; i++) {
      newPositions.push({ order: ((dataObj as Record<string, any>).data)[i].order[0] });

      // debugger
    }
    // return newPositions
    // debugger
    setRemov(newPositions as Position[] | undefined);
  }
  useEffect(() => {
    /* Here is a listener for events/ It's delete one position */
    const table = document.getElementsByTagName('table');
    table[0].addEventListener('click', handlerDeleter);
  // const resp: Array<Record<string, unknown>> = [];

    return () => {
      table[0].removeEventListener('click', handlerDeleter);
    };
  }, []);
  // debugger
  // orders = cardMemo['type'];
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
              <CardFc prop={CardMemo} />
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
