import React, { Fragment, JSX } from 'react';
import { PositionFC } from '../Positions/index.tsx';
import ImageFC from '../Img.tsx';
import ImLoader from '../ImgLoader.tsx';
import { CatalogSearched, Position } from '@type';
import LoaderMoreFC from './Loadmore.tsx';


/* ------ Component for add positions ещ еру catalog ------ */
/**
 * 
 * @params `categoryNumber`: `1 | 11 | 12 | 13 | 14 | 15` type.
 * @params `positions`?: `Position[]`.
 * @params `inputValue`: `string | undefined`.
 * @returns JSX.Element
 */
export function CatalogFC({ ...props }: CatalogSearched): JSX.Element {

	return (
    <>
			{/* This categories is located under the catalog's search form */}
			<div className="row">
				{/* This is simply positions. It is based  at variables: 'filter:number' */}
				{
          (props.positions !== undefined)
						? (
              props.positions.map((obj) => (
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
