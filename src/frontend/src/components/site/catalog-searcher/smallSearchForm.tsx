import { SearchContext } from '@type';
import React, { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from './useSearch.ts';

let timeoutForm: NodeJS.Timeout;

function timeout(time: number): void {
  clearTimeout(timeoutForm);
  timeoutForm = setTimeout(() => {
    const target: HTMLElement = document.querySelector('div.header-controls-search-form') as HTMLElement;

    ((target !== null) &&
      (String(target.classList).includes('header-controls-search-form')))
      ? (
        target.classList.remove('header-controls-search-form'),
        target.innerHTML = ''
      )
      : null;
  }, time);
}
export default function SmallSerachFormFC(): React.JSX.Element {
  const [smallSearchForm, setSmallSearchForm] = useState(false);

  const navigate = useNavigate();
  const { method } = useSearch();

  const fromPage = '/catalog';
  let oldSearchly = '';

  const handlerSmallSearchFormOpen = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;
    (String(target.classList).includes('header-controls-search'))
      ? setSmallSearchForm(true)
      : null;
  };
  let searchTime: string | number | NodeJS.Timeout | undefined;
  const handlerSmallSearchForm = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;

    clearTimeout(searchTime);

    searchTime = setTimeout(() => {
      oldSearchly += target.value;
      ((window.location.pathname).includes('catalog'))
        ? (
          (document.querySelector('input#search') as HTMLInputElement).value = oldSearchly
        )
        : null;

      ((target.value).includes(oldSearchly))
        ? (
          method(oldSearchly, () => navigate(fromPage, { state: { searchly: oldSearchly } }) as SearchContext['method'])
        )
        : null;
    }, 700);
    timeout(3000);
  };

  const styles = (String(window.location.pathname).includes('catalog') ||
    String(window.location.pathname).includes('/cart'))
    ? { display: 'none' }
    : { display: 'block' };
  const smallForm = (!smallSearchForm)
    ? (
      <div data-id="search-expander" style={styles} onClick={handlerSmallSearchFormOpen} className="header-controls-pic header-controls-search">
      </div>
    )
    : (
      <div data-id="search-expander" className="header-controls-pic header-controls-search header-controls-search-form">
        <form >
          <input name="searchup" className="form-control" type='text' onChange={handlerSmallSearchForm} /> {/* value={inputValue} */}
        </form>
      </div>
    );

  return (smallForm);
}
