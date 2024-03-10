import { Position } from '@type';
import React, { JSX, useEffect } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { handlerMinus } from './handler-events/calculator.ts';
import { handlerSize } from './handler-events/sizer.ts';
import { handlerButtom } from './handler-events/handlerButton.ts';
import baner from '@img/banner.jpg';
import { storeGetstate } from '@reduxs/store.ts';

export function ProductMainFC(): JSX.Element {

  const params = useAsyncValue() as Position;
  const { id, images, price, title, sku, manufacturer, color, material, season, reason, sizes, ...param } = { ...params };

  const img = ((images !== undefined) && (Array.isArray(images))) ? ((images.length > 0) ? images[1] : images[1]) : '';
  const orders = storeGetstate();
  console.log(`[TEST]: ${orders.type}`);
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src={baner} className="img-fluid" alt="К весне готовы!" />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="catalog-item" data-ind={id}>
            <h2 className="text-center">{title}</h2>
            <div className="row">
              <div className="col-5">
                <img src={img}
                  className="img-fluid" alt="" />
              </div>
              <div className="col-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{reason}</td>
                    </tr>
                    <tr>
                      <td>Стоимость</td>
                      <td data-type="price">{price} RUB</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center" onClick={handlerSize}>
                  <p>Размеры в наличии:
                    {
                      Array.from(sizes as Array<{
                        size: string
                        available: boolean
                      }>).map((item) => {
                        if (item.available) {
                          return <span key={id} data-size={item.size} className="catalog-item-size">{item.size}</span>;
                        }
                      })
                    }
                  </p>
                  <p>Количество: <span className="btn-group btn-group-sm pl-2" onClick={handlerMinus}>
                    <button className="btn btn-secondary" data-type='minus'>-</button>
                    <span data-type="quantility" className="btn btn-outline-primary">0</span>
                    <button className="btn btn-secondary" data-type='plus'>+</button>
                  </span>
                  </p>
                </div>
                <button className="btn btn-danger btn-block btn-lg" onClick={handlerButtom}>В корзину</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
