import React, { JSX, Fragment } from 'react';
import { HomepageFC } from './Home/index.tsx';
import { MainFC } from './Home/Main/index.tsx';
import HeaderFC from './Header/index.tsx';
import { FooterFC } from './Footer/index.tsx';
/* below is a code from loader.html */
import { LoaderFC } from './Loader/index.tsx';
import { LMain } from './Loader/Main/index.tsx';
/* below is a code from contacts.html */
import { ContactsFC } from './Contacts/index.tsx';
import { CMainFC } from './Contacts/Main/index.tsx';
/* below is a code from catalog.html */
import { CatalogFC } from './Catalog/index.tsx';
import { DMainFC } from './Catalog/Main/index.tsx';
/* below is a code from catalog.html */
import { CartFC } from './Cart/imdex.tsx';
import { CMFC } from './Cart/Main/index.tsx'; // the parh main of cart.html

export default function PagesFC(): JSX.Element {
  return (
    <>
      { /* Cart page is below */}
      <CartFC>
        <Fragment>
          <HeaderFC />
          <CMFC />
          <FooterFC />
        </Fragment>
      </CartFC>
      { /* Catalog page is below */}
      <CatalogFC>
        <Fragment>
          <HeaderFC />
          <DMainFC />
          <FooterFC />
        </Fragment>
      </CatalogFC>
      { /* Contacts page is below */}
      <ContactsFC>
        <Fragment>
          <HeaderFC />
          <CMainFC />
          <FooterFC />
        </Fragment>
      </ContactsFC>
      { /* Loader page is below */}
      <LoaderFC>
        <Fragment>
          <HeaderFC />
          <LMain />
          <FooterFC />
        </Fragment>
      </LoaderFC>
      { /* Main page is below */}
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
