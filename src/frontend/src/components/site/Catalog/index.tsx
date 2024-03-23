import React, { ChangeEvent, Fragment, JSX, useEffect, useState } from 'react';
import { PositionFC } from '../Positions/index.tsx';
import ImageFC from '../Img.tsx';
import ImLoader from '../ImgLoader.tsx';
import { PositionsCatalog } from '@reduxs/interfaces.ts';
import store, { RootDispatch, storeDispatch, storeGetstate } from '@reduxs/store.ts';
import { CatalogSearched, HandlerPositionVal, Position, SearchForm } from '@type';
import { SFetch } from '@service/server.ts';
import LoaderMoreFC from './Loadmore.tsx';
import BigSerachFormFC from '../catalog-searcher/bigSearchForm.tsx';
import loaderMore from './hablerLoaderMore.ts';
import HeadFC from '@site/Headers.tsx';


// let getTotalStore = storeGetstate();
// let stateCategoryNumber: number = getTotalStore.category.playload;
// let stateOldCategory: number = 1;
// let stateOldCatalog: number = 0;

/* ------------ */

// const reduxSetUserCatalog = (props: Position[]): void => {
// 	try {
// 		const action: PositionsCatalog = {
// 			type: 'CATALOG',
// 			positions: props
// 		};

// 		storeDispatch(action) as RootDispatch;
// 	} catch (er) {
// 		console.error('[reduxSetUserCatalog] Err: ', (er as Record<any, any>).message);
// 	}
// };
// const serverPositions = new SFetch(url);
// function useSearchPositions(prop: Position[] | undefined): Position[] | undefined {
//   const [positions, usePositions] = useState<HandlerPositionVal>((prop !== undefined) ? prop : []); // state a set of position

//   (prop !== undefined) ? prop : []

// }


/* ---------Component for add positions ещ еру catalog--- */
export function CatalogFC({ ...props }: CatalogSearched): JSX.Element {
  // const [filterCategories, useFilterCategories] = useState<number>(1); // number category
  // const [positions, usePositions] = useState<HandlerPositionVal>((prop !== undefined) ? prop : []); // state a set of position
  // debugger


  // useEffect(() => {
  //   useFilterCategories(getTotalStore.category.payload);

  // 	/**
  // 	 * This function works through the setInterval
  //    * Here is recived a category number of Redux.category.playload. It's after a push event of user
  //    *
  // 	 * The variable 'stateCategory' update/ It's a number type for the 'useFilter'
  // 	 */
  // 	const categorySetInaterval = setInterval(() => {
  // 		getTotalStore = storeGetstate();
  // 		/* --------Category-------- */
  //     stateCategoryNumber = getTotalStore.category.payload;
  //     if (stateOldCategory < (stateCategoryNumber as number) || stateOldCategory > (stateCategoryNumber as number)) {
  //       stateOldCategory = stateCategoryNumber as number;
  //       const copyCategoryArr = [stateCategoryNumber].slice();
  //       useFilterCategories(copyCategoryArr[0] as number);
  // 		}
  // 		/* --------Catalog-------- */

  // 		if (((getTotalStore.catalog.positions).length < stateOldCatalog) ||
  // 			((getTotalStore.catalog.positions).length > stateOldCatalog)) {
  // 			usePositions(getTotalStore.catalog.positions);
  // 			stateOldCatalog = getTotalStore.catalog.positions.length;
  // 		}
  // 	}, 500);

  // 	/* Here is positions of Catalog.
  // 	Create a request to the server | '/items/?offset=6' */
  //   loaderMore.requestSFetch(6, usePositions as typeof useState)

  //   /**
  //     *
  //     * There is below a request to server | '/items/?offset=6' and
  //     * here the is listener for listening a button name 'Загрузить ещё'
  //     */
  // 	const buttontextCenter = document.querySelector('.catalog .btn-outline-primary');
  //   if (buttontextCenter !== null) {
  //   // debugger
  //     (buttontextCenter as HTMLElement).addEventListener('click', loaderMore.hablerLoaderMore(usePositions as typeof useState));
  //   }

  //   /* ------Positions------ */

  // 	return (): void => {
  // 		clearInterval(categorySetInaterval);
  // 		/* object will be removed */
  //     if ((buttontextCenter !== null) && (buttontextCenter !== null)) {
  //       (buttontextCenter as HTMLElement).removeEventListener('click', loaderMore.hablerLoaderMore(usePositions as typeof useState));
  // 		}
  // 	};
  // }, [usePositions]);

  // if (Array.isArray(positions)) {
  // 	reduxSetUserCatalog(positions);
  // }


	return (
    <>


			{/* This categories is located under the catalog's search form */}
			<div className="row">
				{/* This is simply positions. It is based  at variables: 'filter:number' */}
				{
          (props.positions !== undefined)
						? (
              props.positions.map((obj) => (
								/* filterCategories */

                (props.categoryNumber === Number(obj.category))
									? (/* Here is category after  filtering */
										<PositionFC key={obj.id} id={obj.id} category={obj.category} title={obj.title} price={obj.price}>
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
                  : (props.categoryNumber === 1) //
										? (
											<PositionFC key={obj.id} id={obj.id} category={obj.category} title={obj.title} price={obj.price}>
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
			{/* Here is a button for will be loaded more the poitions */}
      <LoaderMoreFC />
		</>
	);
}
