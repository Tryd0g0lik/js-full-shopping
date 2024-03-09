import React, { JSX } from 'react';
import { Pages } from '@type';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomepageFC } from './Home/index.tsx';
/* below is a code for loaded.html */
import { LoadedpageFC } from './Loaded/index.tsx';
/* below is a code for contacts.html */
import { ContactspageFC } from './Contacts/index.tsx';
/* below is a code for catalog.html */
import { CatalogpageFC } from './Catalog/index.tsx';
/* below is a code for catalog.html */
import { CartpageFC } from './Cart/imdex.tsx';
/* below is a code for about.html */
import { AboutpageFC } from './About/index.tsx';
/* below is a code for 404.html */
import { UnderfinedpageFC } from './Undefined/index.tsx';
/* below is a code for 1.html */
import { ProductFC } from './Product/index.tsx';

/**
 * Determine the route
 * @returns
 */
export function PagesFC(): JSX.Element {
  const LoaderCatalogId = async (id): Promise<void> => {
    // const sfetch = new SFetch('http://localhost:7070/api/items/:id');
    console.log(`#1 [PageFC][LoaderCatalogId] fetch Result: ${result}`);
    const answer = await fetch(`http://localhost:7070/api/items/${id}`);
    if (answer.ok) {
      const result = await answer.json();
      console.log(`#2 [PageFC][LoaderCatalogId] fetch Result: ${result}`);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          { /* About page is below */}
          <Route path={Pages.About} element={<AboutpageFC />} />
          { /* Cart page is below */}
          <Route path={Pages.Cart} element={<CartpageFC />} />
          { /* Catalog page is below */}
          <Route path={Pages.Catalog} element={<CatalogpageFC />} />
          <Route path='/catalog/:id' loader={LoaderCatalogId} element={<ProductFC />} />

          { /* Contacts page is below */}
          <Route path={Pages.Contacts} element={<ContactspageFC />} />
          { /* Loaded page is below */}
          <Route path={Pages.Loaded} element={<LoadedpageFC />} />
          { /* Main page is below */}
          <Route path={Pages.Home} element={<HomepageFC />} />
          <Route path='*' element={<UnderfinedpageFC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
