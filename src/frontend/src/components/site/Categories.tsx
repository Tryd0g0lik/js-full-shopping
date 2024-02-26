import React, { JSX, useId } from 'react';
import { Categories } from '@type';
import LiFC from './Li.tsx';
import AncorFC from './Ancor.tsx';

/**
 * `src\frontend\src\components\site\Categories.tsx`
 *
 *
 * This categories is located under the catalog's search form
 *
 * @param `categories`: `Categories`.
 * `Categories` it's `Catery[]` types on the point entry.
 *  ```ts
 * interface Category {
 * `id: number
 * title: string
 * }`
  ```
 * @returns ```tsx
  (
    < ul className="catalog-categories nav justify-content-center" >
      {
        Array.from(categories).map((obj) => (
          <>
            <LiFC key={String(obj.id)} classes='nav-item'>
              <AncorFC classes='nav-link' path='#' context={obj.title} />
            </LiFC>
          </>
        ))
      }
    </ul >
  );
  ```
  or
  ```html
  <ul class="catalog-categories nav justify-content-center">
    <li class="nav-item"><a class="nav-link" href="#">Мужская обувь</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Женская обувь</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Обувь унисекс</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Детская обувь</a></li>
    </ul>
  ```
 */
export default function CategoriesFC({ categories }: Categories): JSX.Element {
  return (
    < ul className="catalog-categories nav justify-content-center" >
      <AncorFC classes='nav-link' path='#' context='Все' />
      {
        Array.from(categories).map((obj) => (
          <>
            <LiFC key={useId() + String(obj.id)} classes='nav-item'>
              <AncorFC classes='nav-link' path='#' context={obj.title} />
            </LiFC>
          </>
        ))
      }
    </ul >
  );
}
