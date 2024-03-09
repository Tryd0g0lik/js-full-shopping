import { Position } from '@type';
import React, { JSX } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { handlerMinus } from './handler-events/calculator.ts';
import { handlerSize } from './handler-events/sizer.ts';
import { handlerButtom } from './handler-events/handlerButton.ts';

export function ProductMainFC(): JSX.Element {
  const params = useAsyncValue() as Position;
  const { id, images, title, sku, manufacturer, color, material, season, reason, sizes, ...param } = { ...params };

  const img = ((images !== undefined) && (Array.isArray(images))) ? ((images.length > 0) ? images[1] : images[1]) : '';


  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <section className="catalog-item">
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
                    <span className="btn btn-outline-primary">0</span>
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
    </header>
  );
}
