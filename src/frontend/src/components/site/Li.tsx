import React, { JSX, JSXElementConstructor, useId } from 'react';
import { DArr } from './imtarses.ts';
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

 * `name` - this is a class with name common. It's has a patern `<li className={name}>`

 * `path' - this is a  path name for additions to the URL `<a className="..." href="path">...</a>`.

 * `context`- It's `<a className="..." href="..">context</a>`.

 * @returns array `<li ...><a ...> ....</a></li>`
 */
export default function LiFC({ name, dashbordArr }: DArr): JSX.Element | undefined { // React.ReactElement[] |
  // const { name, dashbordArr } = props;
  // debugger;
  debugger;
  if (dashbordArr !== undefined && dashbordArr !== null) {
    return (
    <ul className="navbar-nav mr-auto">
      {
        Array.from(dashbordArr).map(({ dashbord }) => (
        <li key={useId()} className={name}>
          < AncorFC
            name='nav-link'
            path={dashbord.path}
            context={dashbord.context}
          />
          </li>
        ))
      }
    </ul >
    );
  }
}
