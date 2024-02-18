import React, { JSX, JSXElementConstructor, useId } from 'react';
import { Dash } from './interfaces.ts';
import AncorFC from './Ancor.tsx';

/**
 * @param `props` has type
 * `
  {
    name: string,
    dashbordArr: [{
      dashbord: {
        path: string
        context: string
      }
    }]
}`

 * `name` - this is a class with name common. It's has a patern `<li className={name}>...`

 * `path' - this is a  path name for additions to the URL `<a className="..." href="path">...</a>` from <AncorFC ... >.

 * `context`- It's `<a className="..." href="..">context</a>`.

 * @returns array `<li ...><a ...> ....</a></li>`
 */
export default function LiFC({ name, dashbord }: Dash): JSX.Element | undefined { // React.ReactElement[] |
  // const { ...line } = dashbord;
  // debugger;
  // debugger;
  // if (ldashbord !== undefined && line.name !== null) {
  return (
    <li className={name}>
      < AncorFC
        name='nav-link'
        path={dashbord.path}
        context={dashbord.context}
      />
    </li>
  );
// }
}
