// `src\frontend\src\components\site\table\index.tsx`
import React, { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { Position } from '@type';


/**
 * That an data tenmplate on entrypoint. {"data":{"order":[{"id":66,"title":"Босоножки 'Myer' с завязкой на щиколотке","size":"18 US","quantility":1,"price":34000},{"id":66,"title":"Босоножки 'Myer' с завязкой на щиколотке","size":"18 US","quantility":1,"price":34000},{"id":73,"title":"Супергеройские кеды","size":"16 US","quantility":1,"price":1400},{"id":26,"title":"Кроссовки с рынка","size":"10 US","quantility":1,"price":1500},{"id":27,"title":"Кроссовки пёстрые","size":"10 US","quantility":1,"price":1750},{"id":28,"title":"Туфли-долматинцы","size":"10 US","quantility":1,"price":4000}]}}
 * 
 * This is the order table for the cart
 * @returns teble, it's React.JSX.Element
 */
export default function CartFc({ ...props }): JSX.Element {
  const navigate = useNavigate();
  let sum = 0;
  const rest = props.order;
  for (let i = 0; i < props.order.length; i++) {
    const quantility = ((rest[i] as Position).quantility as number);
    const price = ((rest[i] as Position).price as number);
    sum += (quantility * price);
  } 

  const handlerProductNameReference = (ref: string): (e: MouseEvent) => void => {
    return (e: MouseEvent): void => {
      navigate(ref);
    }
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
          (rest).map((item: Position, index: number) => (
            <tr key={index}>
              <td scope="row">{index + 1}</td>
              <td><a href={item.pathname} onClick={handlerProductNameReference(item.pathname as string)}>{(item as Position).title ?? ''} </a></td>
              <td>{(item as Position).size !== (undefined) ? (item as Position).size : ''}</td>
              <td>{(item as Position).quantility !== (undefined) ? (item as Position).quantility : ''}</td>
              <td>{(item as Position).price !== (undefined) ? (item as Position).price : '0 '} руб.</td>

              <td > {((item.quantility !== undefined) && (item.price !== undefined))
                ? ((item.quantility as number) * item.price)
                : 0} руб.</td >
              <td><button data-row={index + 1} data-index={String(item.id)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
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
