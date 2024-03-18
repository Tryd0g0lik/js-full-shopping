import React, { JSX } from 'react';
import { Pages, Position, PositionLoader } from '@type';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import { AuthSearchProvider } from '@site/catalog-searcher/OurProvider.tsx';


/**
 * Determine the route
 * @returns
 */
export function PagesFC(): JSX.Element {
  const LoaderCatalogId = async ({ params }: PositionLoader): Promise<any> => {
    const respons = await fetch(`http://localhost:7070/api/items/${params.id}`);
    if (!respons.ok) {
      throw new Error('Status of respons is 404 (position not found)');
    }
    return respons;
  };
  const router = createBrowserRouter([
    // <Route path={Pages.About} element={<AboutpageFC />} />
    {
      path: Pages.About,
      element: <AboutpageFC />
    },
    // <Route path={Pages.Cart} element={<CartpageFC />} />
    {
      path: Pages.About,
      element: <CartpageFC />
    },
    // <Route path={Pages.Catalog} element={<CatalogpageFC />} />
    {
      path: Pages.Catalog,
      element: < CatalogpageFC />
    },
    {
      // < Route path = { Pages.Contacts } element = {< ContactspageFC />} />
      path: Pages.Contacts,
      element: < ContactspageFC />
    },
    // <Route path={Pages.Loaded} element={<LoadedpageFC />} />
    {
      path: Pages.Loaded,
      element: < LoadedpageFC />
    },
    // <Route path={Pages.Home} element={<HomepageFC />} />
    {
      path: Pages.Home,
      element: < HomepageFC />
    },
    // <Route path='*' element={<UnderfinedpageFC />} />
    {
      path: '*',
      element: < UnderfinedpageFC />
    },
    {
      path: '/cart',
      element: <CartpageFC />
    },
    {
      path: '/',
      loader: LoaderCatalogId,
      id: 'root',
      children: [
        {
          path: '/catalog/:id',
          loader: LoaderCatalogId,
          element: <ProductFC />
        }
      ],
      element: <ProductFC />
    }
  ]);
  return (
    <AuthSearchProvider>
      {/* все что обврнули, получает 'text' черезе 'useContext' */}
      < RouterProvider router={router} />
    </AuthSearchProvider>
  )
}


// createRoot(el).render(
//   <RouterProvider router={router} />
// );
