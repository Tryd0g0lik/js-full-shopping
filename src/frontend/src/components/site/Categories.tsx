import React, { JSX, useId, useEffect } from 'react';
import { Position } from '@type';
import LiFC from './Li.tsx';
import AncorFC from './Ancor.tsx';

/**
 * `src\frontend\src\components\site\Categories.tsx`
 *
 * `import UseCategoriesFC from '@site/Categories.tsx';`
 *
 * This categories is located under the catalog's search form
 *
 * @param `Position[]`.
 * `Categories` it's `Position[]` types on the point entry.
 *  ```ts
 * interface Position {
 * `id: number
 * title: string
 * ...
 * }`
  ```
 * @returns ```tsx
  (
    < ul className="catalog-categories nav justify-content-center" >
     <LiFC key={String(obj.id)} classes='nav-item'>
        <AncorFC classes='nav-link' path='#' context="Все" />
      </LiFC>
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
 - then
  ```tsx
  import UseCategoriesFC from '@site/Categories.tsx';
  const [category, useCategory] = useState<HandlerPositionVal>();
  // ....

  {
    (category !== undefined)
      ? (
        <UseCategoriesFC {...category} />
      )
      : (
        <></>
      )
  }
```
 - or
  ```html
  <ul class="catalog-categories nav justify-content-center">
    <li class="nav-item"><a class="nav-link" href="#">Все</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Мужская обувь</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Женская обувь</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Обувь унисекс</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Детская обувь</a></li>
    </ul>
  ```
 */
export default function UseCategoriesFC(categoriesArr: Position[]): JSX.Element {
  const arr = Object.values(categoriesArr);

  return (
    < ul className="catalog-categories nav justify-content-center" >
      <LiFC key={useId()} classes='nav-item'>
        <AncorFC classes='nav-link' dataCategory={1} path='#' context='Все' />
      </LiFC>
      {
        arr.map((obj) => (
          <LiFC key={useId()} classes='nav-item'>
            <AncorFC classes='nav-link' dataCategory={obj.id} path='#' context={obj.title} />
          </LiFC>
        ))
      }
    </ul >
  );
}
