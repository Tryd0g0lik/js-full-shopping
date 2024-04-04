import { SearchContext } from '@type';
import React, { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from './useSearch.ts';

let timeoutForm: NodeJS.Timeout;

function timeout(time: number) {
  clearTimeout(timeoutForm);
  timeoutForm = setTimeout(() => {
    const target: HTMLElement = document.querySelector('div.header-controls-search-form') as HTMLElement;

    ((target !== null) && String(target.classList).includes('header-controls-search-form'))
      ? (
        target.classList.remove('header-controls-search-form'),
        target.innerHTML = ''
      ) : null

  }, time);

};
export default function SmallSerachFormFC(): React.JSX.Element {
  const [smallSearchForm, setSmallSearchForm] = useState(false);

  const navigate = useNavigate();
  const location = useLocation()
  const { method } = useSearch();

  let fromPage = '/catalog';
  let oldSearchly = "";

  const handlerSmallSearchFormOpen = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;
    (String(target.classList).includes('header-controls-search'))
      ? (
        setSmallSearchForm(true)

      ) : null
  }
  let searchTime: string | number | NodeJS.Timeout | undefined;
  const handlerSmallSearchForm = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;


    clearTimeout(searchTime);
    searchTime = setTimeout(() => {
      oldSearchly += target.value;
      ((window.location.pathname as string).includes('catalog'))
        ? (
          (document.querySelector('input#search') as HTMLInputElement).value = oldSearchly
        ) : null;

      ((target.value).includes(oldSearchly))
        ? (
          method(oldSearchly as string, () => navigate(fromPage, { state: { searchly: oldSearchly } }) as SearchContext['method'])
        )
        : null;

    }, 700);
    timeout(3000);
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
