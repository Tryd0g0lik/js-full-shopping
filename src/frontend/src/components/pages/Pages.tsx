import React, { JSX, Fragment } from 'react';
import { HomepageFC } from './Home/index.tsx';
import { MainFC } from './Home/Main/index.tsx';
import HeaderFC from './Header/index.tsx';
import { FooterFC } from './Footer/index.tsx';
export default function PagesFC(): JSX.Element {
  return (
    <>
      <HomepageFC>
        <Fragment>
          <HeaderFC />
          <MainFC />
          <FooterFC />
        </Fragment>
      </HomepageFC>
    </>
  );
}
