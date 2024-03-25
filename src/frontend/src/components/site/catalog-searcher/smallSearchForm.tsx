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
  // if (location.pathname !== undefined &&
  //   (location.pathname as string).includes('/catalog')) { // смотрим откуда была переадресайия
  //   null
  // } else {
    fromPage = '/catalog';
  // }
  let timeoutForm: NodeJS.Timeout;

  function timeout() {
    const target: HTMLElement | null = document.querySelector('header-controls-search-form');
    clearTimeout(timeoutForm);


    timeoutForm = setTimeout(() => {

      ((target !== null) && String(target.classList).includes('header-controls-search-form'))
        ? (
          target.classList.remove('header-controls-search-form'),
          target.innerHTML = ''
        ) : null

    }, 3000);

  };

  const handlerSmallSearchFormOpen = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;
    //header-controls-search-form
    (String(target.classList).includes('header-controls-search'))
      ? (
        setSmallSearchForm(true)

      ) : null
    //   if (String(target.classList).includes('header-controls-search')) {
    //     setSmallSearchForm(true)
    //   }
  }
  let searchTime: string | number | NodeJS.Timeout | undefined;
  const handlerSmallSearchForm = (event: ChangeEvent<HTMLInputElement>) => {
    let oldSearchly = "";
    const target = event.target;
    oldSearchly += target.value;

    clearTimeout(searchTime);
    searchTime = setTimeout(() => {
      ((target.value).includes(oldSearchly))
        ? (
          method(oldSearchly as string, () => navigate(fromPage, { state: { searchly: oldSearchly } }) as SearchContext['method'])
        )
        : null;
      timeout();
    }, 700);
  }

  const smallForm = (smallSearchForm === false)
    ? (
      <div data-id="search-expander" onClick={handlerSmallSearchFormOpen} className="header-controls-pic header-controls-search">
      </div>
    )
    : (
      <div data-id="search-expander" onClick={handlerSmallSearchFormOpen} className="header-controls-pic header-controls-search header-controls-search-form">
        <form >
          <input name="searchup" className="form-control" type='text' onChange={handlerSmallSearchForm} /> {/* value={inputValue} */}
        </form>
      </div>
    )

  return (smallForm)
}
