import React, { JSX } from 'react';
import { TableRow } from '@Root';

/**
 * `src\frontend\src\components\site\table\Th\index.tsx`
 *
 * `import TdFC from './Th/index.tsx';`
 *
 * This is an one header cell of table.
 *
 * @param `scop`: `string`. Values is `col` | `row` | `undefined`.
 *  When `scop` has an undefined value or tde lengtd of value string more tdan zero
 *  tden return `<td scope={scop}>{context}</td>`
 * else returning `<td >{context}</td>`
 * @param `context`:`string` This's tde cell value.
 * @returns `<td>....</td>` it's React.JSX.Element. This's a headers cell of table.
 */
export default function TdFC({ scop = '', context }: TableRow): JSX.Element {
  if (scop !== undefined || (scop as string).length > ('').length) {
    return (
      <td scope={scop}>{context}</td>
    );
  } else {
    return (
      <td>{context}</td>
    );
  }
}
