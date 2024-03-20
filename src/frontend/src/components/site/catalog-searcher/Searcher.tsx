import React, { createContext, KeyboardEvent, useState, JSX, ChangeEventHandler, ChangeEvent } from 'react';
import { useSearch } from '@site/catalog-searcher/useSearch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '@type';
// https://youtu.be/jv0ckzkKYzU?list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE&t=1286

export function SearcherFC(): JSX.Element {
	const navigate = useNavigate();
	const location = useLocation()
	const [inputValue, setInputValue] = useState('');
	const { method } = useSearch();
	/* проверяем где в шапке актевиирована форма поиска . Если это странице не есть страница каталога,
	то делаем переадресацию на каталог */
	let fromPage = location.pathname || '/'; // location.state?.from?.pathname ||
	if (location.pathname !== undefined &&
		location.pathname !== '/catalog') { // смотрим откуда была переадресайия
		fromPage = '/catalog';
	};
	// const search = location.search.slice
	const handlerrEntre = (e: KeyboardEvent) => {
		if (e.key.includes('Enter')) {
      e.preventDefault();
		}
	}
	// ChangeEventHandler<HTMLInputElement>
  let searchTime: string | number | NodeJS.Timeout | undefined;
  const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
    let oldSearchly = "";

		// event.stopPropagation();
		const target = event.target;
    // setInputValue(target.value);
    oldSearchly += target.value;
		clearTimeout(searchTime);
		searchTime = setTimeout(() => {
			if ((target.value).includes(oldSearchly)) {
        method(oldSearchly as string, () => navigate(fromPage, { state: { searchly: oldSearchly } })); // переадресация  
        // setTimeout(() => {
        //   navigate(fromPage, { state: { searchly: undefined } })
        // }, 1500);

			}
    }, 1200);

	}

	return (
		<div data-id="search-expander" onKeyDown={handlerrEntre} className="header-controls-pic header-controls-search header-controls-search-form">
			<form >
        <input name="searchup" className="form-control" type='text' onChange={handlerSearch} /> {/* value={inputValue} */}
			</form>

		</div>
	)
}
