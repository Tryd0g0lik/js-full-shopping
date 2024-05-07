// src\frontend\src\components\site\catalog-searcher\UseSearched.tsx

import React, { useEffect, useState } from 'react';

import { CatalogSearched, HandlerPositionVal, Position } from '@type';

import { PositionsCatalog } from '@reduxs/interfaces.ts';

import { RootDispatch, storeDispatch, storeGetstate } from '@reduxs/store.ts';
import loadPage from '@site/Catalog/hablerLoaderMore.ts';

import searching from '@site/catalog-searcher/doSearch.ts';
import { CatalogFC } from '@site/Catalog/index.tsx';

export default function useSearchedJSX(prop: CatalogSearched): JSX.Element {
  const [categoryNumbers, useCategoryNumbers] = useState<CatalogSearched['categoryNumber']>(1); // number category // filterCategories
  const [position, usePositions] = useState<HandlerPositionVal>([]); // state a set of position

  let getTotalStore = storeGetstate();
  let stateCategoryNumber: number = getTotalStore.category.playload;
  let stateOldCategory: number = 1;
  let stateOldCatalog: number = 0;

  const reduxSetUserCatalog = (props: Position[]): void => {
    try {
      const action: PositionsCatalog = {
        type: 'CATALOG',
        positions: props
      };

      storeDispatch(action) as RootDispatch;
    } catch (er) {
      console.error('[reduxSetUserCatalog] Err: ', (er as Record<any, any>).message);
    }
  };

  useEffect(() => {
    useCategoryNumbers(getTotalStore.category.payload);

    /**
     * This function works through the setInterval
     * Here is recived a category number of Redux.category.playload. It's after a push event of user
     *
     * The variable 'stateCategory' update/ It's a number type for the 'useFilter'
     */
    const categorySetInaterval = setInterval(() => {
      getTotalStore = storeGetstate();
      /* ------ Category ------ */
      stateCategoryNumber = getTotalStore.category.payload;
      if (stateOldCategory < (stateCategoryNumber) || stateOldCategory > (stateCategoryNumber)) {
        stateOldCategory = Number(String(stateCategoryNumber).slice(0));

        const copyCategoryCopy = Number(String(stateCategoryNumber).slice(0));
        useCategoryNumbers(copyCategoryCopy as CatalogSearched['categoryNumber']);
      }

      /* ------ Catalog ------ */
      if (((getTotalStore.catalog.positions).length < stateOldCatalog) ||
        ((getTotalStore.catalog.positions).length > stateOldCatalog)) {
        usePositions(getTotalStore.catalog.positions);
        stateOldCatalog = getTotalStore.catalog.positions.length;
      }
    }, 500);

    /* Here is positions of Catalog.
    Create a request to the server | '/items/?offset=6' */
    loadPage.requestSFetch(6, usePositions as typeof useState)

    /**
    *
    * There is below a request to server | '/items/?offset=6' and
    * here the is listener for listening a button name 'Загрузить ещё'
    */
    const buttontextCenter = document.querySelector('.catalog .btn-outline-primary');
    if (buttontextCenter !== null) {
      (buttontextCenter as HTMLElement).addEventListener('click', loadPage.hablerLoaderMore(usePositions as typeof useState));
    }

    /* ------ Positions ------ */
    return (): void => {
      clearInterval(categorySetInaterval);
      /* object will be removed */
      if ((buttontextCenter !== null) && (buttontextCenter !== null)) {
        (buttontextCenter as HTMLElement).removeEventListener('click', loadPage.hablerLoaderMore(usePositions as typeof useState));
      }
    };
  }, [usePositions]);

  if (Array.isArray(position)) {
    reduxSetUserCatalog(position);
  }

  const sercgedPosition = ((prop.val !== undefined) && (prop.val.length > 0))
    ? searching(prop.val, (position !== undefined) ? position : [])
    : (position !== undefined) ? position : [];

  const catalog: CatalogSearched = {
    categoryNumber: categoryNumbers,
    positions: sercgedPosition,
    val: undefined
  };

  return <CatalogFC {...catalog} />;
}
