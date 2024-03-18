import React, { createContext, KeyboardEvent, useState, JSX, ChangeEventHandler, ChangeEvent } from 'react';
import { useSearch } from '@service/useSeacrch';
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
  let oldSearchly = "";
  const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
    let searchTime;
    // event.stopPropagation();
    const target = event.target;
    setInputValue(target.value);
    oldSearchly = target.value;
    clearTimeout(searchTime);
    searchTime = setTimeout(() => {
      if ((target.value).includes(oldSearchly)) {
        method(oldSearchly as string, () => navigate(fromPage, { state: { searchly: oldSearchly } })); // переадресация  
      }
    }, 1500);

  }

  return (
    <div data-id="search-expander" onKeyDown={handlerrEntre} className="header-controls-pic header-controls-search header-controls-search-form">
      <form >
        <input name="searchup" value={inputValue} className="form-control" type='text' onChange={handlerSearch} />
      </form>

    </div>
  )
}
