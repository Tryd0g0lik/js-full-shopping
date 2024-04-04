// src\frontend\src\components\pages\Product\Main\handler-events\handlerButton.ts
/* REDUX */
import { PositionsCard } from '@type';
import { storeDispatch } from '@reduxs/store.ts';
import { DispatcherStorage } from '@service/postman';

export function handlerButtom(event: React.MouseEvent): void {

  event.stopPropagation();

  const position = document.querySelector('.catalog-item') as HTMLElement;
  const index = (document.querySelector('section[data-ind]') as HTMLElement);
  const name = (document.querySelector('h2.text-center') as HTMLElement);
  const sizes = (position.querySelector('span[data-size].catalog-item-size.selected') as HTMLElement);
  const countQuantility = (position.querySelector('span[data-type="quantility"]') as HTMLElement);
  const prices = ((position.querySelector('td[data-type="price"]') as HTMLElement)
    .innerHTML).split(' RUB')[0];
  if ((countQuantility === null) ||
    ((countQuantility !== null) && (((countQuantility.innerHTML.includes('0') && ((countQuantility.innerHTML.length === 1))))))) {
    return;
  }
  if (sizes === null) {
    return;
  }

  /* Note: 'storeDispatch' is below.
  Bossible in delete/
  This is not used!!

  Then moving to a new page, we lose this's data/
  */
  const order: PositionsCard = {
    type: 'ORDER',

    order: [{
      id: Number(index.dataset.ind),
      title: name.innerHTML,
      size: sizes.innerHTML,
      quantility: Number(countQuantility.innerHTML),
      price: Number(prices),
      pathname: location.pathname
    }]
  };

  storeDispatch(order);
  const dispatch = new DispatcherStorage(order);
  dispatch.setToLocalStorage('order');
  location.href = (process.env.REACT_APP_GITHUB_URL as string) + (process.env.REACT_APP_ROOT_PATH_NAME as string) + '/cart';
}
