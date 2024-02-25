import React, { JSX, Fragment, useId } from 'react';

/* Teble */
import TrFC from './Tr/index.tsx';
import ThFC from './Th/index.tsx';
/* inteface */
import { Heads } from '@type';

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
export default function TableFc({ headers }: Heads): JSX.Element {
  return (
    <table className="table table-bordered">
      <thead>
        <TrFC>
          <Fragment>
            {
              Array.from(headers).map((arr) => (
                <ThFC key={useId()} scop={arr[0]} context={arr[1]} />
              ))
            };
          </Fragment>
        </TrFC>
      </thead>
      { /* Форма json  ? */}
      <tbody>
        <tr>
          <td scope="row">1</td>
          <td><a href="/products/1.html">Босоножки &apos; MYER &apos; </a></td>
          <td>18 US</td>
          <td>1</td>
          <td>34_000 руб.</td>
          <td>34_000 руб.</td>
          <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
        </tr>
        <tr>
          <td colSpan={5} className="text-right">Общая стоимость</td>
          <td>34_000 руб.</td>
        </tr>
      </tbody>
    </table>

  );
}
