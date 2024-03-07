import React, { Fragment, JSX, useEffect, useState } from 'react';
import { PositionFC } from './Positions/index.tsx';
import ImageFC from './Img.tsx';
import ImLoader from './ImgLoader.tsx';
import { PositionsCatalog } from '@reduxs/interfaces.ts';
import store, { RootDispatch, storeDispatch, storeGetstate } from '@reduxs/store.ts';
import { HandlerPositionVal, Position } from '@type';
import { SFetch } from '@service/server.ts';

const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';
let getTotalStore = storeGetstate();
let stateCategory: number = getTotalStore.category.playload;
let stateOldCategory: number = 1;

type US = ReturnType<typeof useState>;

let oldOffset: number = 0;
const reduxSetUserCatalog = (props: Position[]): void => {
  // console.log(`[reduxSetUserCatalog] props Type: ${typeof props} Value: ${props}`);
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

export function CatalogFC(): JSX.Element {
  const [filterCategories, useFilter] = useState<number>(1);
  const [positions, usePositions] = useState<HandlerPositionVal>();
  const serverPositions = new SFetch(url);

  useEffect(() => {
    useFilter(getTotalStore.category.payload);

    /**
     * Here is recived a number of Redux.category.playload.
     * The variable 'stateCategory' update/ It's a number type for the 'useFilter'
     */
    const categorySetInaterval = setInterval(() => {
      getTotalStore = storeGetstate();
      stateCategory = getTotalStore.category.payload;
      if (stateOldCategory < stateCategory || stateOldCategory > stateCategory) {
        stateOldCategory = stateCategory;
        const copyCategoryArr = [stateCategory].slice();
        useFilter(copyCategoryArr[0]);
      }
    }, 500);

    /* Here is positions of Catalog.
    Create a request to the server | '/items/?offset=6' */
    serverPositions.requestOneBefore = { offset: 6 };
    serverPositions.requestOneParamAsync(usePositions);
    /* ---------addPositionsForCatalog--- */

    const hablerLoaderMore = (event: MouseEvent): void => {
      event.preventDefault();
      oldOffset += 6;
      console.log('[hablerLoaderMore] (Array.isArray(positions) 1:', Array.isArray(positions), 'positions Value: ', positions);
      serverPositions.requestOneBefore = { offset: oldOffset };
      serverPositions.requestOneParamAsync(usePositions);
      const moreUserPositions = positions ?? [];

      if ((Array.isArray(moreUserPositions))) {
        console.log('[hablerLoaderMore] (Array it is moreUserPositions:', Array.isArray(moreUserPositions), 'Value: ', moreUserPositions);
        reduxSetUserCatalog(moreUserPositions);
      }
      // }
    };

    const buttontextCenter = document.querySelector('.catalog .btn-outline-primary');
    if (buttontextCenter !== undefined) {
      (buttontextCenter as HTMLElement).addEventListener('click', hablerLoaderMore);
    }
    return (): void => {
      clearInterval(categorySetInaterval);
      /* object will be removed */
      if ((buttontextCenter !== undefined) && (buttontextCenter !== null)) {
        (buttontextCenter as HTMLElement).removeEventListener('click', hablerLoaderMore);
      }
    };
  }, [usePositions]);

  if (positions !== undefined) {
    reduxSetUserCatalog(positions);
  }

  // console.log('[hablerLoaderMore] (Array.isArray(positions) 2:', Array.isArray(positions), 'positions Value: ', positions);
  return (
    <div className="row">
      {/* This is simply positions. It is based  at variables: 'filter:number' */}
      {

        (positions !== undefined)
          ? (
            Array.from(positions).map((obj) => (
              /* filterCategories */

              (filterCategories === Number(obj.category))
                ? (/* Here is category after  filtering */
                  <PositionFC key={obj.id} category={obj.category} title={obj.title} price={obj.price}>
                    <Fragment>
                      <ImageFC path={
                        ((obj.images !== undefined) &&
                          (obj.images.length > 0))
                          ? obj.images[0]
                          : '#'
                      } classes='card-img-top img-fluid' context={obj.title} />
                    </Fragment>
                  </PositionFC>
                )
                : (filterCategories === 1) //
                  ? (
                    <PositionFC key={obj.id} category={obj.category} title={obj.title} price={obj.price}>
                      <Fragment>
                        <ImageFC path={
                          ((obj.images !== undefined) &&
                            (obj.images.length > 0))
                            ? obj.images[0]
                            : '#'
                        } classes='card-img-top img-fluid' context={obj.title} />
                      </Fragment>
                    </PositionFC>
                  )
                  : null
            ))
          )
          : < ImLoader />
      }
    </div>
  );
}
