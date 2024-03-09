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
}
