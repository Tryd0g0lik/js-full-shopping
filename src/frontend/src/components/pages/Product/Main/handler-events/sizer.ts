// src\frontend\src\components\pages\Product\Main\handler-events\sizer.ts
import React from 'react';

/**
 *
 * @param event : CLickMaous and selects the size of product.
 *  It's html-element for will be add the  html class 'selected' name
 */
export function handlerSize(event: React.MouseEvent): void {
  event.stopPropagation();
  const target = (event.target as HTMLElement).classList;
  target.add('selected');

  /* ------ */
  const sizes = (document.querySelector('span[data-size].catalog-item-size.selected') as HTMLElement);
  const countQuantility = (document.querySelector('span[data-type="quantility"]') as HTMLElement);
  const count = Number((countQuantility).innerHTML);
  console.log(`${(sizes !== null)} && ${(count !== 0)}`);
  if ((sizes !== null) && (count !== 0)) {

    const button = (document.querySelector('button[data-type="sendOrder"]') as HTMLElement);
    button.classList.add('btn-danger');
  }
}
