import React, { JSX, useId, useEffect, useState } from 'react';

/* inteface */
import { Heads, Position } from '@type';
import useOrderDelete from '@service/card/delete';

interface StoreOrderPos {
  ind: number
  position: Position
}

/**
 * `src\frontend\src\components\site\table\index.tsx`
 *
 * `import TableFc from '@site/table/index.tsx';`
 *
 * `<table class='...'>`
 *
 * @param `headers`: `string[][]`. It's array headers. We can to see table's headers
 * @returns teble, it's React.JSX.Element
 */
export default function CardFc({ prop }: { prop: Position[] }): JSX.Element {

  let sum = 0;
  // debugger
  if ((prop.length > 0)) {
    let priceAll = (prop).map((item) => {
      // debugger
      sum += (item.order.quantility * item.order.price);
      return sum;
    });

    sum = priceAll[prop.length - 1];
    priceAll = [] as number[];
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        {
          (prop).map((item) => (
            <tr key={useId() + String(item.order.id)}>
              <td scope="row">{item.id}</td>
              <td><a href="/products/1.html">{item.order.title ?? ''} </a></td>
              <td>{(item.order.size !== undefined) ? item.order.size : ''}</td>
              <td>{(item.order.quantility !== undefined) ? item.order.quantility : ''}</td>
              <td>{(item.order.price !== undefined) ? item.order.price : '0 '} руб.</td>

              <td>{((item.order.quantility !== undefined) ? item.order.quantility : 0) *
                ((item.order.price !== undefined) ? item.order.price : 0)} руб.</td>
              <td><button data-index={String(item.id)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
            </tr>
          ))
        }
        <tr>
          <td colSpan={5} className="text-right">Общая стоимость</td>

          <td>{sum}</td>
        </tr>
      </tbody>
    </table>
  );
}
