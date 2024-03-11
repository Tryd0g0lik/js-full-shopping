import React, { JSX } from 'react';
import { TableRow } from '@type';

/**
 * `src\frontend\src\components\site\table\Th\index.tsx`
 *
 * `import ThFC from './Th/index.tsx';`
 *
 * This is an one header cell of table.
 *
 * @param `scop`: `string`. Values is `col` | `row` | `undefined`.
 *  When `scop` has an undefined value or the length of value string more than zero
 *  then return `<th scope={scop}>{context}</th>`
 * else returning `<th >{context}</th>`
 * @param `context`:`string` This's the cell value.
 * @returns `<th>....</th>` it's React.JSX.Element. This's a headers cell of table.
 */
export default function ThFC({ scop = '', context }: TableRow): JSX.Element {
  if (scop !== undefined || (scop as string).length > ('').length) {
    return (
      <th scope={scop}>{context}</th>
    );
  } else {
    return (
      <th>{context}</th>
    );
  }
}
