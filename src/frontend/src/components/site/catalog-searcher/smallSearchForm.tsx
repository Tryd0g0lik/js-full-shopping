import { SearchContext } from '@type';
import React, { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from './useSearch';

export default function SmallSerachFormFC(): React.JSX.Element {
  const [smallSearchForm, setSmallSearchForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const { method } = useSearch();

  let fromPage = location.pathname || '/'; // location.state?.from?.pathname ||
  if (location.pathname !== undefined &&
    (location.pathname as string).includes('/catalog')) { // смотрим откуда была переадресайия
    null
  } else {
    fromPage = '/catalog';
  }

  const handlerSmallSearchFormOpen = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;
    if (String(target.classList).includes('header-controls-search')) {
      setSmallSearchForm(true)
    }
  }
  let searchTime: string | number | NodeJS.Timeout | undefined;
  const handlerSmallSearchForm = (event: ChangeEvent<HTMLInputElement>) => {
    let oldSearchly = "";


    const target = event.target;
    oldSearchly += target.value;
    clearTimeout(searchTime);
    searchTime = setTimeout(() => {
      if ((target.value).includes(oldSearchly)) {
        method(oldSearchly as string, () => navigate(fromPage, { state: { searchly: oldSearchly } }) as SearchContext['method']);
      }
    }, 700);
  }

  const smallForm = (smallSearchForm === false)
    ? (
      <div data-id="search-expander" onClick={handlerSmallSearchFormOpen} className="header-controls-pic header-controls-search">
      </div>
    )
    : (
      <div data-id="search-expander" className="header-controls-pic header-controls-search header-controls-search-form">
        <form >
          <input name="searchup" className="form-control" type='text' onChange={handlerSmallSearchForm} /> {/* value={inputValue} */}
        </form>
      </div>
    )

  return (smallForm)
}
