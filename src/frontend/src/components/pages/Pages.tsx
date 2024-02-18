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
/* below is a code from about.html */
import { AboutFC } from './About/index.tsx';
import { AMain } from './About/Main/index.tsx';
/* below is a code from 404.html */
import { UndefinedFC } from './Undefined/index.tsx';
import { UMainFC } from './Undefined/Main/index.tsx';

export default function PagesFC(): JSX.Element {
  return (
    <>
      <hr />
      <UndefinedFC>
        <Fragment>
          <HeaderFC />
          <UMainFC />
          <FooterFC />
        </Fragment>
      </UndefinedFC>
      <hr />
      { /* About page is below */}
      <AboutFC>
        <Fragment>
          <HeaderFC />
          <AMain />
          <FooterFC />
        </Fragment>
      </AboutFC>
      <hr />
      { /* Cart page is below */}
      <CartFC>
        <Fragment>
          <HeaderFC />
          <CMFC />
          <FooterFC />
        </Fragment>
      </CartFC>
      <hr />
      { /* Catalog page is below */}
      <CatalogFC>
        <Fragment>
          <HeaderFC />
          <DMainFC />
          <FooterFC />
        </Fragment>
      </CatalogFC>
      <hr />
      { /* Contacts page is below */}
      <ContactsFC>
        <Fragment>
          <HeaderFC />
          <CMainFC />
          <FooterFC />
        </Fragment>
      </ContactsFC>
      <hr />
      { /* Loader page is below */}
      <LoaderFC>
        <Fragment>
          <HeaderFC />
          <LMain />
          <FooterFC />
        </Fragment>
      </LoaderFC>
      <hr />
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
