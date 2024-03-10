import React, { JSX, useId, useEffect, useState } from 'react';

/* inteface */
import { Heads, Position } from '@type';

/* REDUX */
import { storeGetstate } from '@reduxs/store.ts';
import { useStore } from 'react-redux';

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
export default function TableFc(): JSX.Element {
  const [orders, useOrders] = useState<StoreOrderPos[]>([]);
  let indOrder = 0;

  useEffect(() => {
    const getTotalStore = storeGetstate(); // не работает - переъод страницы !!!!! изменить
    // redux
    console.log(`#1 [site/table][TableFC] storeGetStore Poasitions ${(getTotalStore.order.positions as Position[]).length} Type ${typeof getTotalStore.order.type}`);

    const setPositions = [] as StoreOrderPos[];
    const resp = getTotalStore.order.position !== undefined || [] as Position[];
    for (let i = 0; i < (resp as Position[]).length; i++) {
      setPositions.push({
        ind: indOrder += 1,
        position: (resp as Position[])[i]
      });
    }
    console.log(`#2 [site/table][TableFC] obj-setPositions Length: ${(setPositions).length}`);
    useOrders(setPositions);
  }, []);
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
          (orders).map((item) => (
            // ((item.position) as Position[]).map((item.position) => (
            <tr key={useId() + String(item.position.id)}>
              <td scope="row">{item.ind}</td>
              <td><a href="/products/1.html">{item.position.title} </a></td>
              <td>{(item.position.size !== undefined) || '---'}</td>
              <td>{(item.position.quantility !== undefined) || '---'}</td>
              <td>{(item.position.price !== undefined) || '---'} руб.</td>
              <td>{(((item.position.quantility !== undefined || 0) as number) * ((item.position.price !== undefined || 0) as number))} руб.</td>
              <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
            </tr>
            // ))
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
