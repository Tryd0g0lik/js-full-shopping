import React, { JSX } from 'react';
import { Pages, Position, PositionLoader } from '@type';
import { useNavigate, createBrowserRouter, RouterProvider, RelativeRoutingType } from 'react-router-dom';
import { HomepageFC } from './Home/index.tsx';
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
const rootPathName: string | undefined | null = process.env.REACT_APP_ROOT_PATH_NAME + "/" || '';

const LoaderCatalogId = async ({ params }: PositionLoader): Promise<any> => {
  const pathname = process.env.REACT_APP_RENDER_URL as string;
  const respons = await fetch(pathname + `/api/items/${params.id}`);
  if (!respons.ok) {
    throw new Error('Status of respons is 404 (position not found)');
  }
  return respons;
};

const Router = createBrowserRouter([
  {
    path: rootPathName + Pages.About,
    element: <AboutpageFC />
  },
  {
    path: rootPathName + Pages.Cart,
    element: <CartpageFC />
  },
  {
    path: rootPathName + Pages.Catalog,
    element: < CatalogpageFC />
  },
  {
    path: rootPathName + Pages.Contacts,
    element: < ContactspageFC />
  },
  {
    path: rootPathName + Pages.Home,
    element: < HomepageFC />
  },
  {
    path: '*', // '*',
    element: < UnderfinedpageFC />
  },
  {
    path: rootPathName + Pages.Home,
    loader: LoaderCatalogId,
    id: 'subroot',
    children: [
      {
        path: rootPathName + Pages.Product,
        loader: LoaderCatalogId,
        element: <ProductFC />
      }
    ],
    element: <ProductFC />
  }

]);

const authSearchProvider = (
  <AuthSearchProvider>
    {/* все что обврнули, получает 'text' черезе 'useContext' */}
    < RouterProvider router={Router} />
  </AuthSearchProvider>
);
type SP = typeof authSearchProvider;
/**
 * Determine the route
 * @returns
 */
export function PagesFC(): SP {
  return authSearchProvider;
}
