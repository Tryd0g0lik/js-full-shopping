// src\frontend\src\components\pages\Product\Main\handler-events\handlerButton.ts
/* REDUX */
import { PositionsCard } from '@reduxs/interfaces';
import { storeDispatch } from '@reduxs/store.ts';
import { DispatcherStorage } from '@service/postmane';
import { Position } from '@type';
import { useNavigate } from 'react-router-dom';
export function handlerButtom(event: React.MouseEvent): void {
  event.stopPropagation();
  const position = document.querySelector('.catalog-item') as HTMLElement;
  const index = (document.querySelector('section[data-ind]') as HTMLElement).dataset.ind as string;
  const name = (document.querySelector('h2.text-center') as HTMLElement).innerHTML;
  const sizes = (position.querySelector('span[data-size].catalog-item-size.selected') as HTMLElement).innerHTML;
  const countQuantility = (position.querySelector('span[data-type="quantility"]') as HTMLElement).innerHTML;
  const prices = ((position.querySelector('td[data-type="price"]') as HTMLElement)
    .innerHTML).split(' RUB')[0];
  if ((countQuantility === null) ||
    ((countQuantility !== null) && (((countQuantility.includes('0') && ((countQuantility.length === 1))))))) {
    return;
  }
  if (sizes === null) {
    return;
  }
  console.log(`#1 [Product/Main][ProductMainFC][handlerEvent] Index: ${index} `);

  /* Note: 'storeDispatch' is below.
  Bossible in delete/
  This is not used!!

  Then moving to a new page, we lose this's data/
  */
  const order: PositionsCard = {
    type: 'ORDER',
    positions: [{
      id: Number(index),
      title: name,
      size: sizes,
      quantility: countQuantility,
      price: Number(prices)
    }]
  };

  storeDispatch(order);
  const dispatch = new DispatcherStorage(order);
  dispatch.setToLocalStorage('order');
  location.href = process.env.REACT_APP_URL + ':' + process.env.REACT_APP_FPORT + '/card';
}
