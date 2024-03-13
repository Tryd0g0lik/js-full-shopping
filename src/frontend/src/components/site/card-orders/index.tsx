import React, { JSX, useId, useEffect, useState } from 'react';

/* inteface */
import { Heads, Position } from '@type';
import useOrderDelete from '@service/card/delete';

interface StoreOrderPos {
  ind: number
  position: Position
}
let sum = 0;
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
  // { new Date().toLocaleTimeString() } -[Sum: ] { sum }

  debugger
  // if ((prop.length > 0)) {
  //   // let priceAll = (prop).map((item, index, arr) => {

  for (let i = 0; i < prop.length; i++) {
    const quantility = ((prop[i].order as Position).quantility as number);
    const price = ((prop[i].order as Position).price as number);
    sum += (quantility * price);
  }

  //   // return sum;
  //   // });

  //   // sum = priceAll[prop.length - 1];
  //   // priceAll = [] as number[];
  // }

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
            <tr key={useId() + (String(item.order.id))}>
              <td scope="row">{item.id}</td>
              <td><a href="/products/1.(html">{(item.order as Position).title ?? ''} </a></td>
              <td>{(item.order as Position).size !== (undefined) ? (item.order as Position).size : ''}</td>
              <td>{(item.order as Position).quantility !== (undefined) ? (item.order as Position).quantility : ''}</td>
              <td>{(item.order as Position).price !== (undefined) ? (item.order as Position).price : '0 '} руб.</td>

              <td > {((item.order as Position).quantility !== (undefined)) ? ((item.order as Position).quantility) : 0 *
                ((((
                  item.order as Position[]
                )[0].price) !== undefined) ? (item.order)[0].price : 0)} руб.</td >
              <td><button data-index={String(item.id)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
            </tr >
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
