import React, { JSX, useId, useEffect, useState } from 'react';

/* inteface */
import { Heads, Position } from '@type';

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
export default function CardFc({ prop }: any): JSX.Element {
  const orders = prop;

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
          (orders as Position[]).map((item) => (
            // ((item.position) as Position[]).map((item.position) => (
            <tr key={useId() + String(item.order.id)}>
              <td scope="row">{item.id}</td>
              <td><a href="/products/1.html">{item.order.title} </a></td>
              <td>{item.order.size}</td>
              <td>{item.order.quantility}</td>
              <td>{item.order.price} руб.</td>
              <td>{item.order.quantility * item.order.price} руб.</td>
              <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
            </tr>
          ))
        }
        <tr>
          <td colSpan={5} className="text-right">Общая стоимость</td>
          <td>34_000 руб.</td>
        </tr>
      </tbody>
    </table>
  );
}
