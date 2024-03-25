import React, { JSX } from 'react';
import { NavLink } from 'react-router-dom';

import { Position } from '@type';

/**
 * file `src\frontend\src\components\pages\Catalog\Positions\index.tsx`
 *
 * `import { PositionFC } from '../Positions/index.tsx';`
 *
 * @param `title`: `string`. It is a name position
 * @param `price?`: `string` Default values is '0'. This is the main price.
 * @param `children`: `React.JSX.Element`
 * @returns ```
  <div className="col-4">
      <div className="card catalog-item-card">
        <div className='catalog-card-previw'>
          {children}
        </div>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <AncorFC path='/products/1.html' classes='btn btn-outline-primary' context='Заказать' />
        </div>
      </div>
    </div>
  ```
 */
export function PositionFC({ title, id, category = undefined, price = 0, children }: Position): JSX.Element {

  const ind: string = (id !== undefined) ? String(id) : '9999';
  const path = process.env.REACT_APP_ROOT_PATH_NAME || '';
  const pathes = path + `/catalog/${ind}`;

  const result = (category !== undefined)
    ? (
      <div className="col-4" data-category={category}>
        <div className="card catalog-item-card">
          <div className='catalog-card-previw'>
            {children}
          </div>
          <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{price} руб.</p>
            <NavLink className='btn btn-outline-primary' to={pathes}>Заказать</NavLink>
            {/* <AncorFC path={pathes} classes='btn btn-outline-primary' context='Заказать' /> */}
          </div>
        </div>
      </div>
    )
    : (
      <div className="col-4">
        <div className="card catalog-item-card">
          <div className='catalog-card-previw'>
            {children}
          </div>
          <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{price} руб.</p>
            <NavLink className='btn btn-outline-primary' to={pathes}>Заказать</NavLink>
            {/* <AncorFC path={pathes} classes='btn btn-outline-primary' context='Заказать' /> */}
          </div>
        </div>
      </div>
    );
  return result;
}
