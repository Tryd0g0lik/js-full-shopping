// src\frontend\src\components\pages\Cart\Main\index.tsx

import React, { JSX, Fragment, useState, useCallback, useEffect, MouseEventHandler, HTMLAttributes } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import BannerFC from '@site/Baners.tsx';
import ImageFC from '@site/Img.tsx';

/* Teble */
import CartFc from '@site/card-orders/index.tsx';

import { DispatcherStorage } from '@service/postman';
import { Position } from '@type';

import useAddCard from '@service/card/add';
import CartFormFC from '@site/CartForm';
import { SFetch } from '@service/server';
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
  const [zero, setZero] = useState<number>(0);

  const handlerDeleter = useCallback((ev: React.MouseEvent) => {
    // ev.preventDefault();
    const indexLine = (ev.target as HTMLElement);
    if ((indexLine.tagName.includes('BUTTON')) && (indexLine.innerText.includes('Удалить'))) {
      const n: number = Number(indexLine.dataset.row);

      dispatch.deleteOneOfLocalStorage('order', n);

      const dataObj = dispatch.getOfLocalStorage('order');
      const datas = (dataObj as { data: { order: Array<Position[]> } }).data.order as Position[];
      setZero(1)
      setOrders([...datas]);
    }

  }, []);
  const hadlerform = useCallback((ev: React.MouseEvent): void | null => {
    ev.preventDefault();
    const indexLine = (ev.target as HTMLElement);
    if (orders.length === 0) return
    // debugger
    const ordersArr = [...orders];
    /* ------ */

    if ((indexLine.localName.includes('button')) && (indexLine.innerText.includes('Оформить'))) {
      const userPhones = (document.getElementById('phone') as HTMLInputElement).value
      const userAddress = (document.getElementById('address') as HTMLInputElement).value;
      const checkbox = (document.querySelector('#agreement.active'));
      if ((checkbox === null) || (userAddress === null) || (userPhones === null)) {
        return null;
      };

      /**
       * Below is a template data
       * {
       *   "owner": {
       *     "phone": "+7xxxxxxxxxxx",
       *     "address": "Moscow City",
       *   },
       *   "items": [
       *     {
       *       "id": 1,
       *       "price": 34000,
       *       "count": 1
       *     }
       *   ]
       * }
       *  
       */
      let newStateOrders: { id: number; price: number; count: number; }[] = []
      ordersArr.forEach((elem) => {
        newStateOrders.push({
          id: elem.id as number,
          price: elem.price as number,
          count: elem.quantility as number
        });
      });
      const orders = {
        owner: {
          phone: userPhones,
          address: userAddress,
        },
        items: newStateOrders
      }
      // debugger
      const url = process.env.REACT_APP_RENDER_URL as string; //REACT_APP_RENDER_URL as string as string;
      const request = new SFetch(url);
      request.requestOneBefore = { order: { ...orders } };
      request.getRrequestOneParamServer(setZero as typeof useState, false);

      // }
      if (zero < 0) {
        dispatch.removAll('order');
        setOrders([]);
      }
    }

  }, [orders, zero])

  const remov = { order: orders };

  const handlerCheckbox = useCallback((e: React.MouseEvent) => {
    if (((e.target as HTMLDivElement).id !== null) &&
      (((e.target as HTMLDivElement).id as string).includes('agreement'))) {
      const checkboxDiv = (e.target as HTMLDivElement);
      (String(checkboxDiv.classList).includes('active'))
        ? (
          checkboxDiv.innerText = '',
          checkboxDiv.classList.remove('active')
        )
        : (
          checkboxDiv.classList.add('active'),
          checkboxDiv.innerText = 'v'

        )
    }

  }, [])
  return (
    <>
      <main className="container" >
        <div className="row">
          <div className="col" onClick={(e: React.MouseEvent) => { handlerCheckbox(e) }}>
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
            </section>
            <section onClick={(e: React.MouseEvent) => hadlerform(e)} className="order">
              {/* Оформить заказ */}
              {
                (orders.length > 0) ? <CartFormFC /> : null
              }
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
